const User = require("../../models/user");

signOut = async (req, res) => {
  const { _id } = req.user;
  await User.findByIdAndUpdate(_id, { token: '' });

  res.json({
    message: 'Singout success'
  });
};

module.exports = {
  signOut
};