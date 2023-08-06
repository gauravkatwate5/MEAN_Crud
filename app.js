const express = require("express");
require("./db/connection");
const StudentRoutes = require("./routes/StudentRoute");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use(StudentRoutes);

const PORT = process.env.PORT || 5500;

app.listen(PORT, (request, response) => {
  console.log(`server running on ${PORT} port`);
});
