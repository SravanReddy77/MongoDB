 const { MongoClient } = require('mongodb');
 const mongoose = require("mongoose")
  const dotenv = require("dotenv")
  dotenv.config()
// const client = new MongoClient("mongodb+srv://SravanReddy:Dhoni_Annadi77@api.bypet.mongodb.net/?retryWrites=true&w=majority");


async function dbConnect() {
    mongoose
    .connect(
        process.env.DB_URL,
      {
        //   these are options to ensure that the connection is done properly
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
        // useCreateIndex: true,
      }
    ).then(() => {
        console.log("Successfully connected to MongoDB Atlas!");
      })
      .catch((error) => {
        console.log("Unable to connect to MongoDB Atlas!");
        console.error(error);
      });
  
}

module.exports = dbConnect;