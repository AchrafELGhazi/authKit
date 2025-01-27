const handleErrors = err => {
  console.log(err.message, err.code);
  let error = { email: '', password: '' };

  // validation erros
  if (err.message.includes('user validation failed')) {
    Object.values(err.errors).forEach(err => {
      console.log(err.properties)
    })
  }
};

module.exports = handleErrors;
