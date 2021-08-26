const db = require("../models");
const Listdegree = db.listdegree;
const Op = db.Sequelize.Op;
const { QueryTypes } = require('sequelize');

// Retrieve all Listdegrees from the database.
exports.findAll = async (req, res) => {

  const records = await db.sequelize.query("SELECT * FROM `list_degrees`", {
      type: QueryTypes.SELECT
  });
      res.send(records);
};

// Update a Listdegree by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Listdegree.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Listdegree was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Listdegree with id=${id}. Maybe Listdegree was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Listdegree with id=" + id
      });
    });
};

// Delete a Listdegree with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Listdegree.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Listdegree was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Listdegree with id=${id}. Maybe Listdegree was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Listdegree with id=" + id
      });
    });
};
