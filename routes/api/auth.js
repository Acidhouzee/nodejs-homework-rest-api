const express = require('express');
const auhRouter = express.Router();
const authController = require('../../controllers/index');
const authenticate = require('../../middelwares/authenticate');
const upload = require('../../middelwares/upload');
const {validateBody} = require('../../schemas/emailScheme');

auhRouter.post('/signup', upload.single('avatar'), authController.authSignUp.signUp);
// upload.array('avatar', 2);
// upload.fields([{name: 'avatart', maxCount: 1}]);
auhRouter.get('/verify/:verificationCode', authController.authVerify.verifyEmail);
auhRouter.post('/verify', validateBody, authController.resendVerifyEmail.resendEmail);
auhRouter.post('/signin', authController.authSignIn.signIn);
auhRouter.get('/current', authenticate, authController.authCurrent.getCurrent);
auhRouter.post('/signout', authenticate, authController.authSignOut.signOut);
auhRouter.patch('/users/avatars', authenticate, upload.single('avatar'), authController.updateUserAvatar.updateAvatar);


module.exports = auhRouter;