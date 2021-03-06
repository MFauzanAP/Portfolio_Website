//	Imports
import { MongoClient } from 'mongodb';


//	Get environment variables
const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB = process.env.MONGODB_DB;

global.cachedClient = null;
global.cachedDb = null;

//	Function used to connect to the databse
export async function connect_to_database() {

	//	Check if there is a cached client or database
	if (global.cachedClient && global.cachedDb) {

		//	Load from cache instead
		return {
			client			: global.cachedClient,
			db			: global.cachedDb
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
	global.cachedClient = client;
	global.cachedDb = db;

	//	Return client and database
	return {
		client			: global.cachedClient,
		db			: global.cachedDb,
	};

}