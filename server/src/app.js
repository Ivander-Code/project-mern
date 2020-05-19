"use strict";

const PATH = require("path");
const ROUTER = require(PATH.join(
  process.env.APP_PATH,
  "/server/src/routes/personRoute"
));
const CORS = require("cors");
const EXPRESS = require("express");
const APP = EXPRESS();

//setting
APP.set("port", process.env.PORT || 4000);
APP.set("json spaces", 2);

//middlewares
APP.use(EXPRESS.json());
APP.use(EXPRESS.urlencoded({ extended: false }));

//CORS Configuration , Public RESTful API
APP.use(CORS());
APP.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Credentials", "Authorization");
  next();
});

//routes
APP.use(ROUTER);

module.exports = APP;