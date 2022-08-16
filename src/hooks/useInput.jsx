import { useState } from 'react';

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    setValue(event.target.value);
  };
  return [value, onChange];
};

const useInputWithValidation = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    setValue(event.target.value);
  };

  const isValid = validator(value);
  return [value, isValid, onChange];
};

export { useInput, useInputWithValidation };
