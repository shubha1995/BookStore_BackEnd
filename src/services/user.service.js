/* eslint-disable prettier/prettier */
import User from '../models/user.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { sendMail } from '../utils/helper';
//create new user
export const userRegistration = async (body) => {
  const user = await User.findOne({ email: body.email });
  console.log(user);
  // eslint-disable-next-line eqeqeq
  if (user == null) {
    const saltRounds = 10;
    const hasedPassword = bcrypt.hashSync(body.password, saltRounds);
    body.password = hasedPassword;
    const data = await User.create(body);

    return data;
  } else {
    throw new Error('Email already Registered');
  }
};
// User Login
export const login = async (body) => {
  const user = await User.findOne({ email: body.email });
  if (user === null) {
    throw new Error('User does not exist');
  } else {
    const validPassword = bcrypt.compareSync(body.password, user.password);
    if (validPassword) {
      const token = jwt.sign(
        { email: user.email, id: user._id },
        process.env.SECRET_CODE
      );
      return token;
    } else {
      throw new Error('password is invalid');
    }
  }
};

// Forget Api
export const forgetPassword = async (body) => {
  const user = await User.findOne({ email: body.email });
  console.log(user);

  if (user.email === body.email) {
    const token = jwt.sign({ 'email': user.email, 'id': user._id },
      process.env.SECRET_KEY);
    // eslint-disable-next-line no-unused-vars
    const forgetmail = await sendMail(user.email, token)

    return token;

  } else {
    throw new Error('User does not exist');

  }

};
