const mongoose = require("mongoose");
const { clearKey } = require("../services/cache");
const Activity = mongoose.model("Activity");

module.exports = app => {
  app.get("/api/books", async (req, res) => {
    let books;{
      books = await Activity.find().cache({
        time: 10
      });
    }

    res.send(books);
  });

};