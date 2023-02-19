const adminModel = require('../models/adminSchema');

const adminControllers = {
    getOne:(req, res) => {
        const { id } = req.params;
        adminModel.findById(id, (error, data) => {
          if (error) {
            console.log(error, "error");
            res.json({
              message: "SomeThing Went Wrong!",
            });
          } else {
            res.json({
              message: "User Data Successfully get!",
              data: data,
              status: true,
            });
          }
        });
      },
}

module.exports = adminControllers;