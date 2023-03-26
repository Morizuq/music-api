const mongoose = require("mongoose");

const conectDB = (url) => {
  return mongoose.connect(url);
};

module.exports = conectDB;
