module.exports = app => {
  const applicantexperiences = require("../controllers/applicantexperience.controller.js");

  var router = require("express").Router();

  // Create a new applicantexperience
  router.post("/", applicantexperiences.create);

  // Retrieve all applicantexperience
  router.get("/", applicantexperiences.findAll);

  // Retrieve a single applicantexperience with id
  router.get("/:id", applicantexperiences.findOne);

  // Retrieve an applicant's applicanteducation
  router.get("/applicant/:id", applicantexperiences.findApplicant);
  
  // Update a applicantexperience with id
  router.put("/:id", applicantexperiences.update);

  // Delete a applicantexperience with id
  router.delete("/:id", applicantexperiences.delete);

  app.use("/api/applicantexperiences", router);
};
