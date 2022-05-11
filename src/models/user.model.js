import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    mobileNumber: { type: String, required: true, trim: true, unique: true },
    password: { type: String, required: true }
  },
  {
    timestamps: true
  }
);

export default model('User', userSchema);
