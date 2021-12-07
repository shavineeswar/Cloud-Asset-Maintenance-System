const mongoose = require('mongoose');

const AssertSchema = new mongoose.Schema({
    Type: { type: String, required: true },
    Name: { type: String, required: true },
    Assetowner: { type: String, required: true },
    TypeCategory1: { type: String, required: true },
    TypeCategory2: { type: String, required: true },
    NameofSpecification: { type: String, required: true },
    Numberofphases1: { type: String, required: true },
    Numberofphases2: { type: String, required: true },
    Ratedpower1: { type: String, required: true },
    Nominalvoltage1: { type: String, required: true },
    Nominalvoltage2: { type: String, required: true },
    RatedInsulationlevel1: { type: String, required: true },
    Ratedcurrent1: { type: String, required: true },
    RatedFrequency: { type: String, required: true },
    SI: { type: String, required: true },
    LI: { type: String, required: true },
    VectorGroup: { type: String, required: true },
    Temperature: { type: String, required: true },
    TypeofOil: { type: String, required: true },
    TCType: { type: String, required: true },
    TCTapNumber1: { type: String, required: true },
    Cool: { type: String, required: true }

});

const Assert = mongoose.model('asset', AssertSchema);
module.exports = Assert;