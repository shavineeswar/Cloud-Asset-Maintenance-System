const db = require("../models");
const Assest = db.assest;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }
    
      // Create a Tutorial
      const assest = {
        assetType: req.body.assetType,
        assetId: req.body.assetId,
        description: req.body.description,
        location: req.body.location,
        maintenance1: req.body.maintenance1,
        maintenance2: req.body.maintenance2,
        maintenance3: req.body.maintenance3,
        type: req.body.type,
        date: req.body.date,
        department: req.body.department,
        responsiblePerson: req.body.responsiblePerson ,

      };
    
      // Save Tutorial in the database
      Assest.create(assest)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Tutorial."
          });
        });
    
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {

    const assetId = req.query.assetId;
  var condition = assetId ? { title: { [Op.iLike]: `%${assetId}%` } } : null;

  Assest.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
  
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {

    const id = req.params.id;

    Assest.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + id
      });
    });

  
};
 
// Update a Tutorial by the id in the request
exports.update = (req, res) => {

    const id = req.params.id;

    Assest.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Asset Maintenance was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Asset Maintenance with id=${id}. Maybe Tutorial was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tutorial with id=" + id
      });
    });

  
};

// Delete a Tutorial with the specified id in the request
// exports.delete = (req, res) => {
  
// };

// // Delete all Tutorials from the database.
// exports.deleteAll = (req, res) => {
  
// };

// Find all published Tutorials
// exports.findAllPublished = (req, res) => {
  
// };