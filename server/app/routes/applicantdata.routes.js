module.exports = app => {
  const applicantdatas = require("../controllers/applicantdata.controller.js");

  var router = require("express").Router();

  // Create a new applicantdata
  router.post("/", applicantdatas.create);

  // Retrieve all applicantdata
  router.get("/", applicantdatas.findAll);

  // Retrieve a single applicantdata with id
  router.get("/:id", applicantdatas.findOne);

  // Update a applicantdata with id
  router.put("/:id", applicantdatas.update);

  // Delete a applicantdata with id
  router.delete("/:id", applicantdatas.delete);

  app.use("/api/applicantdatas", router);
};
