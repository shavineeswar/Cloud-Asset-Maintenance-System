const Schedule = require('../models/scheduling.model');


const addSchedule = async (req, res) => {
    if (req.body) {
        const schedule = new Schedule(req.body);
        schedule.save()
            .then(data => {
                res.status(200).send({ data: data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}


const getAllSchedule = async (req, res) => {
    await Schedule.find({})
        .then(data => {
            res.status(200).send({ data: data });
        }).catch(error => {
            res.status(500).send({ error: error.message });
        });

}

const getAllScheduleById = async (req, res) => {
    if (req.params && req.params.id) {
        await Schedule.findById(req.params.id)
            .then(data => {
                res.status(200).send({ data: data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

const getScheduleByEmail = async (req, res) => {
    if (req.params && req.params.email) {
        const Email = req.params.email;
        await Schedule.find({ username: Email })
            .then(data => {
                res.status(200).send({ data: data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}


const updateSchedule = async (req, res) => {
    if (req.params && req.params.email) {
        await Schedule.updateOne({ username: req.params.email }, {
            $set: {
                eventFrequency: [req.body.Event1,
                req.body.Event2,
                req.body.Event3,
                req.body.Event4,
                req.body.Event5,
                req.body.Event6,
                req.body.Event7,
                req.body.Event8,
                req.body.Event9,
                req.body.Event10],
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
    addSchedule,
    getAllSchedule,
    getAllScheduleById,
    getScheduleByEmail,
    updateSchedule,
    
};