/* eslint-disable prettier/prettier */
import HttpStatus from 'http-status-codes';
import * as CustomerService from '../services/customer.service';

export const customerInfo = async (req, res) => {
    try {
      const data = await CustomerService.customerInfo(req.body);
      res.status(HttpStatus.CREATED).json({
        code: HttpStatus.CREATED,
        data: data,
        message: 'Customer Details added successfully'
      });
    } catch (error) {
      res.status(HttpStatus.CONFLICT).json({
        code: HttpStatus.CONFLICT,
        message: `${error}`
      });
    }
  };