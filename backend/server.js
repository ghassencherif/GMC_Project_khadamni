const express = require('express');
const user = require('./Routes/user');
const annonce = require('./Routes/annonce');
const category = require('./Routes/category');
const agent = require('./Routes/agent')
const connectDb = require('./config/dbConnect');

const app = express();
app.use(express.json());

app.use('/agent', agent, annonce);
app.use('/user', user, annonce);
app.use('/annonce', annonce);
app.use('/category', category);


connectDb();
const PORT = process.env.PORT || 7000;

app.listen(PORT, (err) =>
  err ? console.error(err) : console.log(` Server is 🏃  on PORT ${PORT}`)
);