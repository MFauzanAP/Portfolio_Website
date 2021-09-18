//      Imports
import { connect_to_database } from '@/middleware/mongodb';

//	Function used to retrieve projects from the database
export default async function (req, res) {

	//	Get options from request body
	const options = req.body;

	//      Connect to database
	const { db } = await connect_to_database();

	//	Declare variable to store query
	var query = { };

	//	If there are categories to filter by then add them to the query
	if (options.categories && options.categories.length > 0) {

		//	Set and query
		if (!query.$and) query.$and = [];

		//	Add each category to the query
		query.$and.push({$or: options.categories.map(elem => {

			//	Return processed category
			return { category: elem };

		})});

	}

	//	If there are statuses to filter by then add them to the query
	if (options.status && options.status.length > 0) {

		//	Set and query
		if (!query.$and) query.$and = [];

		//	Add each status to the query
		query.$and.push({$or: options.status.map(elem => {

			//	Return processed status
			return { status: elem };

		})});

	}

	//	If there are featured to filter by then add them to the query
	if (options.featured && options.featured.length > 0) {

		//	Set and query
		if (!query.$and) query.$and = [];

		//	Add each featured to the query
		query.$and.push({ featured: true });

	}

	//	If there is a search query then add it to the query
	if (options.search) {

		//	Set and query
		if (!query.$and) query.$and = [];

		//	Add search to query
		query.$and.push({ $text: { $search: options.search } });

	}

	//      Get collection data
	const projects = await db.collection('projects').find(query).sort(Object.keys(query).length ? {} : {'date': -1}).toArray();

	//      Return projects
	res.json(projects);

}