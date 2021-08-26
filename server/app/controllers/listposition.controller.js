const db = require("../models");
const Listposition = db.listposition;
const Op = db.Sequelize.Op;
const { QueryTypes } = require('sequelize');

// Retrieve all Listpositions from the database.
exports.findAll = async (req, res) => {

  const records = await db.sequelize.query("SELECT * FROM `list_positions`", {
      type: QueryTypes.SELECT
  });
      res.send(records);
};

// Update a Listposition by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Listposition.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Listposition was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Listposition with id=${id}. Maybe Listposition was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Listposition with id=" + id
      });
    });
};

// Delete a Listposition with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Listposition.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Listposition was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Listposition with id=${id}. Maybe Listposition was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Listposition with id=" + id
      });
    });
};
