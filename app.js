const express = require('express');
const router = require('./routes/routes');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;
const BASE_URI =
  "mongodb+srv://admin:admin3108@cluster0.zbhlrew.mongodb.net/SQuiP";

mongoose
  .connect(BASE_URI)
  .then((res) => console.log("mongoDb Connect"))
  .catch((err) => console.log(err, "error"))


app.use(express.json());
app.use(cors());
app.use("/api",router);

app.listen(PORT, ()=> console.log(`server running on localhost:${PORT}`))