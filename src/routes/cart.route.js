/* eslint-disable prettier/prettier */
import express from 'express';
import * as cartController from '../controllers/cart.controller';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

//to create a cart
router.post('/create/:_id', userAuth, cartController.createCart);


export default router;
