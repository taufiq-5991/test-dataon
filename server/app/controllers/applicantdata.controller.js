const db = require("../models");
const Applicantdata = db.applicantdata;
const Applicanteducation = db.applicanteducation;
const Applicantexperience = db.applicantexperience;
const Op = db.Sequelize.Op;
const { QueryTypes } = require('sequelize');

// Create and Save a new Applicantdata
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Applicantdata, with their education & experience
  console.log(req.body);
  const applicantdata = {
    fullname: req.body.fullname,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address,
    birth_date: req.body.birth_date,
    skills: req.body.skills,
    status: 'PENDING',
    applied_position_id: req.body.applied_position_id
  };

  // Mail notification to applicant's email if not error, then save Applicantdata in the database
  Applicantdata.create(applicantdata)
    .then(data => {
      console.log('data');
      console.log(data.dataValues.id);

      // Create Applicanteducation with created Applicantdata ID
      const applicanteducation = {
        school_name: req.body.school_name,
        start_date: req.body.school_start_date,
        end_date: req.body.school_end_date,
        major: req.body.major,
        grade: req.body.grade,
        applicant_id: data.dataValues.id,
        degree_id: req.body.degree_id
      };
      Applicanteducation.create(applicanteducation)
      .then(data => {
        console.log('Applicanteducation created');
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Applicanteducation."
        });
      });

      // Create Applicantexperience with created Applicantdata ID
      const applicantexperience = {
        company_name: req.body.company_name,
        position: req.body.old_position,
        start_date: req.body.company_start_date,
        end_date: req.body.company_end_date,
        applicant_id: data.dataValues.id,
        summary: req.body.summary
      };
      Applicantexperience.create(applicantexperience)
        .then(data => {
          console.log('Applicantexperience created');
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Applicantexperience."
          });
        });

      //send mail
      var nodemailer = require('nodemailer');
      var transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
              user: 'no.reply.nodemailertest456789@gmail.com',
              pass: 'd7beJ7ABsN4wezj'
          }
      });
      var mailOptions = {
          from: 'no.reply.nodemailertest456789@gmail.com',
          to: req.body.email,
          subject: 'CV Application - Sent',
          html: '<h4>Your CV application has been sent!</h4>'
      };
      transporter.sendMail(mailOptions, (err, info) => {
          if (err) throw err;
          console.log('Email sent: ' + info.response);
      });
      //write to DB
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Applicantdata."
      });
    });
};

// Retrieve all Applicantdatas from the database.
exports.findAll = async (req, res) => {

  //use raw query to join with position list
  const records = await db.sequelize.query("SELECT `ad`.*, `pos`.`position_name` FROM `applicant_data` AS `ad` JOIN `list_positions` `pos` ON `pos`.`id` = `ad`.`applied_position_id`", {
      type: QueryTypes.SELECT
  });
      console.log(records);
      res.send(records);
};

// Find a single Applicantdata with an id
exports.findOne = async (req, res) => {
  const id = req.params.id;

  //use raw query to join with position list
  const records = await db.sequelize.query("SELECT `ad`.*, `pos`.`position_name` FROM `applicant_data` AS `ad` JOIN `list_positions` `pos` ON `pos`.`id` = `ad`.`applied_position_id` WHERE `ad`.`id` = "+id+"", {
      type: QueryTypes.SELECT
  });
      console.log(records[0]);
      res.send(records[0]);
};

// Update a Applicantdata by the id in the request
exports.update = (req, res) => {
  console.log(req.body);
  const id = req.params.id;
  const email = req.body.email;
  const status = req.body.status;

  Applicantdata.update(req.body, {
    where: { id: id }
  })
    .then(num => {      
      //send mail
      var nodemailer = require('nodemailer');
      var transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
              user: 'no.reply.nodemailertest456789@gmail.com',
              pass: 'd7beJ7ABsN4wezj'
          }
      });
      var mailOptions = {
          from: 'no.reply.nodemailertest456789@gmail.com',
          to: email,
          subject: 'CV Application - '+status,
          html: '<h4>Your CV application has been '+status+'</h4>'
      };
      transporter.sendMail(mailOptions, (err, info) => {
          if (err) throw err;
          console.log('Email sent: ' + info.response);
      });
      res.send({
        message: "Applicantdata was updated successfully."
      });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Applicantdata with id=" + id
      });
    });
};

// Delete a Applicantdata with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Applicantdata.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Applicantdata was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Applicantdata with id=${id}. Maybe Applicantdata was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Applicantdata with id=" + id
      });
    });
};