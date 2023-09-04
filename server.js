const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require('dotenv').config();
const dbConnect = require('./config/dbConnnect');
const app = express();

const admin = require('./routes/adminRoutes')
const student = require('./routes/studentRoutes')
const lecturer = require('./routes/lecturerRoutes')

const PORT = process.env.PORT || 5000;
dbConnect;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use('/admin', admin)
app.use('/student', student)
app.use('/lecturer', lecturer)

app.listen(PORT, () => {
    console.log(`Listening to port ${ PORT }`);
}); 