//      Imports
import { connect_to_database } from '../../../middleware/mongodb';

//	Function used to retrieve projects from the database
export default async function (req, res) {

	//      Connect to database
	const { db } = await connect_to_database();

	//      Get collection data
	const projects = await db.collection('projects').find({}).sort({'date': -1}).toArray();

	//      Return projects
	res.json(projects);

}