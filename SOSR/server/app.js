const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("./userModel");
const Login = require("./userModel");

const auth = require("./auth");

// body parser configuration
app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (request, response, next) => {
  console.log('11111111111111111111111')
  response.json({ message: "Hey! This is your server response!" });
  next();
});


module.exports = app;
// require database connection 
const dbConnect = require("./server");

// execute database connection 
dbConnect();
// Curb Cores Error by adding a header here
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    next();
  });
  

// register endpoint
app.post("/register", (request, response) => {
  console.log('222222222222222222222222')

    // hash the password
    bcrypt
      .hash(request.body.password, 5)
      .then((hashedPassword) => {
        // create a new user instance and collect the data
        const user = new User({
          email: request.body.email,
          password: hashedPassword,
          username: request.body.username
        });
        // save the new user
        user
          .save()
          // return success if the new user is added to the database successfully
          .then((result) => {
            response.status(201).send({
              message: "User Created Successfully",
              result,
            });
          })
          // catch error if the new user wasn't added successfully to the database
          .catch((error) => {
            response.status(500).send({
              message: "Error creating user",
              error,
            });
          });
      })
      // catch error if the password hash isn't successful
      .catch((e) => {
        response.status(500).send({
          message: "Password was not hashed successfully",
          e,
        });
      });
  });

  // login endpoint
app.post("/login", (request, response) => {
    // check if email exists
    Login.findOne({ email: request.body.email })
  
      // if email exists
      .then((login) => {
        // compare the password entered and the hashed password found
        bcrypt
          .compare(request.body.password, login.password)
  
          // if the passwords match
          .then((passwordCheck) => {
  
            // check if password matches
            if(!passwordCheck) {
              return response.status(400).send({
                message: "Passwords does not match",
                error,
              });
            }
  
            //   create JWT token
            const token = jwt.sign(
              {
                userId: login._id,
                userEmail: login.email,
              },
              "RANDOM-TOKEN",
              { expiresIn: "24h" }
            );

            //   return success response
            response.status(200).send({
              message: "Login Successful",
              email: login.email,
              token,
            });
          })
          // catch error if password does not match
          .catch((error) => {
            response.status(400).send({
              message: "Passwords does not match",
              error,
            });
          });
      })
      // catch error if email does not exist
      .catch((e) => {
        response.status(404).send({
          message: "Email not found",
          e,
        });
      });
  });
  
  // free endpoint
app.get("/free-endpoint", (request, response) => {
  console.log('444444444444444444444444444444444444')
    response.json({ message: "You are free to access me anytime" });
  });
  
  // authentication endpoint
  app.get("/auth-endpoint", auth, (request, response) => {
    console.log('55555555555555555555555555555')
    response.json({ message: "You are authorized to access me" });
  });

  app.get("/users",async (request, response) => {
    const bbnagar = await User.find()
    .then((result) => {
      response.status(201).send({
        message: "Users retrieved successfully",
        result,
      });
    }).catch((e) => {response.status(404).send({message: "Not Founds",e,});});
    return bbnagar
  });
  