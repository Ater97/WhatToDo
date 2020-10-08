const mongoose = require('mongoose');
const validator = require('validator');
/**
     _id Objectid:5f7568255644b2579e5ccf7f
    user:"sebas"
    activities:Array
        0:Object
            activity:"Sleep"
            completed:true
        1:Object
            activity:"Eat"
            completed:false
 */
const ActivitieSchema = new mongoose.Schema({
    activity: String,
    image: String,
    cover: String,
    description: String,
    completed: Boolean,
  });

const model = mongoose.model('Favorite', {
    user: {
        type: String,
        required: true,
        validate: {
            validator(user) {
                return validator.isAlphanumeric(user);
            },
        },
    },
    activities: {
        type: [ActivitieSchema],
        required: true,
        /* validate: {
             validator(activities) {
                 return validator.isAlphanumeric(activities);
             },
         },*/
    }
});

module.exports = model;