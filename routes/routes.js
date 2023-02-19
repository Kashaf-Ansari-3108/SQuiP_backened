const express = require('express');
const router = express.Router();
const authControllers = require('../controllers/authControllers');
const userControllers = require('../controllers/userControllers');

router.get("/sample", (req, res) => {
  res.send("API HITT....!");
});

router.post("/signup", authControllers.signUp);
router.post("/login", authControllers.login);
router.get("/user/:id",userControllers.getOne);


module.exports = router;