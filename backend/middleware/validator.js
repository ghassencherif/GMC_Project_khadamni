const { check, validationResult } = require('express-validator');


// Checking Input Register User
exports.registerRules = () => [
  check(`lastName`, `this field is required!`).notEmpty(),
  check(`firstName`, `this field is required!`).notEmpty(),
  check('email', `this should be valid email!`).isEmail(),
  check('email', `this field is required!`).notEmpty(),
  check('password', `this field should be at least 7 char!`).isLength({
    min: 7,
  }),
];


// Checking Input Register Agent
exports.registerRulesA = () => [
  check(`lastName`, `this field is required!`).notEmpty(),
  check(`firstName`, `this field is required!`).notEmpty(),
  check('email', `this should be valid email!`).isEmail(),
  check('email', `this field is required!`).notEmpty(),
  check('password', `this field should be at least 7 char!`).isLength({
    min: 7,
  }),
];

exports.annonceRules = () => [
  check(`title`, `title is required`).notEmpty(),
  check(`address`, `address is required`).notEmpty(),
  check(`category`, `category is required`).notEmpty(),
  check(`phoneNumber`, `category is required`).notEmpty(),
];

exports.categoryRules = () => [
  check(`typeCat`, `category is required`).notEmpty(),
];


exports.validator = (req, res, next) => {
  const errors = validationResult(req);
  errors.isEmpty() ? next() : res.status(400).json({ errors: errors.array() });
};
