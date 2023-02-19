const incidentModel = require("../models/incidentSchema")

const incidentControllers = {
    get: (req, res) => {
        incidentModel.find({}, (error, data) => {
          if (error) {
            console.log(error,"error");
            res.json({
              message:"Something went wrong!"
            })
          } else {
            res.json({
              message: "All incidents retrieved Successfully!",
              data,
            });
          }
        });
      },
      post:(req, res) => {
        const { incident, caller, contact, location,status} = req.body;
        if (!incident || !caller || !contact || !location || !status ) {
          res.json({ message: "Requried Fields are missing." });
          return;
        }
        const objToSend = {
            incident, caller, contact, location, status
        };
        console.log(objToSend, "objToSend");
      
        incidentModel.create(objToSend, (error, data) => {
          if (error) {
            console.log(error, "error");
            res.json({
              message: "SomeThing Went Wrong!",
            });
          } else {
            res.json({
              message: "request successfully added!",
              data: data,
              status: true,
            });
          }
        });
      },
      delete:(req, res) => {
        const { id } = req.params;
        incidentModel.findByIdAndDelete(id, (error, data) => {
          if (error) {
            console.log(error, "error");
            res.json({
              message: "SomeThing Went Wrong!",
            });
          } else {
            res.json({
              message: "product successfully deleted!",
              data: data,
              status: true,
            });
          }
        });
      },
      update:(req, res) => {
    const {_id, name, price , size, category, bio, image } = req.body;
    incidentModel.findByIdAndUpdate(
      _id,
      {name, price , size, category, bio, image },
      { new: true },
      (error, data) => {
        if (error) {
          console.log(error, "error");
            res.json({
              message: "SomeThing Went Wrong!",
            });
          } else {
            res.json({
              message: "product successfully updated!",
              data: data,
              status: true,
            });
        }
      }
    );
  }
      

}
module.exports = incidentControllers;