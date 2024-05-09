import mongoose from 'mongoose';

const PingSchema = new mongoose.Schema({
	name: {
		type: String
	},
	date: {
		type: Date,
		default: Date.now
	},
	url: {
		type: String
	},
	emails:{
		type: Array
	},
	historic:[
		{
			date: {
				type: Date,
			},
			status:{
				type: String
			},
			responseTime: {
				type: Number
			}
		}
	]
});

export default mongoose.model('ping', PingSchema);
