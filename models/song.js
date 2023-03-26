const mongoose = require("mongoose");

const songSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Album category must have a title"],
  },

  imageUri: String,

  uri: String,

  artist: {
    type: String,
    maxLength: [20, "Name cannot be more than 20 characters"],
    minLength: [3, "Name cannot be less than 3 characters"],
  },
});

module.exports = mongoose.model("Song", songSchema);
