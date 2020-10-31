const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
//const keys = require("./config/keys");

require("./services/cache");
require("./models/Activity");

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://admin:vpuLbU9XzBoLSQRN@cluster0.o88g9.mongodb.net/what_to_do?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

require("./routes/activityRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening on port`, PORT);
});
///////////////////////////////////////////

/*
'use strict';
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
};
*/