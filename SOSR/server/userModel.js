
const mongoose = require("mongoose");
const LoginSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Please provide an Email!"],
        unique: [true, "Email Exist"],
    },
  
    password: {
        type: String,
        required: [true, "Please provide a password!"],
        unique: false,
    },
  })

  module.exports = mongoose.model.Login || mongoose.model("Login", LoginSchema);

  const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Please provide an Email!"],
        unique: [true, "Email Exist"],
    },
  
    password: {
        type: String,
        required: [true, "Please provide a password!"],
        unique: false,
    },
    username: {
        type: String,
        required: [true, "Please provide a username!"],
        unique: false,
    },
  })
  module.exports = mongoose.model.Users || mongoose.model("Users", UserSchema);
