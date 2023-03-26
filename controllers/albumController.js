const Album = require(".././models/album");
const ancestor = require("./ancestor");

exports.createAlbum = ancestor.creatOne(Album);

exports.getAlbums = ancestor.getAll(Album);

exports.getAlbum = ancestor.getOne(Album, { path: "songs", select: "-__v" });

exports.updateAlbum = ancestor.updateOne(Album);

exports.deleteAlbum = ancestor.deleteOne(Album);
