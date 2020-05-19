"use strict";

const PATH = require("path");
const {
  getAllPersons,
  storeNewPerson,
  deletePersonById,
  updatePersonById,
} = require(PATH.join(process.env.APP_PATH, "/server/src/controllers/personController"));
const { Router } = require("express");
const ROUTER = Router();

ROUTER.get("/", getAllPersons);
ROUTER.post("/new_record", storeNewPerson);
ROUTER.delete("/delete_record/:_id", deletePersonById);
ROUTER.put("/update_record", updatePersonById);

module.exports = ROUTER;