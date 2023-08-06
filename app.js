const express = require("express");
const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();

const StudentRoutes = require("./routes/StudentRoute");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use(StudentRoutes);

const PORT = process.env.PORT || 5800;

app.listen(PORT, (request, response) => {
  console.log(`server running on ${PORT} port`);
});

mongoose
  .connect(
    "mongodb+srv://gauravkatwate5:gauravkatwate5@batches.nzpf9su.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });
