const { isValidObjectId } = require('mongoose');

const isValidId = (req, res, next) => {
  const { contactId } = req.params;
  if (!isValidObjectId(contactId)) {
    return res.status(404).json({ message: `${contactId} not valid id` });
  }
  next();
};

module.exports = isValidId;