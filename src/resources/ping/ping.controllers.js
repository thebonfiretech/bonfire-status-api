import { handleRequest } from "../../app.js";
import Service from "./ping.service.js";

export default class Controller {
	service = new Service();
	
	getHistoric = async (req, res) => handleRequest(req, res, this.service.getHistoric);
	createPing = async (req, res) => handleRequest(req, res, this.service.createPing);
	deletePing = async (req, res) => handleRequest(req, res, this.service.deletePing);
	post = async (req, res) => handleRequest(req, res, this.service.post);

}
