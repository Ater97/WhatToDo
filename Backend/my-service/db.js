"use strict";
const MongoClient = require('mongodb').MongoClient;
const MONGODB_URI = 'mongodb+srv://admin:vpuLbU9XzBoLSQRN@cluster0.o88g9.mongodb.net/what_to_do?retryWrites=true&w=majority';
let dbInstance = null;module.exports.get = async function () {
  if (dbInstance) {
    return Promise.resolve(dbInstance);
  }
  const db = await MongoClient.connect(MONGODB_URI);
  dbInstance = db.db("what_to_do");
  return dbInstance;
}