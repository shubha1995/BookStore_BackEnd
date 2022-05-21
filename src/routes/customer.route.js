/* eslint-disable prettier/prettier */
import express from 'express';
import * as customerController from '../controllers/customer.controller.js';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

router.post('/post', userAuth, customerController.customerInfo);

export default router;
