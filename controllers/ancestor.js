const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

const APIFeatures = require("../utils/apiFeatures");

//Create a document and send response
exports.creatOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        doc,
      },
    });
  });

//Get all documents and send response
exports.getAll = (Model) =>
  catchAsync(async (req, res, next) => {
    const features = new APIFeatures(Model.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    const doc = await features.query;

    res.status(200).json({
      status: "success",
      result: doc.length,
      data: {
        doc,
      },
    });
  });

//Get one document and send response
exports.getOne = (Model, populateOption) =>
  catchAsync(async (req, res, next) => {
    let query = Model.findById(req.params.id);
    if (populateOption) query = query.populate(populateOption);

    const doc = await query;
    if (!doc) return new AppError("Document not found", 404);

    res.status(200).json({
      status: "success",
      data: {
        doc,
      },
    });
  });

//Update one document and send response
exports.updateOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!doc) return new AppError("Document not found", 404);

    res.status(200).json({
      status: "success",
      data: {
        doc,
      },
    });
  });

//Delete one document and send response
exports.deleteOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndDelete(req.params.id);

    if (!doc) return new AppError("Document not found", 404);

    res.status(204).json({
      status: "success",
      data: null,
    });
  });
