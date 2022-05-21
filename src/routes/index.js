/* eslint-disable prettier/prettier */
import express from 'express';
const router = express.Router();

import userRoute from './user.route';
import bookRoute from './book.route';
import cartRoute from './cart.route';
import wishlistRoute from './wishlist.route';
import orderRoute from './order.route';
import customerRoute from './customer.route';
/**
 * Function contains Application routes
 *
 * @returns router
 */
function routes() {
  router.get('/', (req, res) => {
    res.json('Welcome To BookStore');
  });
  router.use('/users', userRoute);
  router.use('/book', bookRoute);
  router.use('/cart', cartRoute);
  router.use('/wishlist', wishlistRoute);
  router.use('/order', orderRoute);
  router.use('/info',customerRoute );
  return router;
}

export default routes;