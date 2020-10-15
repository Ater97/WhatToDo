const { Double, Int32 } = require('bson');
const mongoose = require('mongoose');
const validator = require('validator');
/**
     {"_id":{"$oid":"5f70dd8486da3c00d3644735"},
     "activity":"Sleep",
     "image":"/assets/images/sleep.png",
     "cover":"/assets/covers/sleep.jpeg",
     "description":"The natural, easily reversible periodic state of many living things that is marked by the absence of wakefulness and by the loss of consciousness of one's surroundings.",
     "participantsMax":{"$numberInt":"0"},
     "participantsMin":{"$numberInt":"1"},
     "budget":{"$numberInt":"0"},
     "time":{"$numberDouble":"0"},
     "intensity":"low"}
 */
const model = mongoose.model('Activity', {
    activity: {
        type: String,
        required: true,
        validate: {
            validator(activity) {
                return validator.isAlphanumeric(activity);
            },
        },
    },
    image: {
        type: String,
        required: true,
        /* validate: {
             validator(activities) {
                 return validator.isAlphanumeric(activities);
             },
         },*/
    },
    cover: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    participantsMax: {
        type: Int32,
        required: false,
    },
    participantsMin: {
        type: Int32,
        required: false,
    },
    budget: {
        type: Double,
        required: false,
    },
    time: {
        type: Double,
        required: true,
    },
    intensity: {
        type: String,
        required: true,
    }
    
});

module.exports = model;