const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const Agent = require("../model/Agent");

const secretOrKey = config.get("secretOrKey");

// Register New User
exports.register = async (req, res) => {
  const { lastName, firstName, email, company, password, phoneNumber } = req.body;
  try {
    const searchRes = await Agent.findOne({ email });
    if (searchRes)
      return res.status(401).json({ msg: `Agent already exists !!` });
    const newUser = new User({
      lastName,
      firstName,
      email,
      company,
      password,
      phoneNumber,
    });
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    newAgent.password = hash;
    await newAgent.save();
    res.status(201).json(newAgent);
  } catch (error) {
    console.error(error);
    res.status(500).json({ errors: error });
  }
};

// Login user
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const agent = await Agent.findOne({ email });
    if (!agent) return res.status(404).json({ msg: `bad email!` });
    const isMatch = await bcrypt.compare(password, agent.password);
    if (!isMatch) return res.status(401).json({ msg: `wrong password` });
    const payload = {
      id: agent._id,
      lastName: agent.lastName,
      firstName: agent.firstName,
      email: agent.email,
      company: agent.company,
      phoneNumber: agent.phoneNumber,
    };

    // Token

    const token = await jwt.sign(payload, secretOrKey);
    return res.status(200).json({ token: `Bearer ${token}` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ errors: error });
  }
};
