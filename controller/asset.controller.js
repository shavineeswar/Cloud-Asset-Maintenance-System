const Asset = require('../models/asset.model');

const createAsset = async (req, res) => {
  if (req.body) {
    const asset = new Asset(req.body);
    asset.save()
      .then(data => {
        res.status(200).send({ data: data });
      })
      .catch(error => {
        res.status(500).send({ error: error.message });
      });
  }
}

const getAllAssets = async (req, res) => {
  await Asset.find({})
    .then(data => {
      res.status(200).send({ data: data });
    })
    .catch(error => {
      res.status(500).send({ error: error.message });
    });
}


const getAssetById = async (req, res) => {
  if (req.params && req.params.id) {
    await Asset.findById(req.params.id)
      .then(data => {
        res.status(200).send({ data: data });
      })
      .catch(error => {
        res.status(500).send({ error: error.message });
      });
  }
}

const getAssetCount = async (req, res) => {
  await Asset.countDocuments()
    .then(data => {
      res.status(200).send({ data: data });
    })
    .catch(error => {
      res.status(500).send({ error: error.message });
    });
}

const DeleteAsset = async (req, res) => {
  if (req.params && req.params.id) {
    let Assetid = req.params.id;

    await Asset.findByIdAndDelete(req.params.id)
    .then(data => {
      res.status(200).send({ status: "Asset deleted" });

    }).catch((err) => {
      console.log(err.message);
      res.status(500).send({ status: "Error with delete asset", error: err.message });
    })
  }
}

const EditAsset = async (req, res) => {
  if (req.params && req.params.id) {
    await Asset.findByIdAndUpdate(req.params.id, {
      $set: {
        Assetowner: req.body.Assetowner,
        TypeCategory1: req.body.TypeCategory1,
        TypeCategory2: req.body.TypeCategory2,
        NameofSpecification: req.body.NameofSpecification,
        Numberofphases1: req.body.Numberofphases1,
        Numberofphases2: req.body.Numberofphases2,
        Ratedpower1: req.body.Ratedpower1,
        Nominalvoltage1: req.body.Nominalvoltage1,
        Nominalvoltage2: req.body.Nominalvoltage2,
        RatedInsulationlevel1: req.body.RatedInsulationlevel1,
        Ratedcurrent1: req.body.Ratedcurrent1,
        RatedFrequency: req.body.RatedFrequency,
        SI: req.body.SI,
        LI: req.body.LI,
        VectorGroup: req.body.VectorGroup,
        Temperature: req.body.Temperature,
        TypeofOil: req.body.TypeofOil,
        TCType: req.body.TCType,
        TCTapNumber1: req.body.TCTapNumber1,
        Cool: req.body.Cool
      }
    })
      .then(data => {
        res.status(200).send("Details updated");
      })
      .catch(error => {
        res.status(500).send({ error: error.message });
      });
  }




}



module.exports = {
  createAsset,
  getAllAssets,
  getAssetById,
  getAssetCount,
  DeleteAsset,
  EditAsset,
  
};
