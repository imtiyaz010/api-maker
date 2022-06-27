const { MongoClient } = require('mongodb');

const { MONGODB_URL, DATABASE_NAME } = require('../config/config');

const client = new MongoClient(MONGODB_URL);

const dbConnect = async (collection) => {
    let result = await client.connect();
    let db = result.db(DATABASE_NAME);
    return db.collection(collection);
}

module.exports = dbConnect;