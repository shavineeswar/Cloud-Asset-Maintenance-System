const ExternalWork = require('../models/externalworkorder.model');

const createExternalWork = async (req, res) => {
    if (req.body) {
        const externalWork = new ExternalWork(req.body);
        externalWork.save()
            .then(data => {
                res.status(200).send({ data: data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

const getAllExternalWorks = async (req, res) => {
    await ExternalWork.find({})
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
}



const getExternalWorkById = async (req, res) => {
    if (req.params && req.params.id) {
      await ExternalWork.findById(req.params.id)
      .then(data => {
        res.status(200).send({data: data});
      })
      .catch(error => {
        res.status(500).send({ error: error.message });
      });
    }
  }

  const getExternalWorkByAssetId = async (req, res) => {
    if (req.params && req.params.id) {
      await ExternalWork.find({assetId:req.params.id})
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
      await ExternalWork.find({assetId:req.params.id}).populate('person', '_id personName department email phone')
      .then(data => {
        res.status(200).send({data: data[0].person});
      })
      .catch(error => {
        res.status(500).send({ error: error.message });
      });
    }
  }


module.exports = {
    createExternalWork,
    getAllExternalWorks,
    getExternalWorkById,
    getExternalWorkByAssetId,
    getPersonByAssetId  
    
};
