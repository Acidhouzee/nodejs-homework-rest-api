const { validateBody } = require('../schemas/schemas');
const Contact = require('../models/contacts');


exports.getContacts = async (req, res, next) => {
  const contacts = await Contact.find();
  res.json(contacts);
};

exports.getContactsById = async (req, res, next) => {
  const { contactId } = req.params;
  try {
    const contact = await Contact.findById(contactId);

    if (!contact) {
      res.status(404).json({ message: `Contact with id: ${contactId} does not found!` });
    }
    res.json(contact);
  } catch (error) {
    next(error);
  }
};

exports.addNewContact = async (req, res, next) => {
  try {
    const { name, email, phone } = req.body;

    const { error } = validateBody(req.body);

    if (error) {
      res.status(400).json({ message: error.details[0].message });
      return;
    }

    const newContact = await Contact.create(req.body);
    res.status(201).json(newContact);
  } catch (error) {
    next(error);
  }
};

exports.deleteContact = async (req, res, next) => {
  const { contactId } = req.params;
  try {

    const removedContact = await Contact.findByIdAndDelete(contactId);

    if (removedContact) {
      res.json({"message": "Contact deleted!"})
    } else {
      res.status(404).json({ message: 'Contact does not found!' });
    }

  } catch (error) {
    next(error);
  }
};

exports.updateContact = async (req, res, next) => {
  const { contactId } = req.params;
  const { name, email, phone } = req.body;
  try {
    const updatedContact = await Contact.findByIdAndUpdate(contactId, req.body, { new: true });
    if (updatedContact) {
      res.json(updatedContact);
    } else {
      res.status(404).json({ message: "Not found" });
    }
  } catch (error) {
    next(error);
  }
};