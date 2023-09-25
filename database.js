const mongoose = require("mongoose");

const {mongo} = require("./config");

const uri = process.env.MONGODB_URI

// mongoose
// .connect(uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(db => {
//     console.log("Succesfull");
// }).catch(err =>{
//     console.log(`Failed: ${err}`);
// });

const dotenv = require('dotenv');
dotenv.config()
const {MongoClient} = require('mongodb')

function getMongoClient() {
  return MongoClient.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
}



module.exports = getMongoClient;