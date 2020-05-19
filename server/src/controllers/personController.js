"use strict";

const PATH = require("path");
const PERSON = require(PATH.join(
  process.env.APP_PATH,
  "/server/src/models/personModel"
));
let personController = {};

personController.getAllPersons = async (req, res) => {
  let result = await personController.exceute("get");
  res.send(result);
};
personController.storeNewPerson = async (req, res) => {
  let result = await personController.exceute("store", req);
  res.json(result);
};
personController.deletePersonById = async (req, res) => {
  let result = await personController.exceute("delete", req);
  res.json(result);
};
personController.updatePersonById = async (req, res) => {
  let result = await personController.exceute("update", req);
  res.json(result);
};
personController.exceute = async (action, req = {}) => {
  let response = {
    data: {},
    message: {
      type: "",
      messageText: "",
    },
  };
  try {
    switch (action) {
      default:
      case "get":
        response.data = await PERSON.find({ active: 1 });
        break;
      case "store":
        let { nombre, apellido1, apellido2, age } = req.body;
        let newPerson = new PERSON({ nombre, apellido1, apellido2, age });
        response.data = await newPerson.save();
        break;
      case "delete":
        response.data = await PERSON.findByIdAndDelete(req.params._id);
        break;
      case "update":
        response.data = await PERSON.findOneAndUpdate({ _id: req.body._id }, req.body);
        break;
    }
    response.message.type = "success";
    response.message.messageText = "Successful operation";
  } catch (e) {
    response.data = {};
    response.message.type = "error";
    response.message.messageText = `UPS!! Something unexpected happened: ${e.message}`;
  }
  return response;
};

module.exports = personController;
