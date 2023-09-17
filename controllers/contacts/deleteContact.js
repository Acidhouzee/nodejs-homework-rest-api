const Contact = require('../../models/contacts');

deleteContact = async (req, res, next) => {
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

module.exports = {
  deleteContact
};