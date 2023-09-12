const express = require('express');
const router = express.Router();
const contactsController = require('../../controllers/contactsControllers');
const isValidId = require('../../middelwares/isValueId');
const { validateFavoriteContact } = require('../../schemas/schemas');

router.get('/', contactsController.getContacts);

router.get('/:contactId', isValidId, contactsController.getContactsById);

router.post('/', contactsController.addNewContact);

router.delete('/:contactId', contactsController.deleteContact);

router.put('/:contactId', isValidId, contactsController.updateContact);

router.patch('/:contactId/favorite', isValidId, validateFavoriteContact,  contactsController.updateContact);

module.exports = router;