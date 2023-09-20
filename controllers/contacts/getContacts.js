const Contact = require('../../models/contacts');

getContacts = async (req, res) => {
  const { _id: owner } = req.user;
  const { page, limit } = req.query;
  const skip = (page - 1) * limit;
  const contacts = await Contact.find({owner}, '-createdAt -updatedAt', {skip, limit}).populate('owner', 'email subscription');
  res.json(contacts);
};

module.exports = {
  getContacts
};