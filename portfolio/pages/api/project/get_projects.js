//      Imports
import { connect_to_database } from '@/middleware/mongodb';

//	Function used to retrieve projects from the database
export default async function (req, res) {

	//	Get options from request body
	var options = req.body;
	options.page = options.page || 1;

	//      Connect to database
	const { db } = await connect_to_database();

	//	Declare variable to store query
	var query = {
		$and		: [
			{
				visible: true
			}
		]
	};

	//	If there are categories to filter by then add them to the query
	if (options.categories && options.categories.length > 0) {

		//	Add each category to the query
		query.$and.push({$or: options.categories.map(elem => {

			//	Return processed category
			return { category: elem };

		})});

	}

	//	If there are statuses to filter by then add them to the query
	if (options.status && options.status.length > 0) {

		//	Add each status to the query
		query.$and.push({$or: options.status.map(elem => {

			//	Return processed status
			return { status: elem };

		})});

	}

	//	If there are featured to filter by then add them to the query
	if (options.featured && options.featured.length > 0) {

		//	Add each featured to the query
		query.$and.push({ featured: true });

	}

	//	If there is a search query then add it to the query
	if (options.search) {

		//	Add search to query
		query.$and.push({ $text: { $search: options.search } });

	}

	//      Get collection data
	var projects = await db.collection('projects').find(query).sort(Object.keys(query).length > 1 ? {} : {'date': -1}).skip((options.page - 1) * 9).limit(9).toArray();

	//	Get number of projects
	var count = (await db.collection('projects').find(query).sort(Object.keys(query).length > 1 ? {} : {'date': -1}).toArray()).length;

	//      Return projects
	res.json({length: count, data: projects});

}