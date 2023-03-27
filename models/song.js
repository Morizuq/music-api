const mongoose = require("mongoose");

const songSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Album category must have a title"],
  },

  imgUri: String,

  uri: String,

  playUri: String,
  
  artist: {
    type: String,
    minLength: [3, "Name cannot be less than 3 characters"],
  },
});

module.exports = mongoose.model("Song", songSchema);
