import React, { useContext } from 'react';
import { SimpleContext } from './SimpleContext';
const FormSuccess = () => {
  const { isSubmitted, setIsSubmitted } = useContext(SimpleContext);
  return (
    <header className='container-success'>
      <div className='box-success'>
        <div>
          <h1>Registration is successfully done</h1>
        </div>
        <div>
          <button onClick={() => setIsSubmitted(!isSubmitted)}>Return</button>
        </div>
      </div>
    </header>
  );
};

export default FormSuccess;
