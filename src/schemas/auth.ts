import * as yup from 'yup';

export const registerSchema = yup.object().shape({
  username: yup.string().required().max(50),
  email: yup.string().required().email().max(100),
  password1: yup.string().required(),
  password2: yup.string().required()
});
