import React from 'react';
import useForm from './useForm';
import validate from './ValidateInfo';
const FormRegister = ({ submitForm }) => {
  const { handleChange, formValues, formErrors, handleSubmit } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='container'>
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
          <span className='gender-title'>Gender (not required)</span>
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
};

export default FormRegister;
