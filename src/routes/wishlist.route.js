/* eslint-disable prettier/prettier */
import express from 'express';
import * as wishlistController from '../controllers/wishlist.controller';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

 //to create a wishlist
 router.post('/wishlist/:_id', userAuth, wishlistController.addWishlist);

 //to get all items of wishlist
 router.get('/getlist', userAuth, wishlistController.getWishlist);

 //to delete wishlist items
 router.put('/dellist/:id', userAuth, wishlistController.delWishlist)

 export default router;