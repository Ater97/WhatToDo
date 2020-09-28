'use strict';
const dbjs = require('./db.js');
module.exports.getActivities = async event => {
  const db = await dbjs.get();
  
  const activities = await db.collection('activities').find().toArray();
  return { statusCode: 200, body: JSON.stringify({ activities: activities })   };
};

/**
 * 
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:vpuLbU9XzBoLSQRN@cluster0.o88g9.mongodb.net/what_to_do?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("what_to_do").collection("activities");
  // perform actions on the collection object
  client.close();
});


  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };
 */