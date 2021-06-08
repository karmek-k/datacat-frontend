import React, { useState } from 'react';
//materialUI
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#2d2e40'
  }
}));

interface FormFields {
  username: string;
  email: string;
  password1: string;
  password2: string;
}

const schema = yup.object().shape({
  username: yup.string().required().max(50),
  email: yup.string().required().email().max(100),
  password1: yup.string().required(),
  password2: yup.string().required()
});

const RegisterPage: React.FC = () => {
  const { register, handleSubmit } = useForm<FormFields>({
    resolver: yupResolver(schema)
  });
  const classes = useStyles();

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

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h2" variant="h5">
          Register
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <TextField
            {...register('username')}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={registerData.username}
            onChange={handleChange}
          />
          <TextField
            {...register('email')}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="E-mail"
            name="email"
            autoComplete="email"
            autoFocus
            value={registerData.email}
            onChange={handleChange}
          />
          <TextField
            {...register('password1')}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password1"
            label="Password"
            type="password"
            id="password1"
            autoFocus
            value={registerData.password1}
            onChange={handleChange}
          />
          <TextField
            {...register('password2')}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password2"
            label="Password"
            type="password"
            id="password2"
            autoFocus
            value={registerData.password2}
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Register
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default RegisterPage;
