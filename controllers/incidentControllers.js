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
        const { needof, incident, caller, contact, location,status} = req.body;
        if (!needof || !incident || !caller || !contact || !location || !status ) {
          res.json({ message: "Requried Fields are missing." });
          return;
        }
        const objToSend = {
            needof, incident, caller, contact, location, status
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
      accept:(req, res) => {
    const {_id, status } = req.body;
    incidentModel.findByIdAndUpdate(
      _id,
      { status },
      { new: true },
      (error, data) => {
        if (error) {
          console.log(error, "error");
            res.json({
              message: "SomeThing Went Wrong!",
            });
          } else {
            res.json({
              message: "Successfully Accepted!",
              data: data,
              status: true,
            });
        }
      }
    );
  }
      

}
module.exports = incidentControllers;