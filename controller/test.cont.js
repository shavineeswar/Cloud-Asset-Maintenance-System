const Test = require('../models/test.model');


const addTest = async(req, res) => {
    if (req.body) {
        const test = new Test(req.body);
        test.save()
            .then(data => {
                res.status(200).send({ data: data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

const getAllTest = async (req, res) => {  
      await Test.find()
      .then(data => {
        res.status(200).send({data: data});
      })
      .catch(error => {
        res.status(500).send({ error: error.message });
      });
  }

  const getTestByAssetId = async (req, res) => {
    if (req.params && req.params.id) {
      await Test.find({assetId:req.params.id})
      .then(data => {
        res.status(200).send({data: data[0].Events});
      })
      .catch(error => {
        res.status(500).send({ error: error.message });
      });
    }
  }  
  const EditTest= async (req, res) => {
    if (req.params && req.params.id) {
    await Test.updateOne({assetId:req.params.id,'Events.name':'Event1'},{$set:{'Events.$.assign': req.body.Test1 }})
    await Test.updateOne({assetId:req.params.id,'Events.name':'Event2'},{$set:{'Events.$.assign': req.body.Test2 }})
    await Test.updateOne({assetId:req.params.id,'Events.name':'Event3'},{$set:{'Events.$.assign': req.body.Test3 }})
    await Test.updateOne({assetId:req.params.id,'Events.name':'Event4'},{$set:{'Events.$.assign': req.body.Test4 }})
    await Test.updateOne({assetId:req.params.id,'Events.name':'Event5'},{$set:{'Events.$.assign': req.body.Test5 }})
    await Test.updateOne({assetId:req.params.id,'Events.name':'Event6'},{$set:{'Events.$.assign': req.body.Test6 }})
    await Test.updateOne({assetId:req.params.id,'Events.name':'Event7'},{$set:{'Events.$.assign': req.body.Test7 }})
    await Test.updateOne({assetId:req.params.id,'Events.name':'Event8'},{$set:{'Events.$.assign': req.body.Test8 }})
    await Test.updateOne({assetId:req.params.id,'Events.name':'Event9'},{$set:{'Events.$.assign': req.body.Test9 }})
    await Test.updateOne({assetId:req.params.id,'Events.name':'Event10'},{$set:{'Events.$.assign': req.body.Test10 }})
    .then(data => {
      res.status(200).send({data: data});
    })
    .catch(error => {
      res.status(500).send({ error: error.message });
    });
  }
}

  
  
module.exports = {
    addTest, 
    getAllTest,
    getTestByAssetId,
    EditTest
};
