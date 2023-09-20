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
  owner: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
});

contactsScheme.pre('findOneAndUpdate', function(next) {
  this.options.runValidators = true;
  next();
});

const Contact = mongoose.model('contact', contactsScheme);

module.exports = Contact;
