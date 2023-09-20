const Joi = require('joi');

const contactSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
});

const updateFavoriteContact = Joi.object({
  favorite: Joi.boolean().required(),
});

const validateBody = (data) => {
  return contactSchema.validate(data);
};

const validateFavoriteContact = (data) => {
  return updateFavoriteContact.validate(data);
};

module.exports = {
  validateBody,
  validateFavoriteContact
};