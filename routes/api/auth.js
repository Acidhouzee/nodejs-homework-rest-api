const express = require('express');
const auhRouter = express.Router();
const authController = require('../../controllers/index');
const authenticate = require('../../middelwares/authenticate');

auhRouter.post('/signup', authController.authSignUp.signUp);
auhRouter.post('/signin', authController.authSignIn.signIn);
auhRouter.get('/current', authenticate, authController.authCurrent.getCurrent);
auhRouter.post('/signout', authenticate, authController.authSignOut.signOut);

module.exports = auhRouter;