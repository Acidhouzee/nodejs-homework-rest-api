const mongoose = require('mongoose');
const hook = require('./hooks');

const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const Schema = mongoose.Schema;
const userScheme = new Schema({
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  email: {
    type: String,
    match: emailRegexp,
    required: [true, 'Email is required'],
    unique: true,
  },
  subscription: {
    type: String,
    enum: ["starter", "pro", "business"],
    default: "starter"
  },
  avatarURL: {
    type: String,
  },
  verify: {
    type: Boolean,
    default: false,
  },
  verificationCode: {
    type: String,
    default: '',
  },
  token: {
    type: String,
    default: null,
  },
}, { versionKey: false, timeseries: true });

userScheme.post('save', hook.handleSaveError);
userScheme.pre('findOneAndUpdate', hook.runValidateAtUpdate);
userScheme.post('findOneAndUpdate', hook.handleSaveError);

const User = mongoose.model('user', userScheme);

module.exports = User;