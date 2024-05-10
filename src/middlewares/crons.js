import pingModel from "../models/ping.js";

import axios from "axios";

export default class Crons {

    async getAllPing(){
        try {
            const pings = await pingModel.find(); 

            const pingResults = await Promise.all(
                pings.map(async (ping) => {
                    const start = performance.now();
                    let error = false;
                    let status;
                    let responseTime;

                    try {
                        const response = await axios.get(ping.url);
                        responseTime = performance.now() - start;
                        status = response.status;
                    } catch (err) {
                        error = true;
                        responseTime = performance.now() - start;
                        status = err.response ? err.response.status : null;
                    }
                    var data = {
                            url: ping.url,
                            responseTime: responseTime.toFixed(2),
                            status,
                            isSuccess: !error && status >= 200 && status < 300,
                        };

                    await pingModel.findByIdAndUpdate(ping._id, {
                        $push: {
                            historic: data
                        }
                    });
                    return data;
                })
            );

        } catch (e) {
            
        }
    }   

}
