const { validateBody } = require('../../schemas/contactsScheme');
const Contact = require('../../models/contacts');

addNewContact = async (req, res, next) => {
  try {
    const {_id: owner } = req.user;
    const { name, email, phone } = req.body;

    const { error } = validateBody(req.body);

    if (error) {
      res.status(400).json({ message: error.details[0].message });
      return;
    }

    const newContact = await Contact.create({ ...req.body, owner });
    res.status(201).json(newContact);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addNewContact
};