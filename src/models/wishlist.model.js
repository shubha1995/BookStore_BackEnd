/* eslint-disable prettier/prettier */
import { Schema, model } from 'mongoose';

const wishlistSchema = new Schema(
  {
    userId: {
      type: String
    },
    book: [{
      bookId: {
        type: String
      },
      bookImage: {
      type: String,
      data: Buffer
    },
      description: {
        type: String
      },
      bookName: {
        type: String
      },
      author: {
        type: String
      }
    }]
  },
  {
    timestamps: true
  }
);

export default model('Wishlist', wishlistSchema);