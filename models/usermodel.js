const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
  fullName: {
    type: String,
    maxlength: [25, "charatetrs must be less than 25"],
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  phoneNumber: {
    type: Number,
    maxlength: [11, "charatetrs must be less than 11"],
    required: true,
  },
  Password: {
    type: String,
    required: true,
  },
  workStatus: {
    type: String,
    required: true,
  },
  about: {
    type: String,
  },
  qualification:{
    type:String
  },
  skill:{
    type:String
  },
  experiance:{
    type:String
  },
  jobcatagory:{
    type:String
  },
  language:{
    type:String
  }
});

const userModel = mongoose.model("user", userschema);

module.exports = userModel;
