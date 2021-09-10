import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { RegisterFormFields } from '../../interfaces/forms';

const schema = yup.object().shape({
  username: yup.string().required().max(50),
  email: yup.string().required().email().max(100),
  password1: yup.string().required(),
  password2: yup.string().required()
});

const useRegisterForm = () => {
  const { register, handleSubmit } = useForm<RegisterFormFields>({
    resolver: yupResolver(schema)
  });

  const [registerData, setRegisterData] = useState({
    username: '',
    email: '',
    password1: '',
    password2: ''
  });

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setRegisterData(prevRegisterData => ({
      ...prevRegisterData,
      [id]: value
    }));
  };

  const onSubmit = (e: any) => {
    console.log('handle submit');
  };

  return {
    handleChange,
    onSubmit,
    register,
    handleSubmit,
    registerData
  };
};

export default useRegisterForm;
