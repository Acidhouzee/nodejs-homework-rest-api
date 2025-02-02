const User = require('../../models/user');
const { validateBody } = require('../../schemas/userScheme');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;

signIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({email});

    if(!user.verify) {
      res.status(401).json({ message: 'Email not verify!' });
    }

    const payload = {
      id: user._id,
    }
    const token = jwt.sign(payload, JWT_SECRET, {expiresIn: "23h"});
    
    const {_id: id } = user;
    await User.findByIdAndUpdate(id, { token });

    const passwordCompare = await bcrypt.compare(password, user.password);
    if(!passwordCompare) {
      res.status(401).json({ message: "Email or password invalid."});
    }

    res.status(201).json(token);

  } catch (error) {
    next(error);
  }
};

module.exports = {
  signIn
};