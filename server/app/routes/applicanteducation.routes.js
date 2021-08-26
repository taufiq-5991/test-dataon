module.exports = app => {
  const applicanteducations = require("../controllers/applicanteducation.controller.js");

  var router = require("express").Router();

  // Create a new applicanteducation
  router.post("/", applicanteducations.create);

  // Retrieve all applicanteducation
  router.get("/", applicanteducations.findAll);

  // Retrieve a single applicanteducation with id
  router.get("/:id", applicanteducations.findOne);

  // Retrieve an applicant's applicanteducation
  router.get("/applicant/:id", applicanteducations.findApplicant);

  // Update a applicanteducation with id
  router.put("/:id", applicanteducations.update);

  // Delete a applicanteducation with id
  router.delete("/:id", applicanteducations.delete);

  app.use("/api/applicanteducations", router);
};
