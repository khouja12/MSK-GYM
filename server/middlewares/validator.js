const { check, validationResult } = require("express-validator");

exports.registerValidator = () => [
  check("name", "please enter your name").not().isEmpty(),
  check("email", "please enter a valid email").isEmail(),
  check("phone", "please enter a vlid phone number ").not().isEmpty(),
  check("password", "please enter a valid password  ").isLength({ min: 5 }),
];

exports.loginValidator = () => [
  check("email", "please enter a valid email").isEmail(),
  check("password", "please enter a valid password)").isLength({ min: 5 }),
];
exports.validation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
