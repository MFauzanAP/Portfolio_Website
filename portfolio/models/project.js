//      Imports
import mongoose from 'mongoose';
var Schema = mongoose.Schema;

//      Declare project model
var project = new Schema({
	name			: {
		type			: String,
		required		: true
	},
	images			: [{
		type			: String,
		required		: true
	}],
	description		: {
		short			: {
			type			: String,
			required		: true
		}, 
		long			: {
			type			: String,
			required		: true
		}
	},
	tech_stack		: [{
		type			: String,
		required		: true
	}],
	date			: {
		type			: Date,
		required		: true
	}
})

//	Add model to database
mongoose.models = {};
var Project = mongoose.model('Project', project);

//	Export model
export default Project