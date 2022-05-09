import Joi from '@hapi/joi';

export const newUserValidator = (req, res, next) => {
  const schema = Joi.object({
    firstName: Joi.string()
      .min(4)
      .required()
      .error(Error('Enter a appropriate first name')),
    lastName: Joi.string()
      .min(4)
      .required()
      .error(Error('Enter a appropriate last name')),
    email: Joi.string()
      .email()
      .required()
      .error(Error('Enter a appropriate Email')),
    mobileNumber: Joi.number().min(4).required(),
    password: Joi.string().required()
  });

  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
};
