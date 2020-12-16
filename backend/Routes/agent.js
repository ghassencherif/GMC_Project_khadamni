const express = require("express");
const { register, login } = require("../controllers/user.controller");
const { registerRulesA, validator } = require("../middleware/validator");
const isAuth = require("../middleware/passport-setupAgent");
const Agent = require("../model/User");

const Router = express.Router();

// register Agent, login, is connected
// path localhost:5000/Agent/register or login or current
Router.post(`/register`, registerRulesA(), validator, register);
Router.post(`/login`, login);
Router.get("/current", isAuth(), (req, res) => {
  console.log("req", req);

  res.json(req.user);
});
Router.put("/:_id", (req, res) => {
  let { _id } = req.params;
  Agent.findByIdAndUpdate({ _id }, { $set: { ...req.body } })
    .then(() => res.send("Agent has been updated"))
    .catch((err) => res.send(err));
});

module.exports = Router;
