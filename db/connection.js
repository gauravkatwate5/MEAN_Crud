const mongoose = require("mongoose");
const DB = process.env.DATABASE;
//database connection
const DatabasePathOnline =
  "mongodb+srv://gauravkatwate5:gauravkatwate5@batches.nzpf9su.mongodb.net/?retryWrites=true&w=majority";

const DatabasePathLocal = "mongodb://localhost:27017/crud";

mongoose
  .connect(DatabasePathOnline, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Database Connected Successfully");
  })
  .catch((err) => {
    console.log(err);
  });
