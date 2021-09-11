import { useMutation } from 'react-query';
import { LoginFormFields } from '../../interfaces/forms';
import { UserLoginData } from '../../interfaces/resources';
import api from '../../utils/api';

const mutationFn = async (input: LoginFormFields) => {
  const { data } = await api.post<UserLoginData>('/auth/login', input);

  return data;
};

const useLogin = () => {
  const { mutate, isLoading, isError, isSuccess, error, data } = useMutation<
    UserLoginData,
    Error,
    LoginFormFields
  >(mutationFn);

  return {
    sendRequest: mutate,
    isLoading,
    isError,
    isSuccess,
    error,
    token: data?.token
  };
};

export default useLogin;
