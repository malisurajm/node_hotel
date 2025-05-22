const mongoose = require('mongoose');

// Define the MongoDB connectiob URL

const mongoURl = 'mongodb://localhost:27017/hotels'

// Set the MongoDB connection

mongoose.connect(mongoURl, {
   useNewUrlParser: true,    // ← correct spelling & casing
  useUnifiedTopology: true
})

// Get the default connection
//Mongoose maintains a default object representing the MongoDB connection.
const db = mongoose.connection;

//Define Event listners for database connection

db.on('connected', () => {
    console.log("Conncted to MongoDB Server");
    
});

db.on('error', (err) => {
    console.log("MongoDB connection error", err);
    
});

db.on('disconnected', () => {
    console.log("MongoDB disconnected");
    
});

//Export the database connection
module.exports = db;
