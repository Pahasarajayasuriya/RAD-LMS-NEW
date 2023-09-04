const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require('dotenv').config();
const dbConnect = require('./config/dbConnnect');
const app = express();
const admin = require('./routes/adminRoute');
const course = require('./routes/courseRoute');
const courseEnroll = require('./routes/courseEnrollRoute');

const PORT = process.env.PORT || 5000;
dbConnect;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use('/user', user);
app.use('/course', course);
app.use('/enroll', courseEnroll);

app.listen(PORT, () => {
    console.log(`Listening to port ${ PORT }`);
}); 