//      Imports
import { connectToDatabase } from '../../../middleware/mongodb';

//	Function used to retrieve projects from the database
export default async function (req, res) {

	//      Connect to database
	const { db } = await connectToDatabase();

	//      Get collection data
	const projects = await db.collection('projects').find({}).sort({'date': -1}).toArray();

	//      Return projects
	res.json(projects);

}