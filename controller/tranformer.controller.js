const TransformerTest = require('../models/transformerTest.model');


const addTransformerTest = async(req, res) => {
    if (req.body) {
        const transformerTest = new TransformerTest(req.body);
        transformerTest.save()
            .then(data => {
                res.status(200).send({ data: data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

const getTransformerTestByAssetId = async (req, res) => {
    if (req.params && req.params.id) {
      await TransformerTest.find({assetId:req.params.id})
      .then(data => {
        res.status(200).send({data: data});
      })
      .catch(error => {
        res.status(500).send({ error: error.message });
      });
    }
  }

  const EditTransformerTest= async (req, res) => {
    if (req.params && req.params.id) {
    await TransformerTest.update({assetId:req.params.id},{$set:{
                                                        Test1: req.body.Test1, 
                                                        Test2: req.body.Test2 , 
                                                        Test3: req.body.Test3 , 
                                                        Test4: req.body.Test4 , 
                                                        Test5: req.body.Test5,
                                                        Test6: req.body.Test6,
                                                        Test7: req.body.Test7,
                                                        Test8: req.body.Test8,
                                                        Test9: req.body.Test9,
                                                        Test10: req.body.Test10 }})
    .then(data => {
      res.status(200).send("Details updated");
    })
    .catch(error => {
      res.status(500).send({ error: error.message });
    });
  }
}

  
  
module.exports = {
    addTransformerTest, 
    getTransformerTestByAssetId,
    EditTransformerTest
};
