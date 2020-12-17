const express = require("express");
// const { validator, annonceRules } = require("../middleware/validator");
const Annonce = require("../model/Annonce");
// const { addannonce } = require("../controllers/annonce.controller");

const Router = express.Router();

// get annonce  path localhost:5000/annonce
Router.get("/", (req, res) => {
  Annonce.find()
    .populate("category")
    .then((annonces) => res.send(annonces))
    .catch((err) => console.log(err));
});
// get annonce by id path localhost:5000/annonce/:_id
Router.get("/:_id", (req, res) => {
  let { _id } = req.params;
  Annonce.find({ _id })
    .then((annonce) => res.send(annonce))
    .catch((err) => console.log(err));
});

Router.get("/userAnnonce/:_id", (req, res) => {
  User.findById(req.params)
    .populate("annonceUser")
    .then((annonce) => res.status(200).send(annonce))
    .catch((err) => res.send(err));
});

// delete annonce path localhost:5000/annonce/delete/:id
Router.delete("/delete/:_id", (req, res) => {
  let { _id } = req.params;
  Annonce.findByIdAndDelete({ _id })
    .then(() => res.send("Annonce has been deleted"))
    .catch((err) => res.send(err));
});

// update annonce path localhost:5000/annonce/update/:id

Router.put("/update/:_id", (req, res) => {
  let { _id } = req.params;
  Annonce.findByIdAndUpdate({ _id }, { $set: { ...req.body } })
    .then(() => res.send("Annonce has been updated"))
    .catch((err) => res.send(err));
});

module.exports = Router;
