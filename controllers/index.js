const addNewContact = require('./contacts/addNewContact');
const getContacts = require('./contacts/getContacts');
const getContactsById = require('./contacts/getContactsById');
const updateContact = require('./contacts/updateContact');
const deleteContact = require('./contacts/deleteContact');
const authSignUp = require('./user/authSignUp');
const authSignIn = require('./user/authSignIn');
const authCurrent = require('./user/authCurrent');
const authSignOut = require('./user/authSignOut')

module.exports = {
  addNewContact,
  getContacts,
  getContactsById,
  updateContact,
  deleteContact,
  authSignUp,
  authSignIn,
  authCurrent,
  authSignOut
};