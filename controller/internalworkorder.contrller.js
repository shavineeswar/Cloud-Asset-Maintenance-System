const Internalwork = require('../models/internalworkorder.model');

const createInternalwork = async (req, res) => {
    if (req.body) {
        const internalwork = new Internalwork(req.body);
        internalwork.save()
            .then(data => {
                res.status(200).send({ data: data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

const getAllInternalworks = async (req, res) => {
    await Internalwork.find({})
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
}



const getInternalworkById = async (req, res) => {
    if (req.params && req.params.id) {
      await Internalwork.findById(req.params.id)
      .then(data => {
        res.status(200).send({data: data});
      })
      .catch(error => {
        res.status(500).send({ error: error.message });
      });
    }
  }

  const getInternalworkByAssetId = async (req, res) => {
    if (req.params && req.params.id) {
      await Internalwork.find({assetId:req.params.id}).populate('person', 'personName department')
      .then(data => {
        res.status(200).send({data: data});
      })
      .catch(error => {
        res.status(500).send({ error: error.message });
      });
    }
  }
  const getPersonByAssetId = async (req, res) => {
    if (req.params && req.params.id) {
      await Internalwork.find({assetId:req.params.id}).populate('person', '_id personName department')
      .then(data => {
        res.status(200).send({data: data[0].person});
      })
      .catch(error => {
        res.status(500).send({ error: error.message });
      });
    }
  }


module.exports = {
    createInternalwork,
    getAllInternalworks,
    getInternalworkById,
    getInternalworkByAssetId,
    getPersonByAssetId  
    
};
