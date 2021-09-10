import * as yup from 'yup';

// if there are any duplicating values,
// place them here
const username = yup.string().required().max(50);
const password = yup.string().required();

export const registerSchema = yup.object().shape({
  username,
  email: yup.string().required().email().max(100),
  password1: password,
  password2: password
});

export const loginSchema = yup.object().shape({
  username,
  password
});
