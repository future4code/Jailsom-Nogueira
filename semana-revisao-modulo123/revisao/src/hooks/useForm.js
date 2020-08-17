import { useState } from 'react';

export const useForm = (initialValues) => {
  const [values, setValue] = useState(initialValues);

  const onChange = (name, value) => {
    const newValue = { ...values, [name]: value };
    setValue(newValue);
  };
  return { values, onChange };
};
