//	Imports
import { MongoClient } from 'mongodb';


//	Get environment variables
const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB = process.env.MONGODB_DB;

let cachedClient = null;
let cachedDb = null;

//	Function used to connect to the databse
export async function connectToDatabase() {

	//	Check if there is a cached client or database
	if (cachedClient && cachedDb) {

		//	Load from cache instead
		return {
			client			: cachedClient,
			db			: cachedDb
		};

	}

	//	Declare connection options
	const options = {
		useNewUrlParser		: true,
		useUnifiedTopology	: true,
	};

	//	Create new client
	let client = new MongoClient(MONGODB_URI, options);
	await client.connect();

	//	Connect to database
	let db = client.db(MONGODB_DB);

	//	Store database and client in cache
	cachedClient = client;
	cachedDb = db;

	//	Return client and database
	return {
		client			: cachedClient,
		db			: cachedDb,
	};

}