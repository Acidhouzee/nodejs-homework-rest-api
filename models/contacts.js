const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const contactsScheme = new Schema({
  name: {
    type: String,
    required: [true, 'Set name for contact'],
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  favorite: {
    type: Boolean,
    default: false,
  },
});

contactsScheme.pre('findOneAndUpdate', function(next) {
  this.options.runValidators = true;
  next();
});

const Contact = mongoose.model('contact', contactsScheme);

module.exports = Contact;
