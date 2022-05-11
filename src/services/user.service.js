import User from '../models/user.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
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
