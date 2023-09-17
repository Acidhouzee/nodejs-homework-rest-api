const addNewContact = require('./contacts/addNewContact');
const getContacts = require('./contacts/getContacts');
const getContactsById = require('./contacts/getContactsById');
const updateContact = require('./contacts/updateContact');
const deleteContact = require('./contacts/deleteContact');

module.exports = {
  addNewContact,
  getContacts,
  getContactsById,
  updateContact,
  deleteContact,
};