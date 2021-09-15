import React from 'react';
import { useParams } from 'react-router';
import { Redirect } from 'react-router-dom';
import Layout from '../components/shared/Layout';
import useJobs from '../hooks/jobs/useJobs';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  textCentered: {
    textAlign: 'center'
  }
});

const JobDetailsPage: React.FC = () => {
  const params = useParams<{ jobId: string }>();
  const jobId = Number.parseInt(params.jobId);

  const jobs = useJobs();
  const classes = useStyles();

  if (Number.isNaN(jobId)) {
    return <Redirect to="/dashboard" />;
  }

  if (jobs.isLoading || !jobs.data) {
    return (
      <Layout>
        <Typography>Loading...</Typography>
      </Layout>
    );
  }

  const job = jobs.data.find(job => job.id === jobId);
  if (!job) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Layout>
      <Typography variant="h3" className={classes.textCentered}>
        {job.jobName}
      </Typography>
    </Layout>
  );
};

export default JobDetailsPage;
