import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {
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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      callback();
    }
  }, [formErrors]);

  return { handleChange, formValues, formErrors, handleSubmit };
};

export default useForm;
