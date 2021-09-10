import Button from '@material-ui/core/Button';
import React from 'react';
import Layout from '../components/shared/Layout';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Button
        color="primary"
        variant="contained"
        component={Link}
        to="/register"
      >
        Register
      </Button>
      <Button color="primary" variant="outlined" component={Link} to="/login">
        Log in
      </Button>
    </Layout>
  );
};

export default HomePage;
