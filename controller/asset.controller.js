const Assert = require('../models/asset.model');

const createAssert = async (req, res) => {
    if (req.body) {
        const assert = new Assert(req.body);
        assert.save()
            .then(data => {
                res.status(200).send({ data: data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

const getAllAsserts = async (req, res) => {
    await Assert.find({})
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
}

// const getApprovedAsserts = async (req, res) => {
//     await Assert.find({Status:'Approved'})
//         .then(data => {
//             res.status(200).send({ data: data });
//         })
//         .catch(error => {
//             res.status(500).send({ error: error.message });
//         });
// }

// const getUnapprovedWorkshops = async (req, res) => {
//     await Workshop.find({Status: 'Unapproved'})
//         .then(data => {
//             res.status(200).send({ data: data });
//         })
//         .catch(error => {
//             res.status(500).send({ error: error.message });
//         });
// }

// const getIdofworkshopsforApprove  = async (req, res) => {
//     if (req.params && req.params.id) {
//       await Workshop.findByIdAndUpdate(req.params.id,{$set:{Status: 'Approved'}})
//       .then(data => {
//         res.status(200).send({Status:"Workshop Approved" });
//       })
//       .catch(error => {
//         res.status(500).send({ error: error.message });
//       });
//     }
// }



// const getIdofworkshopsforUnapprove  = async (req, res) => {
//     if (req.params && req.params.id) {
//       await Workshop.findByIdAndUpdate(req.params.id,{$set:{Status: 'Unapproved'}})
//       .then(data => {
//         res.status(200).send({Status:"Workshop Unapproved" });
//       })
//       .catch(error => {
//         res.status(500).send({ error: error.message });
//       });
//     }
// }


// const getWorkshopById = async (req, res) => {
//     if (req.params && req.params.id) {
//       await Workshop.findById(req.params.id)
//       .then(data => {
//         res.status(200).send({data: data});
//       })
//       .catch(error => {
//         res.status(500).send({ error: error.message });
//       });
//     }
//   }

//   const getApproveWorkshopByEmail = async (req, res) => {
//     if (req.params && req.params.email) {
//       const Email = req.params.email;
//       await Workshop.find({email:Email,Status:'Approved'})
//       .then(data => {
//         res.status(200).send({data: data});
//       })
//       .catch(error => {
//         res.status(500).send({ error: error.message });
//       });
//     }
//   }


//   const getUnapproveWorkshopByEmail = async (req, res) => {
//     if (req.params && req.params.email) {
//       const Email = req.params.email;
//       await Workshop.find({email:Email,Status:'Unapproved'})
//       .then(data => {
//         res.status(200).send({data: data});
//       })
//       .catch(error => {
//         res.status(500).send({ error: error.message });
//       });
//     }
//   }



module.exports = {
  createAssert,
    getAllAsserts,
    // getApprovedWorkshops,
    // getUnapprovedWorkshops,
    // getIdofworkshopsforApprove,
    // getIdofworkshopsforUnapprove,
    // getWorkshopById,
    // getApproveWorkshopByEmail,
    // getUnapproveWorkshopByEmail
};
