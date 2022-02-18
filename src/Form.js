import React, { useState, useMemo } from 'react';
import FormRegister from './FormRegister';
import FormSuccess from './FormSuccess';
import { SimpleContext } from './SimpleContext';
function Form() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const providerBoo = useMemo(
    () => ({ isSubmitted, setIsSubmitted }),
    [isSubmitted, setIsSubmitted]
  ); // just to showcase that i can at least use this, in this case i think this dont change anything (a little bit of optimization)
  function submitForm() {
    setIsSubmitted(!isSubmitted);
  }

  return (
    <div>
      {!isSubmitted ? (
        <FormRegister submitForm={submitForm} />
      ) : (
        <SimpleContext.Provider value={providerBoo}>
          <FormSuccess />
        </SimpleContext.Provider>
      )}
    </div>
  );
}
export default Form;
