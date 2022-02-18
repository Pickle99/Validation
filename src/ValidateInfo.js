export default function ValidateInfo(values) {
  const errors = {};
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  const usernameRegex = /^[a-zA-Z-]+$/;
  const fullnameRegex = /[-._!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]+/;
  if (!values.fullname) {
    errors.fullname = 'Full name is required';
  } else if (fullnameRegex.test(values.fullname)) {
    errors.fullname = 'Special characters are not allowed, please, use letters';
  }
  if (!values.username) {
    errors.username = 'Username is required';
  } else if (usernameRegex.test(values.username)) {
    errors.username =
      'Please, use only at least 1 number or special character. example: beta-31';
  } else if (values.username.length < 4) {
    errors.username = 'Username must be at least 4 characters long';
  } else if (values.username.length >= 11) {
    errors.username = 'Username can not contain more than 10 characters';
  }
  if (!values.email) {
    errors.email = 'Email adress is required';
  } else if (!emailRegex.test(values.email)) {
    errors.email = 'This is not a valid email format';
  }
  if (!values.number) {
    errors.number = 'Phone number is required';
  }
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length <= 5) {
    errors.password = 'Password must be at least 6 characters long';
  } else if (values.password.length > 12) {
    errors.password = 'Password can not contain more than 12 characters';
  }
  if (!values.confirmpassword) {
    errors.confirmpassword = 'Confirming password is required';
  } else if (values.confirmpassword !== values.password) {
    errors.confirmpassword = 'Passwords dont match';
  }
  return errors;
}
