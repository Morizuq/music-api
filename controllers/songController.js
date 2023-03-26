const Song = require("../models/song");
const ancestor = require("./ancestor");

exports.createSong = ancestor.creatOne(Song);

exports.getSongs = ancestor.getAll(Song);

exports.getSong = ancestor.getOne(Song);

exports.updateSong = ancestor.updateOne(Song);

exports.deleteSong = ancestor.deleteOne(Song);