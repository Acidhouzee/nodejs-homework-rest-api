const express = require('express');
const router = express.Router();
const contactsControllers = require('../../controllers/index');
const isValidId = require('../../middelwares/isValueId');
const { validateFavoriteContact } = require('../../schemas/contactsScheme');
const authenticate = require('../../middelwares/authenticate');

router.use(authenticate);

router.get('/', contactsControllers.getContacts.getContacts);

router.get('/:contactId', isValidId, contactsControllers.getContactsById.getContactsById);

router.post('/', contactsControllers.addNewContact.addNewContact); 

router.delete('/:contactId', contactsControllers.deleteContact.deleteContact);

router.put('/:contactId', isValidId, contactsControllers.updateContact.updateContact);

router.patch('/:contactId/favorite', isValidId, validateFavoriteContact,  contactsControllers.updateContact.updateContact);

module.exports = router;