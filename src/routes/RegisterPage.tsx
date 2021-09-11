//materialUI
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/core/styles';

import React from 'react';
import useRegisterForm from '../hooks/forms/useRegisterForm';
import useRegister from '../hooks/auth/useRegister';
import { Redirect } from 'react-router-dom';
import Layout from '../components/shared/Layout';

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
    margin: theme.spacing(3, 0, 2)
  }
}));

const RegisterPage: React.FC = () => {
  const {
    register: registerControl,
    handleSubmit,
    handleChange,
    registerData
  } = useRegisterForm();

  const register = useRegister();

  const classes = useStyles();

  if (register.isSuccess) {
    return (
      <Redirect
        to={{
          pathname: '/login',
          state: { message: 'You have been successfully registered' }
        }}
      />
    );
  }

  return (
    <Layout>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h2" variant="h5">
            Register
          </Typography>
          <form
            className={classes.form}
            onSubmit={handleSubmit(data => register.sendRequest(data))}
          >
            <TextField
              {...registerControl('username')}
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
              {...registerControl('email')}
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
              {...registerControl('password1')}
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
              {...registerControl('password2')}
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
            {register.isError && (
              <Typography color="error">
                Error: {register.error?.message}
              </Typography>
            )}
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
          {register.isLoading && <LinearProgress color="primary" />}
        </div>
      </Container>
    </Layout>
  );
};

export default RegisterPage;
