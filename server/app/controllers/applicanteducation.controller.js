const db = require("../models");
const Applicanteducation = db.applicanteducation;
const Op = db.Sequelize.Op;
const { QueryTypes } = require('sequelize');

// Create and Save a new Applicanteducation
exports.create = (req, res) => {
  
  // Create a Applicanteducation
  const applicanteducation = {
    school_name: req.body.school_name,
    start_date: req.body.start_date,
    end_date: req.body.end_date,
    major: req.body.major,
    grade: req.body.grade,
    applicant_id: req.body.applicant_id,
    degree_id: req.body.degree_id
  };

  // Save Applicanteducation in the database
  Applicanteducation.create(applicanteducation)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Applicanteducation."
      });
    });
};

// Retrieve all Applicanteducations from the database.
exports.findAll = async (req, res) => {

  const records = await db.sequelize.query("SELECT `apl`.`fullname`, `ae`.*, `dl`.`degree_name` FROM `applicant_educations` AS `ae` INNER JOIN `applicant_data` AS `apl` ON `apl`.`id` = `ae`.`applicant_id` INNER JOIN `list_degrees` AS `dl` ON `dl`.`id` = `ae`.`degree_id` ", {
      type: QueryTypes.SELECT
  });
      res.send(records);
};

// Find a single Applicanteducation with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Applicanteducation.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Applicanteducation with id=" + id
      });
    });
};

// Find an applicant's Applicanteducation
exports.findApplicant = async (req, res) => {
  const id = req.params.id;

  const records = await db.sequelize.query("SELECT `ae`.*, `deg`.`degree_name` FROM `applicant_educations` AS `ae` JOIN `list_degrees` `deg` ON `deg`.`id` = `ae`.`degree_id` WHERE `ae`.`applicant_id` = "+id+"", {
      type: QueryTypes.SELECT
  });
      console.log(records[0]);
      res.send(records[0]);
};

// Update a Applicanteducation by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Applicanteducation.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Applicanteducation was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Applicanteducation with id=${id}. Maybe Applicanteducation was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Applicanteducation with id=" + id
      });
    });
};

// Delete a Applicanteducation with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Applicanteducation.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Applicanteducation was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Applicanteducation with id=${id}. Maybe Applicanteducation was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Applicanteducation with id=" + id
      });
    });
};