/* eslint-disable prettier/prettier */
/* eslint-disable max-len */
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

export const getCartItems = async (body) => {
    const data = await Cart.findOne({ userId: body.userId });
    console.log(data)
    if (data.length === 0) {
        throw new Error('Cart Not Present')
    }
    else {
        return data;
    }
};

export const cartUpdate = async (params, body) => {
    const cartPresent = await Cart.findOne({ userId: body.userId });
    console.log(cartPresent)
    if(cartPresent){
        const bookInCart = await cartPresent.book.find(book => book._id === params._id)
        console.log('bookincart---',bookInCart)
        if (bookInCart){
            bookInCart.quantity = body.quantity;
           const cartUpdate = await Cart.findByIdAndUpdate({ _id: cartPresent._id},
            {
                $set: {
                    book: cartPresent.book
                }
            },
            {new:true})
            return cartUpdate
        }else{
            throw new Error('Book doesnt exist in cart')
        }
    }else{
        throw new Error('Cart doesnt exist')
    }


};


export const delCart = async (params, body) => {
    const cartPresent = await Cart.findOne({ userId: body.userId })
    let book = await cartPresent.book.findIndex(bookInCart => bookInCart._id === params._id);
    cartPresent.book.splice(book, 1)
    if (book) {
        const updateCart = await Cart.findByIdAndUpdate({
            _id: cartPresent._id
        }, {
            $set: {
                book: cartPresent.book,

            },
        }, { new: true });
        return updateCart;
    } else {
        throw new Error('Book doesnt exists')
    }
}
