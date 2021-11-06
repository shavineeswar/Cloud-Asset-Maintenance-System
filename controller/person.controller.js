const Person = require('../models/person.model');

const createPerson = async (req, res) => {
    if (req.body) {
        const person = new Person(req.body);
        person.save()
            .then(data => {
                res.status(200).send({ data: data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

const getAllPersons = async (req, res) => {
    await Person.find({})
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
}



const getPersonById = async (req, res) => {
    if (req.params && req.params.id) {
      await Person.findById(req.params.id)
      .then(data => {
        res.status(200).send({data: data});
      })
      .catch(error => {
        res.status(500).send({ error: error.message });
      });
    }
  }

//   const getPersonByAssetId = async (req, res) => {
//     if (req.params && req.params.id) {
//       await Person.findById({assetId:req.params.id})
//       .then(data => {
//         res.status(200).send({data: data});
//       })
//       .catch(error => {
//         res.status(500).send({ error: error.message });
//       });
//     }
//   }



module.exports = {
    createPerson,
    getAllPersons,
    getPersonById,
    // getPersonByAssetId
    
};
