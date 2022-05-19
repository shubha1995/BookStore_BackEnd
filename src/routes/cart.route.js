/* eslint-disable prettier/prettier */
import express from 'express';
import * as cartController from '../controllers/cart.controller';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

//to create a cart
router.post('/create/:_id', userAuth, cartController.createCart);

//to get all items of cart
router.get('/get', userAuth, cartController.getCartItems);

 //to update the cart
 router.put('/update/:_id', userAuth, cartController.cartUpdate);

 //to delete cart items
 router.put('/delete/:id', userAuth, cartController.delCart)


export default router;
