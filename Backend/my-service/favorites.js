'use strict';
const dbjs = require('./db.js');
module.exports.getFavorites = async event => {
  const db = await dbjs.get();

  const activities = await db.collection('favorites').find().toArray();
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Headers": "application/json",
      "Access-Control-Allow-Origin": "*",
      //"Access-Control-Allow-Methods": "OPTIONS,POST,GET"
    },
    body: JSON.stringify({
      activities: activities
    })
  };
};
