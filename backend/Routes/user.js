const express = require("express");
const { register, login } = require("../controllers/user.controller");
const {
  registerRules,
  validator,
  annonceRules,
} = require("../middleware/validator");
const isAuth = require("../middleware/passport-setup");
const User = require("../model/User");
const { addannonce } = require("../controllers/annonce.controller");

const Router = express.Router();

// register user, login, is connected
// path localhost:5000/user/register or login or current
Router.post(`/register`, registerRules(), validator, register);
Router.post(`/login`, login);
Router.get("/current", isAuth(), (req, res) => {
  console.log("req", req);

  res.json(req.user);
});
Router.post(`/:_id/addannonce`, annonceRules(), validator, addannonce);

Router.get("/userAnnonce/:_id", (req, res) => {
  User.findById(req.params)
    .populate("annonceUser")
    .then((annonce) => res.status(200).send(annonce))
    .catch((err) => res.send(err));
});

Router.put("/:_id", (req, res) => {
  let { _id } = req.params;
  User.findByIdAndUpdate({ _id }, { $set: { ...req.body } })
    .then(() => res.send("user has been updated"))
    .catch((err) => res.send(err));
});

module.exports = Router;
