const mongoose = require("mongoose");
const { clearKey } = require("../services/cache");
const Activity = mongoose.model("Activity");

module.exports = app => {
    app.get("/activities", async (res) => {
        let activities = await Activity.find.cache({
            time: 10
        });
        res.send(activities);
    });

};