const mongoose = require("mongoose");
const { Schema, model } = require('mongoose');

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

const ActivitySchema = new Schema({
    _id: {
      type: String
    },
    activity: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    cover: {
      type: String,
    },
    description: {
      type: String,
    },
    participantsMax: {
      type: Number,
    },
    participantsMin: {
      type: Number,
    },
    time: {
      type: Number,
    },
    intensity: {
      type: String,
    }
  });
  
mongoose.model("Activity", ActivitySchema);
//const Activity = model('activities', ActivitySchema);
//module.exports = Activity;