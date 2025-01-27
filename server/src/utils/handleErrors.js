const handleErrors = err => {
  console.log(err.message, err.code);
  let errors = { email: '', password: '' };

  // Validation errors
  if (err.message.includes('user validation failed')) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  // Duplicate email error
  if (err.code === 11000) {
    errors.email =
      'This email is already registered. Please use a different email.';
  }

  return errors;
};

module.exports = handleErrors;
