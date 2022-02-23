import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { CircularProgress } from '@material-ui/core';

export default function FormRegister() {
  const [empty, setEmpty] = useState(null);
  const [loading, setLoading] = useState(false);
  const [complete, setComplete] = useState(false);
  const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
    watch,
  } = useForm({
    mode: 'onBlur',
  });

  const [firstName, lastName, email, passwordCheck, number, password2] = watch([
    'firstName',
    'lastName',
    'email',
    'password',
    'password2',
    'number',
  ]);

  async function postData() {
    setLoading(true);
    try {
      let send = await fetch(
        'https://webhook.site/7f84e188-e7b0-4675-8a01-c40e13137abc',
        {
          method: 'post',
          mode: 'no-cors',
          headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
          },
          body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            email: email,
            number: number,
            password1: passwordCheck,
            password2: password2,
          }),
        }
      );
      setLoading(false);
      setComplete(true);
      setTimeout(() => {
        setComplete(false);
      }, 3000);
      console.log('post', send);
    } catch (error) {
      console.log(error);
    }
  }

  const onSubmit = (data) => {
    console.log(data);
    postData();

    reset();
  };

  return (
    <div className='container'>
      {loading ? <CircularProgress /> : empty}
      {complete ? (
        <header className='header-end'>Registration complete</header>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='user-details'>
            <div className='input-box'>
              <span className='details'>Full name</span>
              <input
                type='text'
                {...register('firstName', {
                  required: 'Full name is required',
                  minLength: {
                    value: 5,
                    message: 'enter at least 5 symbols',
                  },
                })}
                placeholder='Enter your name'
              />
              <div>
                {errors?.firstName && (
                  <p>{errors?.firstName?.message || 'Something went wrong'}</p>
                )}
              </div>
            </div>

            <div className='input-box'>
              <span className='details'>Last name</span>
              <input
                type='text'
                {...register('lastName', {
                  required: 'Last name is required',
                  minLength: {
                    value: 5,
                    message: 'enter at least 5 symbols',
                  },
                })}
                placeholder='Enter your last name'
              />
              <div>
                {errors?.lastName && (
                  <p>{errors?.lastName?.message || 'Something went wrong'}</p>
                )}
              </div>
            </div>

            <div className='input-box'>
              <span className='details'>E-mail</span>
              <input
                type='text'
                {...register('email', {
                  required: 'Email is required',
                  minLength: {
                    value: 6,
                    message: 'enter at least 6 symbols',
                  },
                  pattern: emailRegex,
                })}
                placeholder='Enter your email'
              />
              <div>
                {errors?.email && (
                  <p>{errors?.email?.message || 'Incorrect E-mail format'}</p>
                )}
              </div>
            </div>

            <div className='input-box'>
              <span className='details'>Phone number</span>
              <input
                type='text'
                {...register('number', {
                  required: 'Phone number is required',
                  minLength: {
                    value: 9,
                    message: 'enter at least 9 symbols',
                  },
                })}
                placeholder='Enter your phone number'
              />
              <div>
                {errors?.number && (
                  <p>{errors?.number?.message || 'Something went wrong'}</p>
                )}
              </div>
            </div>

            <div className='input-box'>
              <span className='details'>Password</span>
              <input
                type='text'
                {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 7,
                    message: 'enter at least 6 symbols',
                  },
                })}
                placeholder='Enter your password'
              />
              <div>
                {errors?.password && (
                  <p>{errors?.password?.message || 'Something went wrong'}</p>
                )}
              </div>
            </div>

            <div className='input-box'>
              <span className='details'>Confirm Password</span>
              <input
                type='text'
                {...register('password2', {
                  required: 'Confirming your password is required',
                  minLength: {
                    value: 7,
                    message: 'enter at least 6 symbols',
                  },
                  validate: (state) =>
                    state === passwordCheck || 'Passwords dont match',
                })}
                placeholder='Confirm your password'
              />
              <div>
                {errors?.password2 && (
                  <p>{errors?.password2?.message || 'Something went wrong'}</p>
                )}
              </div>
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
          <button className='button' type='submit' disabled={!isValid}>
            Register
          </button>
        </form>
      )}
    </div>
  );
}
