import { useMutation } from 'react-query';
import { RegisterFormFields } from '../../interfaces/forms';
import { UserRegisterData } from '../../interfaces/resources/users';
import api from '../../utils/api';

const useRegister = () => {
  const { mutate, isLoading, isError, isSuccess, error } = useMutation<
    UserRegisterData,
    Error,
    RegisterFormFields
  >(data => api.post<UserRegisterData>('/auth/register', data));

  return {
    sendRequest: mutate,
    isLoading,
    isError,
    isSuccess,
    error
  };
};

export default useRegister;
