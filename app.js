const express = require("express");
const app = express();
require("dotenv").config();

//In case of uncaught exceptions
process.on("uncaughtException", (err) => {
  console.log("ERROR: uncaught exception");
  console.log(err.name, err.message);
});

const connectDB = require("./config/connect");
const songs = require("./routers/songRouter");
const albums = require("./routers/albumRouter");
const category = require("./routers/categoryRouter");
const globalAppErrorHandler = require("./controllers/errorController");

const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome To This Amazing Music API");
});

app.use("/api/v1/songs", songs);
app.use("/api/v1/albums", albums);
app.use("/api/v1/category", category);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl}`, 404));
});

app.use(globalAppErrorHandler);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();

process.on("unhandledRejecion", (err) => {
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

process.on("SIGTERM", () => {
  console.log("👋 SIGTERM RECEIVED. Shutting down gracefully");
  server.close(() => {
    console.log("💥 Process terminated!");
  });
});
