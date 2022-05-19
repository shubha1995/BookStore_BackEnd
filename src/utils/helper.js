/* eslint-disable prettier/prettier */
/* eslint-disable max-len */
import nodemailer from 'nodemailer';

export const sendMail = async (email, token) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SENDERS_ID,
      pass: process.env.PASSWORD
    }
  });
  console.log(process.env.SENDERS_ID);
  console.log(process.env.PASSWORD);

  // eslint-disable-next-line no-unused-vars
  let info = await transporter.sendMail({
    from: process.env.SENDERS_ID, // sender address
    to: email, // list of receivers
    subject: 'Password Reset Link', // Subject line
    text: 'Test', // plain text body
    html: `<h1>Link:><a href="http://localhost:4000/resetPassword/${token}">click here</a></h1>` // html body
  });
};
