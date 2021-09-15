import React from 'react';
import { useParams } from 'react-router';
import { Redirect } from 'react-router-dom';
import Layout from '../components/shared/Layout';

const JobDetailsPage: React.FC = () => {
  const params = useParams<{ jobId: string }>();
  const jobId = Number.parseInt(params.jobId);

  if (Number.isNaN(jobId)) {
    return <Redirect to="/dashboard" />;
  }

  return <Layout>{null}</Layout>;
};

export default JobDetailsPage;
