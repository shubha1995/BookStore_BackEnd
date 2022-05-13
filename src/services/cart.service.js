/* eslint-disable prettier/prettier */
import Cart from '../models/cart.model';
import Book from '../models/book.model';

export const createCart = async (params, body) => {
  const searchBook = await Book.findOne({ _id: params._id });
  console.log(searchBook);
  if (searchBook === null) {
    throw new Error('Book does not exist');
  } else {
    const cartPresent = await Cart.findOne({ userId: body.userId });
    console.log(cartPresent);
    if (cartPresent) {
      let newBook = {
        bookId: searchBook._id,
        bookName: searchBook.bookName,
        author: searchBook.author,
        quantity: 1,
        price: searchBook.price
      };
      cartPresent.book.push(newBook);
      const cartUpdated = await Cart.findByIdAndUpdate(
        { _id: cartPresent._id },
        {
          $set: {
            book: cartPresent.book
          }
        },
        { new: true }
      );
      return cartUpdated;
    } else {
      let newCart = Cart.create({
        userId: body.userId,
        book: {
          _id: searchBook._id,
          bookName: searchBook.bookName,
          author: searchBook.author,
          quantity: 1,
          price: searchBook.price
        }
      });

      return newCart;
    }
  }
};
