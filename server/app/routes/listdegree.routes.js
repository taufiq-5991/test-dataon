module.exports = app => {
  const listdegrees = require("../controllers/listdegree.controller.js");

  var router = require("express").Router();

  // Retrieve all listdegree
  router.get("/", listdegrees.findAll);

  // Update a listdegree with id
  router.put("/:id", listdegrees.update);

  // Delete a listdegree with id
  router.delete("/:id", listdegrees.delete);

  app.use("/api/listdegrees", router);
};
