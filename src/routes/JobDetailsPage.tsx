import React from 'react';
import { useParams } from 'react-router';
import { Redirect } from 'react-router-dom';
import Layout from '../components/shared/Layout';
import useJobs from '../hooks/jobs/useJobs';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';
import dayjs from 'dayjs';

const useStyles = makeStyles({
  textCentered: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
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

  const createdAt = dayjs(job.createdAt);
  const modifiedAt = dayjs(job.modifiedAt);

  return (
    <Layout>
      <div className={classes.textCentered}>
        <Typography variant="h3">{job.jobName}</Typography>
        <Typography>
          Created <b>{createdAt.fromNow()}</b>
        </Typography>
        <Typography>
          Modified <b>{modifiedAt.fromNow()}</b>
        </Typography>
      </div>
    </Layout>
  );
};

export default JobDetailsPage;
