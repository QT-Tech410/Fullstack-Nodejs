import express from "express";
// or var express = require('express);
let configViewEngine = (app) => {
  //arrow function
  app.use(express.static("./src/public"));
  app.set("view engine", "ejs");
  app.set("views", "./src/views");
};

module.exports = configViewEngine;
