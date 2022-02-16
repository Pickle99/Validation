import React, { useState, useEffect } from 'react';

function Form() {
  const initialValues = {
    fullname: '',
    username: '',
    email: '',
    number: '',
    password: '',
    confirmpassword: '',
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const validate = (values) => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const usernameRegex = /^[a-zA-Z-]+$/;
    const fullnameRegex = /[-._!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]+/;
    if (!values.fullname) {
      errors.fullname = 'Full name is required';
    } else if (fullnameRegex.test(values.fullname)) {
      errors.fullname =
        'Special characters are not allowed, please, use letters';
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
  };

  return (
    <div className='container'>
      {(Object.keys(formErrors).length === 0) & isSubmit ? (
        (console.log(formValues),
        (<div className='title-2'>Registered successfully</div>))
      ) : (
        <div className='title'> Registration</div>
      )}

      <form onSubmit={handleSubmit}>
        <div className='user-details'>
          <div className='input-box'>
            <span className='details'>Full name</span>
            <input
              type='text'
              name='fullname'
              placeholder='Enter your name'
              value={formValues.fullname}
              onChange={handleChange}
            />
            <p>{formErrors.fullname}</p>
          </div>

          <div className='input-box'>
            <span className='details'>Username</span>
            <input
              type='text'
              name='username'
              placeholder='Enter username'
              value={formValues.username}
              onChange={handleChange}
            />
            <p>{formErrors.username}</p>
          </div>

          <div className='input-box'>
            <span className='details'>Email</span>
            <input
              type='text'
              name='email'
              placeholder='Enter your email'
              value={formValues.email}
              onChange={handleChange}
            />
            <p>{formErrors.email}</p>
          </div>

          <div className='input-box'>
            <span className='details'>Phone number</span>
            <input
              type='text'
              name='number'
              placeholder='Enter your phone number'
              value={formValues.number}
              onChange={handleChange}
            />
            <p>{formErrors.number}</p>
          </div>

          <div className='input-box'>
            <span className='details'>Password</span>
            <input
              type='text'
              name='password'
              placeholder='Enter password'
              value={formValues.password}
              onChange={handleChange}
            />
            <p>{formErrors.password}</p>
          </div>

          <div className='input-box'>
            <span className='details'>Confirm password</span>
            <input
              type='text'
              name='confirmpassword'
              placeholder='Repeat your password'
              value={formValues.confirmpassword}
              onChange={handleChange}
            />
            <p>{formErrors.confirmpassword}</p>
          </div>
        </div>
        <div className='gender-details'>
          <input type='radio' name='gender' id='dot-1' />
          <input type='radio' name='gender' id='dot-2' />
          <input type='radio' name='gender' id='dot-3' />
          <span className='gender-title'>Gender</span>
          <div className='category'>
            <label htmlFor='dot-1'>
              <span className='dot one'></span>
              <span className='gender'>Female</span>
            </label>
            <label htmlFor='dot-2'>
              <span className='dot two'></span>
              <span className='gender'>Male</span>
            </label>
            <label htmlFor='dot-3'>
              <span className='dot three'></span>
              <span className='gender'>Prefer not to say</span>
            </label>
          </div>
        </div>
        <button className='button'>Register</button>
      </form>
    </div>
  );
}
export default Form;
