/* eslint-disable prettier/prettier */
import Wishlist from '../models/wishlist.model';
import Book from '../models/book.model';

export const addWishlist = async (params, body) => {
  const searchBook = await Book.findOne({ _id: params._id });
  console.log(searchBook);
  if (searchBook === null) {
    throw new Error('Book does not exist');
  } else {
    const listPresent = await Wishlist.findOne({ userId: body.userId });
    if (listPresent) {
      let newBook = {
        bookId: searchBook._id,
        bookName: searchBook.bookName,
        description: searchBook.description,
        author: searchBook.author,

        price: searchBook.price
      };
      listPresent.book.push(newBook);
      const listUpdated = await Wishlist.findByIdAndUpdate(
        { _id: listPresent._id },
        {
          $set: {
            book: listPresent.book
          }
        },
        { new: true }
      );
      return listUpdated;
    } else {
      let newlist = Wishlist.create({
        userId: body.userId,
        book: {
          _id: searchBook._id,
          bookName: searchBook.bookName,
          description: searchBook.description,
          author: searchBook.author,

          price: searchBook.price
        }
      });

      return newlist;
    }
  }
};

export const getWishlist = async (body) => {
  const data = await Wishlist.findOne({ userId: body.userId });
  console.log(data);
  if (data.length === 0) {
    throw new Error('Wishlist is empty');
  } else {
    return data;
  }
};

export const delWishlist = async (params, body) => {
  const listPresent = await Wishlist.findOne({ userId: body.userId });
  console.log(listPresent);
  let book = await listPresent.book.findIndex(
    (bookInList) => bookInList._id === params._id
  );
  listPresent.book.splice(book, 1);
  if (book) {
    const updateList = await Wishlist.findByIdAndUpdate(
      {
        _id: listPresent._id
      },
      {
        $set: {
          book: listPresent.book
        }
      },
      { new: true }
    );
    return updateList;
  } else {
    throw new Error('Book doesnt exists');
  }
};
