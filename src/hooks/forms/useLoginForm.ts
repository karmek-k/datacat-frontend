import { useState } from 'react';
import { LoginFormFields } from '../../interfaces/forms';

const useLoginForm = () => {
  const [loginData, setLoginData] = useState<LoginFormFields>({
    username: '',
    password: ''
  });

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setLoginData(prevLoginData => ({
      ...prevLoginData,
      [id]: value
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('handle submit');
  };

  return {
    loginData,
    handleChange,
    handleSubmit
  };
};

export default useLoginForm;
