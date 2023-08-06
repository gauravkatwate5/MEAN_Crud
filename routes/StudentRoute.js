const express = require("express");
const app = express.Router();

let StudentModel = require("../model/StudentModel");

//featch data in to database
app.get("/getstudent", async (request, response) => {
  const students = await StudentModel.find({});
  try {
    response.send(students);
  } catch (error) {
    response.status(500).send(err);
  }
});

//featch single student data in to database
app.get("/getstudent/:id", async (request, response) => {
  const students = await StudentModel.findById(request.params.id);
  try {
    response.send(students);
  } catch (error) {
    response.status(500).send(err);
  }
});

//insert data in to database
app.post("/addstudent", async (request, response) => {
  const students = new StudentModel(request.body);
  try {
    await students.save();
    response.send(students);
  } catch (error) {
    response.status(500).send(error);
  }
});

//update data in database
app.put("/updatestudent/:id", async (request, response) => {
  const Student = await StudentModel.findById(request.params.id);
  try {
    Student.set({
      firstname: request.body.firstname,
      lastname: request.body.lastname,
      age: request.body.age,
      email: request.body.email,
      mob: request.body.mob,
      city: request.body.city,
    });
    const res = await Student.save();
    response.send(res);
  } catch (error) {
    response.status(500).send("failuer");
  }
});

//delete data in to database
app.delete("/deletestudent/:id", async (request, response) => {
  try {
    const students = await StudentModel.findByIdAndDelete(request.params.id);
    if (!students) {
      response.status(404).send("There is no such student");
    } else {
      response.send(students);
    }
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = app;
