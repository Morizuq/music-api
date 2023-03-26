const Category = require("../models/category");
const ancestor = require("./ancestor");

exports.createCategory = ancestor.creatOne(Category);

exports.getCategories = ancestor.getAll(Category);

// exports.getCategory = ancestor.getOne(Category, {
//   path: "albums",
//   select: "-__v",
// });

exports.getCategory = ancestor.getOne(Category);

exports.updateCategory = ancestor.updateOne(Category);

exports.deleteCategory = ancestor.deleteOne(Category);
