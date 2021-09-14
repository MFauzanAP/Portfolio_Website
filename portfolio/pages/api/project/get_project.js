//	Imports
import { connect_to_database } from '@/middleware/mongodb';

//	Function used to retrieve project data from the database
export default async function (req, res) {

	//	Get project name from request body
	const { name } = req.body;

	//	Connect to database
	const { db } = await connect_to_database();

	//	Get all projects from server
	var projects = await db.collection('projects').find({}).sort({'date': -1}).toArray();
	
	//	Loop through all projects and return the specified project
	for (let i = 0; i < projects.length; i++) {

		//	Get project
		const project = projects[i];

		//	Check if project is the one that we need
		if (project.name == name) {

			//	Get the left and right projects
			var left = i > 0 ? projects[i - 1].name : '';
			var right = i < projects.length - 1 ? projects[i + 1].name : '';

			//	Return this document
			res.json({data: project, left, right});

			//	Break out of loop
			break;

		}
		
	}

}