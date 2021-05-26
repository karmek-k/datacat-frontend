import Typography from '@material-ui/core/Typography';
import React from 'react';
import Layout from '../components/shared/Layout';

const NotFoundPage: React.FC = () => {
  return (
    <Layout>
      <Typography variant="h1">Page not found!</Typography>
    </Layout>
  );
};

export default NotFoundPage;
