const mongoose = require('mongoose');
const Promise = require('bluebird');
const validator = require('validator');
const FavoriteModel = require('./models/Favorite.js');

mongoose.Promise = Promise;

const mongoString = 'mongodb+srv://admin:vpuLbU9XzBoLSQRN@cluster0.o88g9.mongodb.net/what_to_do?retryWrites=true&w=majority';

const createErrorResponse = (statusCode, message) => ({
  statusCode: statusCode || 501,
  headers: { 'Content-Type': 'text/plain' },
  body: message || 'Incorrect id',
});

const dbExecute = (db, fn) => db.then(fn).finally(() => db.close());

function dbConnectAndExecute(dbUrl, fn) {
  return dbExecute(mongoose.connect(dbUrl, { useMongoClient: true }), fn);
}

module.exports.getFavorites = (event, context, callback) => {
  if (!validator.isAlphanumeric(event.pathParameters.id)) {
    callback(null, createErrorResponse(400, 'Incorrect id'));
    return;
  }

  dbConnectAndExecute(mongoString, () => (
    FavoriteModel
      .find({ user: event.pathParameters.id })
      .then(favorite => callback(null, {
        statusCode: 200,
        body: JSON.stringify(favorite),
        headers: {
          "Access-Control-Allow-Headers": "application/json",
          "Access-Control-Allow-Origin": "*",
          //"Access-Control-Allow-Methods": "OPTIONS,POST,GET"
        },
      }))
      .catch(err => callback(null, createErrorResponse(err.statusCode, err.message)))
  ));
};

module.exports.createFavorite = (event, context, callback) => {
  const data = JSON.parse(event.body);

  const favorite = new FavoriteModel({
    user: data.user,
    activities: data.activities
  });

  if (favorite.validateSync()) {
    callback(null, createErrorResponse(400, 'Incorrect favorite data'));
    return;
  }

  dbConnectAndExecute(mongoString, () => (
    favorite
      .save()
      .then(() => callback(null, {
        statusCode: 200,
        body: JSON.stringify({ user: favorite.user }),
        headers: {
          "Access-Control-Allow-Headers": "application/json",
          "Access-Control-Allow-Origin": "*",
          //"Access-Control-Allow-Methods": "OPTIONS,POST,GET"
        },
      }))
      .catch(err => callback(null, createErrorResponse(err.statusCode, err.message)))
  ));
};

module.exports.updateFavorite = (event, context, callback) => {
  const data = JSON.parse(event.body);
  const user = event.pathParameters.id;

  if (!validator.isAlphanumeric(user)) {
    callback(null, createErrorResponse(400, 'Incorrect id'));
    return;
  }

  const favorite = new FavoriteModel({
    user: user,
    activities: data.activities
  });

  if (favorite.validateSync()) {
    callback(null, createErrorResponse(400, 'Incorrect parameter'));
    return;
  }

  dbConnectAndExecute(mongoString, () => (
    FavoriteModel.findByIdAndUpdate(user, favorite)
      .then(() => callback(null, {
        statusCode: 200,
        body: JSON.stringify('Ok'),
        headers: {
          "Access-Control-Allow-Headers": "application/json",
          "Access-Control-Allow-Origin": "*",
          //"Access-Control-Allow-Methods": "OPTIONS,POST,GET"
        },
      }))
      .catch(err => callback(err, createErrorResponse(err.statusCode, err.message)))
  ));
};