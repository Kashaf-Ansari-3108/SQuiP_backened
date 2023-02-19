const userModel = require('../models/userSchema');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");


const authControllers = {
        signUp: async (req, res) => {
          const { name, contact, email, password, address, image } = req.body;
      
          if (!name || !contact || !email || !password || !address || !image ) {
            res.json({ message: "Requried Fields are missing." });
            return;
          }
      
          const hashPassword = await bcrypt.hash(password, 10);
      
          const objToSend = {
            name,
            email,
            contact,
            password: hashPassword,
            address,
            image,
          };
          console.log(objToSend, "objToSend");
          userModel.findOne({ email }, (err, user) => {
            if (err) {
              console.log(err, "error");
              res.json({
              message: " SomeThing Went Wrong! ",
              });
            } else {
              console.log(user, "user");
              if (user) {
                res.json({ message: "email address already use!" });
              } else {
                userModel.create(objToSend, (error, data) => {
                  if (error) {
                    console.log(error, "error");
                    res.json({
                      message: "SomeThing Went Wrong!",
                    });
                  } else {
                    res.json({
                      message: "user successfully signup!",
                      data: data,
                      status: true,
                    });
                  }
                });
              }
            }
          });
        },
        login: async (req, res) => {
            const { email, password } = req.body;
        
            if (!email || !password) {
              res.json({ message: "Required fields are missing!" });
              return;
            }
        
            userModel.findOne({ email }, async (err, user) => {
              if (err) {
                console.log(err, "error");
                res.json({
                  message: "SomeThing Went Wrong!",
                });
              } else {
                if (user) {
                  const isPasswordMatch = await bcrypt.compare(password, user.password);
                  console.log(isPasswordMatch, "isPasswordMatch");
                  if (isPasswordMatch) {
                    const tokenObj = {
                      ...user,
                    };
                    const token = jwt.sign(tokenObj, "helloworld");
                    console.log(token, "token");
                    res.json({
                      message: "user successfully login",
                      data: user,
                      status: true,
                      token,
                    });
                  } else {
                    res.json({
                      message: "credential error!",
                    });
                  }
                } else {
                  res.json({
                    message: "credential error!",
                  });
                }
              }
            });
          },

    }

    module.exports = authControllers;