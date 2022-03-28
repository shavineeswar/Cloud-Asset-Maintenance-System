let mongoose = require('mongoose');

const MONGODB_URL = 'mongodb+srv://Eeswar:1234@cluster0.eot1e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const database = 'myFirstDatabase'

const getEvents = async (req,res)=>{

    mongoose.connect(MONGODB_URL).then(() => {
        const db = mongoose.connection.db;
        db.collection('events').find().toArray((err, data) => {
            res.status(200).send({data:data})
        });
    }).catch(err => console.log(err.message))
}

const getEventsByAssetType = async (req,res)=>{

    mongoose.connect(MONGODB_URL).then(() => {
        const db = mongoose.connection.db;
        db.collection('events').find({assetCategory:req.query.assetCategory,assetSubCategory:req.query.assetSubCategory}).toArray((err, data) => {
            res.status(200).send({data:data})       
        });
    }).catch(err => console.log(err.message))
}

module.exports = {
    getEvents,
    getEventsByAssetType   
}
