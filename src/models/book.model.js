/* eslint-disable prettier/prettier */
import { Schema, model } from 'mongoose';

const bookSchema = new Schema(
  {
    bookName: {
      type: String,
      unique: true
    },
    bookImage: {
      type: String,
      data: Buffer
    },
    author: {
      type: String
    },
    description: {
      type: String
    },
    price: {
      type: Number
    },
    quantity: {
      type: Number
    },
    discountPrice: {
      type: Number}
  },
  {
    timestamps: true
  }
);


  export default model('Book', bookSchema);
