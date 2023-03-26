const mongoose = require("mongoose");

const albumSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Album must have a title"],
    },
    songs: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Song",
      },
    ],
  }
);

/*
Embending

Not efficient, would rather implement referencing

albumSchema.pre('save', async function(next){
  Get the song ids and map through to get the whole documents 
  const songsPromises = this.songs.map(async id => await Song.findById(id))
  this.guides = await Promise.all(songsPromises)
  next()
})
*/

albumSchema.pre(/^find/, function (next) {
  this.populate({
    path: "songs",
    select: "-__v",
  });
  next();
});
module.exports = mongoose.model("Album", albumSchema);
