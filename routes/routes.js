const express = require('express');
const adminAuthControllers = require('../controllers/adminAuthControllers');
const adminControllers = require('../controllers/adminControllers');
const router = express.Router();
const authControllers = require('../controllers/authControllers');
const incidentControllers = require('../controllers/incidentControllers');
const userControllers = require('../controllers/userControllers');

router.get("/sample", (req, res) => {
  res.send("API HITT....!");
});

router.post("/signup", authControllers.signUp);
router.post("/login", authControllers.login);
router.get("/user/:id",userControllers.getOne);
router.post("/adminsignup", adminAuthControllers.signUp);
router.post("/adminlogin", adminAuthControllers.login);
router.get("/admin/:id",adminControllers.getOne);
router.post("/incident",incidentControllers.post);
router.get("/incident",incidentControllers.get);
router.put("/incident",incidentControllers.accept);


module.exports = router;