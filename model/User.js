const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const PasswordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  resetPasswordLink: {
    data: String,
    default: "",
  },
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_KEY, {
    expiresIn: "7d",
  });
  return token;
};

const User = mongoose.model("user", userSchema);

const validate = (data) => {
  const schema = Joi.object({
    firstName: Joi.string().required().label("First Name"),
    lastName: Joi.string().required().label("Last Name"),
    email: Joi.string().email().required().label("Email"),
    password: PasswordComplexity().required().label("Password"),
  });
  return schema.validate(data);
};

const validateResetPass = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required().label("Email"),
    password: PasswordComplexity().required().label("Password"),
  });
  return schema.validate(data);
};

module.exports = { User, validate, validateResetPass };
