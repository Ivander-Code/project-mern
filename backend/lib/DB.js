"use strict";
const MONGOOSE = require("mongoose");
const URI = process.env.DB_URI ? process.env.DB_URI : "mongodb://localhost/testdb";

MONGOOSE.connect(URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const CONNECTION = MONGOOSE.connection;

CONNECTION.once("open", () => {
  console.log("Connected Database");
});
