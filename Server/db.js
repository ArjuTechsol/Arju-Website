const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017'; // Assuming MongoDB is running on the default port
const dbName = 'ArjuTechsolDB'; // Replace with your desired database name

async function connect() {
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    console.log('Connected to the database');
    return client.db(dbName);
  } catch (err) {
    console.error('Error connecting to the database:', err);
    throw err;
  }
}

module.exports = { connect };