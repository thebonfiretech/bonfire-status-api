import pingModel from "../../models/ping.js";

export default class Service {

    async getHistoric({}){
        try {
			return await pingModel.find();
        } catch (err) {
            return { error: "internal_error" } ;
        }
    }
    
    async post({}){
        try {
					
        } catch (err) {
            return { error: "internal_error" } ;
        }
    }
    
    async createPing(data){
        try {
			const ping = new pingModel(data);
            await ping.save();
            return ping;
        } catch (err) {
            return { error: "internal_error" } ;
        }
    }
    
    async deletePing({id}){
        try {
		    await pingModel.findByIdAndDelete(id);
            return true;
        } catch (err) {
            return { error: "internal_error" } ;
        }
    }

}