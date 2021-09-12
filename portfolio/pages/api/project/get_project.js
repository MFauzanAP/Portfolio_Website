//      Imports
import { connect_to_database } from '@/middleware/mongodb';

//	Function used to retrieve project data from the database
export default async function (req, res) {

        //      Get project name from request body
        const { name } = req.body;

	//      Connect to database
	const { db } = await connect_to_database();

	//      Get project data from server
	const project = await db.collection('projects').find({ 'name': name }).toArray();

	//      Return projects
	res.json(project[0]);

}