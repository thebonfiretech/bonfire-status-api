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
		type: Array,
		default: []
	},
	historic:[
		{
			date: {
				type: Date,
				default: Date.now()
			},
			status:{
				type: String
			},
			responseTime: {
				type: Number
			},
			isSuccess: {
				type: Boolean
			}
		}
	]
});

export default mongoose.model('ping', PingSchema);
