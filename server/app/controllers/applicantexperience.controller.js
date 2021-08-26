const db = require("../models");
const Applicantexperience = db.applicantexperience;
const Op = db.Sequelize.Op;
const { QueryTypes } = require('sequelize');

// Create and Save a new Applicantexperience
exports.create = (req, res) => {

  // Create a Applicantexperience
  const applicantexperience = {
    company_name: req.body.company_name,
    position: req.body.position,
    start_date: req.body.start_date,
    end_date: req.body.end_date,
    applicant_id: req.body.applicant_id
  };

  // Save Applicantexperience in the database
  Applicantexperience.create(applicantexperience)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Applicantexperience."
      });
    });
};

// Retrieve all Applicantexperiences from the database.
exports.findAll = async (req, res) => {

  const records = await db.sequelize.query("SELECT `apl`.`fullname`, `ax`.* FROM `applicant_experiences` AS `ax` INNER JOIN `applicant_data` AS `apl` ON `apl`.`id` = `ax`.`applicant_id`", {
      type: QueryTypes.SELECT
  });
      res.send(records);
};

// Find a single Applicantexperience with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Applicantexperience.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Applicantexperience with id=" + id
      });
    });
};

// Find an applicant's Applicantexperience
exports.findApplicant = async (req, res) => {
  const id = req.params.id;

  const records = await db.sequelize.query("SELECT * FROM `applicant_experiences` WHERE `applicant_id` = "+id+"", {
      type: QueryTypes.SELECT
  });
      console.log(records[0]);
      res.send(records[0]);
};

// Update a Applicantexperience by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Applicantexperience.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Applicantexperience was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Applicantexperience with id=${id}. Maybe Applicantexperience was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Applicantexperience with id=" + id
      });
    });
};

// Delete a Applicantexperience with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Applicantexperience.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Applicantexperience was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Applicantexperience with id=${id}. Maybe Applicantexperience was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Applicantexperience with id=" + id
      });
    });
};