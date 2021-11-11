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


const getAssetById = async (req, res) => {
    if (req.params && req.params.id) {
      await Assert.findById(req.params.id)
      .then(data => {
        res.status(200).send({data: data});
      })
      .catch(error => {
        res.status(500).send({ error: error.message });
      });
    }
  }

  const getAssetCount = async (req, res) => {
    if (req.params && req.params.id) {
      await Assert.countDocuments({Type: "Transformer"})
      .then(data => {
        res.status(200).send({data: data});
      })
      .catch(error => {
        res.status(500).send({ error: error.message });
      });
    }
  }




module.exports = {
  createAssert,
    getAllAsserts,
    getAssetById,
    getAssetCount,

};
