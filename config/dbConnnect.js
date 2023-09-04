const mongoose = require('mongoose');

const URI = process.env.MONGO_URI;

const dbConnect = mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log('Mongodb connection success!');
});

module.exports = dbConnect;