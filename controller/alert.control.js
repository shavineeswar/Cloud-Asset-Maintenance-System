const Alert = require('../models/alert.model');

const createAlert = async (req, res) => {
    if (req.body) {
        const alert = new Alert(req.body);
        alert.save()
            .then(data => {
                res.status(200).send({ data: data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

const getAllAlerts = async (req, res) => {
    await Alert.find({})
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
}

const getAlertByassetId = async (req, res) => {
    if (req.params && req.params.id) {
      await Alert.find({assetId:req.params.id})
      .then(data => {
        res.status(200).send({data: data});
      })
      .catch(error => {
        res.status(500).send({ error: error.message });
      });
    }
  }

  const updateDetails  = async (req, res) => {
    if (req.params && req.params.id) {
      await Alert.findOneAndUpdate({assetId:req.params.id},{$set:{alert1:req.body.alert1,
                                                          alert2: req.body.alert2, 
                                                          alert3: req.body.alert3 , 
                                                          alert4: req.body.alert4 , 
                                                           }})
      .then(data => {
        res.status(200).send("Details updated");
      })
      .catch(error => {
        res.status(500).send({ error: error.message });
      });
    }
}

module.exports = {
  createAlert,
    getAllAlerts,
    getAlertByassetId,
    updateDetails
    
};
