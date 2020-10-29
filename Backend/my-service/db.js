const mongoose = require('mongoose');
const db = process.env.USERS_DB;
const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log('MongoDB connected...');
  } catch (err) {
    console.log(err.message);
    // Exit process with failure
    process.exit(1);
  }
}; module.exports = { connectDB };

/*"use strict";
const MongoClient = require('mongodb').MongoClient;
const MONGODB_URI = 'mongodb+srv://admin:vpuLbU9XzBoLSQRN@cluster0.o88g9.mongodb.net/what_to_do?retryWrites=true&w=majority';
let dbInstance = null;module.exports.get = async function () {
  if (dbInstance) {
    return Promise.resolve(dbInstance);
  }
  const db = await MongoClient.connect(MONGODB_URI);
  dbInstance = db.db("what_to_do");
  return dbInstance;
}*/
