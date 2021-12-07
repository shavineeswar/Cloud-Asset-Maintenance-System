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
//   const EditTest= async (req, res) => {
//     if (req.params && req.params.id) {
//     await Test.updateOne({assetId:req.params.id},{$set:{
//                                                         Test1: req.body.Test1, 
//                                                         Test2: req.body.Test2 , 
//                                                         Test3: req.body.Test3 , 
//                                                         Test4: req.body.Test4 , 
//                                                         Test5: req.body.Test5,
//                                                         Test6: req.body.Test6,
//                                                         Test7: req.body.Test7,
//                                                         Test8: req.body.Test8,
//                                                         Test9: req.body.Test9,
//                                                         Test10: req.body.Test10 }})
//     .then(data => {
//       res.status(200).send("Details updated");
//     })
//     .catch(error => {
//       res.status(500).send({ error: error.message });
//     });
//   }
// }

  
  
module.exports = {
    addTest, 
    getAllTest,
    getTestByAssetId
};
