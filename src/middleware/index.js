import ExpressValidator from 'express-validator/check';
import Location from '../model';

const { check, validationResult } = ExpressValidator;

const getErrors = (req, next) => {
  const errors = validationResult(req)
    .array()
    .map(error => error.msg);
  if (!errors.length) {
    return next();
  }
  return errors;
};

// eslint-disable-next-line import/prefer-default-export
export const returnJsonErrors = async (req, res, next) => {
  const result = getErrors(req, next);
  return Array.isArray(result) ? res.status(400).json({ errors: result, status: 'error' }) : result;
};

export const validateContact = [
  check('location')
    .isString()
    .withMessage('location must be alphanumeric characters.')
    .isLength({ min: 3, max: 40 })
    .withMessage('location must be at least 3 characters long and not more than 40'),

  check('totalMale')
    .isNumeric()
    .withMessage('totalMale must be a number'),

  check('totalFemale')
    .isNumeric()
    .withMessage('totalFemale must be a number')
];


export const validateLocation = async (req, res, next) => {
  try {
    const location = await Location.findOne({ location: req.body.location });
    if (location) {
      return res.status(409).json({
        message: 'This location already exists'
      });
    }
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
  next();
};
