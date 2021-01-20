const isAuthenticated = require("../config/middleware/isAuthenticated");
const db = require("../models");
const express = require("express");
const HTMLrouter = express.Router();

HTMLrouter.get("/", (req, res) => {
  res.render("login");
});
HTMLrouter.get("/signup", (req, res) => {
  res.render("signup");
});
HTMLrouter.get("/dashboard", isAuthenticated, (req, res) => {
  //----------------------------------- step 6 checks if the user is authenticated by looking for req.user which is
  //---------------------------- automatically generated by passport if the user was authenticated successfullly back in step 3.
  //--------------------------- if they are continue otherwise redirect to signup page
  //-------------------we render the dashboard here and can send data to handlebars via req.user."column name" of model
  res.render("dashboard", data);
});

module.exports = HTMLrouter;
