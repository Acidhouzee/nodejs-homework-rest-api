const Contact = require('../../models/contacts');

getContacts = async (req, res, next) => {
  const contacts = await Contact.find();
  res.json(contacts);
};

module.exports = {
  getContacts
};