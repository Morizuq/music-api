const fs = require("fs");
require("dotenv").config();

const Song = require("../models/song");
const Album = require("../models/album");
const Category = require("../models/category");
const connectDB = require("./connect");

//Connect to the database
connectDB(process.env.MONGO_URI);

//Fetch Data from their respective JSON file
const songs = JSON.parse(
  fs.readFileSync(`${__dirname}/../devdata/songs.json`, "utf-8")
);

const album = JSON.parse(
  fs.readFileSync(`${__dirname}/../devdata/albums.json`, "utf-8")
);

const category = JSON.parse(
  fs.readFileSync(`${__dirname}/../devdata/category.json`, "utf-8")
);

//Import Data
const importData = async () => {
  try {
    await Song.create(songs);
    await Album.create(album);
    await Category.create(category);
    console.log("Data imported successfully");
  } catch (error) {
    console.log(error);
  }
  process.exit();
};

const deleteData = async () => {
  try {
    await Song.deleteMany();
    await Album.deleteMany();
    await Category.deleteMany();
    console.log("Data successfully deleted");
  } catch (error) {
    console.log(error);
  }
  process.exit();
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] == "--delete") {
  deleteData();
}
