const userModel = require('../models/userSchema');

const userControllers = {
    getOne:(req, res) => {
        const { id } = req.params;
        userModel.findById(id, (error, data) => {
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

module.exports = userControllers;