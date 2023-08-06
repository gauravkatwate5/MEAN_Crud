const express = require("express");
const mongoose = require("mongoose");
const StudentRoutes = require("./routes/StudentRoute");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

//database connection
const DatabasePathOnline =
  "mongodb+srv://gauravkatwate5:gauravkatwate5@batches.nzpf9su.mongodb.net/?retryWrites=true&w=majority";

const DatabasePathLocal = "mongodb://localhost:27017/crud";

mongoose
  .connect(DatabasePathOnline)
  .then(() => {
    console.log("Database Connected Successfully");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use(StudentRoutes);

app.listen(5500, (request, response) => {
  console.log("server running on 5500 port");
});
