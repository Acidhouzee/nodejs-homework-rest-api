const Contact = require('../../models/contacts');

getContactsById = async (req, res, next) => {
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

module.exports = {
  getContactsById
};