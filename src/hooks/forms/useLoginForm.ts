import { useState } from 'react';
import { LoginFormFields } from '../../interfaces/forms';
import { SubmitHandler, useForm } from 'react-hook-form';
import { loginSchema } from '../../schemas/auth';
import { yupResolver } from '@hookform/resolvers/yup';

const useLoginForm = () => {
  const { register, handleSubmit } = useForm<LoginFormFields>({
    resolver: yupResolver(loginSchema)
  });

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

  const onSubmit: SubmitHandler<LoginFormFields> = (data: LoginFormFields) => {
    console.log(data);
  };

  return {
    loginData,
    handleChange,
    onSubmit,
    handleSubmit,
    register
  };
};

export default useLoginForm;
