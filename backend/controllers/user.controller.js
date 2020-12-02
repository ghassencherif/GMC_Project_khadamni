const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../model/User');

const secretOrKey = config.get('secretOrKey');

// Register New User
exports.register = async (req, res) => {
  const { lastName, firstName, email, password, phoneNumber } = req.body;
  try {
    const searchRes = await User.findOne({ email });
    if (searchRes)
      return res.status(401).json({ msg: `user already exists !!` });
    const newUser = new User({
      lastName,
      firstName,
      email,
      password,
      phoneNumber,
    });
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    newUser.password = hash;
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ errors: error });
  }
};

// Login user
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ msg: `bad email!` });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ msg: `wrong password` });
    const payload = {
      id: user._id,
      lastName: user.lastName,
      firstName: user.firstName,
      email: user.email,
      phoneNumber: user.phoneNumber,
    };

    // Token

    const token = await jwt.sign(payload, secretOrKey);
    return res.status(200).json({ token: `Bearer ${token}` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ errors: error });
  }
};