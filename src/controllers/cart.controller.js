/* eslint-disable prettier/prettier */
import HttpStatus from 'http-status-codes';
import * as CartService from '../services/cart.service';

export const createCart = async (req, res) => {
  try {
    const data = await CartService.createCart(req.params, req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'Cart Created successfully'
    });
  } catch (error) {
    res.status(HttpStatus.CONFLICT).json({
      code: HttpStatus.CONFLICT,
      message: `${error}`
    });
  }
};

export const getCartItems = async (req, res) => {
    try {
        const data = await CartService.getCartItems(req.body);
        res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'All items in Cart fetched successfully'
    });
    }catch (error) {
        res.status(HttpStatus. NOT_FOUND).json({
        code: HttpStatus. NOT_FOUND,
        message: `${error}`
    });
    }
  };

  export const cartUpdate = async (req, res) => {
    try {
        const data = await CartService.cartUpdate(req.params, req.body);
        res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: ' Cart updated successfully'
    });
    }catch (error) {
        res.status(HttpStatus. CONFLICT).json({
        code: HttpStatus. CONFLICT,
        message: `${error}`
    });
    }
  };
