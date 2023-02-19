const mongoose = require("mongoose");
const incidentSchema = mongoose.Schema({
needof: {
        type: String,
        required: true,
      },
  incident: {
    type: String,
    required: true,
  },
  caller:{
    type: String,
    required: true,
  },
  contact:{
    type: String,
    required: true,
  },
  location:{
    type:String,
    required:true,
  },
  status:{
    type:String,
    required:true,
  },
  created_on: {
    type: Date,
    default: Date.now,
  },
});

const incidentModel = mongoose.model("incident", incidentSchema);
module.exports = incidentModel;