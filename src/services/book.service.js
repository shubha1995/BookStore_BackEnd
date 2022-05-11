/* eslint-disable prettier/prettier */
import Book from '../models/book.model';


export const getAllBooks = async () => {
    console.log('service');
  const data = await Book.find();
  console.log(data+ ' books not found');
  if (data.length === 0) {
      console.log(data);
    throw new Error('No Book Present');
  } else {
    return data;
  }
};
