/* eslint-disable prettier/prettier */
import express from 'express';
import * as userController from '../controllers/user.controller';
import { newUserValidator } from '../validators/user.validator';
const router = express.Router();

//route to create a new user
router.post('/userregister', newUserValidator, userController.userRegistration);

//route to login for user
router.post('/login', userController.login);

//route to forgot password
router.post('/forgot',userController.forgetPassword);
export default router;
