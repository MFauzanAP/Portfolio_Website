//      Imports
import { connect_to_database } from '@/middleware/mongodb';

//	Function used to retrieve projects from the database
export default async function (req, res) {

	//	Get options from request body
	var options = req.body;

	//      Connect to database
	const { db } = await connect_to_database();

	//	Declare variable to store query
	var query = {};

	//	If there are categories to filter by then add them to the query
	if (options.categories && options.categories.length > 0) {

		//	Set $and operator if it doesn't exist
		if (query.$and === undefined) query.$and = [];

		//	Add each category to the query
		query.$and.push({$or: options.categories.map(elem => {

			//	Return processed category
			return { category: elem };

		})});

	}

	//	If there is a search query then add it to the query
	if (options.search) {

		//	Set $and operator if it doesn't exist
		if (query.$and === undefined) query.$and = [];

		//	Add search to query
		query.$and.push({ $text: { $search: options.search } });

	}

	//      Get collection data
	var tech_stack = await db.collection('tech_stack').find(query).sort({}).toArray();

	//	Get number of tech_stack
	var count = tech_stack.length;

	//      Return projects
	res.json({length: count, data: tech_stack});

}