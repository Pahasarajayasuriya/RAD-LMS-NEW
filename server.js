const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require('morgan')
const mongoose = require("mongoose");
require('dotenv').config();
const dbConnect = require('./config/dbConnnect');
const app = express();
const path = require('path')

const admin = require('./routes/adminRoutes')
const student = require('./routes/studentRoutes')
const lecturer = require('./routes/lecturerRoutes')
const authentication = require('./routes/authRoutes')

const PORT = process.env.PORT || 5000;
dbConnect;

app.use(morgan('dev'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use(express.static(path.join(__dirname, '..', 'build')));

app.use('/admin', admin)
app.use('/student', student)
app.use('/lecturer', lecturer)
app.use('/auth', authentication)

app.listen(PORT, () => {
    console.log(`Listening to port ${ PORT }`);
}); 