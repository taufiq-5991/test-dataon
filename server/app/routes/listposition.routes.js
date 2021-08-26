module.exports = app => {
  const listpositions = require("../controllers/listposition.controller.js");

  var router = require("express").Router();

  // Retrieve all listposition
  router.get("/", listpositions.findAll);

  // Update a listposition with id
  router.put("/:id", listpositions.update);

  // Delete a listposition with id
  router.delete("/:id", listpositions.delete);

  app.use("/api/listpositions", router);
};
