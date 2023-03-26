const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Album category must have a title"],
    },
    albums: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Album",
      },
    ],
  },
);

categorySchema.pre(/^find/, function (next) {
  this.populate({
    path: "albums",
    select: "-__v",
  });
  next();
});

module.exports = mongoose.model("Category", categorySchema);
