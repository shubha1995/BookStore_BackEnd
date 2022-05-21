/* eslint-disable prettier/prettier */
import Customer from '../models/customer.model';

export const customerInfo = async (body) => {
  const data = await Customer.create(body);
  return data;
 };