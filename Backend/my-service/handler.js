const mongoose = require('mongoose');
const Activity = require('./models/Activity');
const util = require('./utils');
require('./services/cache');
const { connectDB } = require('./db');('use strict');module.exports.handler = async (event) => {
  try {const response = await connectDB().then(async () => {
      const activities = await Activity.find().cache();
      console.log('Successfully fetched activities from db');return {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Headers": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(activities),
      };
    });mongoose.connection.close();return response;} catch (err) {
    console.log('Encountered an error:', err);return {
      statusCode: err.statusCode ? err.statusCode : 500,
      headers: {
        "Access-Control-Allow-Headers": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        error: err.name ? err.name : 'Exception',
        message: err.message ? err.message : 'Unknown error',
      }),
    };
  }
};


/*'use strict';
const dbjs = require('./db.js');
module.exports.getActivities = async event => {
  const db = await dbjs.get();

  const activities = await db.collection('activities').find().toArray();
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
};*/
