/* eslint-disable prettier/prettier */
import HttpStatus from 'http-status-codes';
import * as WishlistServices from '../services/wishlist.service';

export const addWishlist = async (req, res, next) => {
  try {
    const data = await WishlistServices.addWishlist(req.params, req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'Book Added to Wishlist'
    });
  } catch (error) {
    next(error);
  }
};

export const getWishlist = async (req, res, next) => {
  try {
    const data = await WishlistServices.getWishlist(req.body);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All wishlist items fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};

export const delWishlist = async (req, res, next) => {
  try {
    const data = await WishlistServices.delWishlist(req.params, req.body);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Book removed from wishlist'
    });
  } catch (error) {
    next(error);
  }
// eslint-disable-next-line prettier/prettier
};
