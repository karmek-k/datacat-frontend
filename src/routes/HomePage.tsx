import Button from '@material-ui/core/Button';
import React from 'react';
import Layout from '../components/shared/Layout';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Button color="primary" variant="contained">
        Log in
      </Button>
    </Layout>
  );
};

export default HomePage;
