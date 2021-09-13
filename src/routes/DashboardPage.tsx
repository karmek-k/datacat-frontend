import React from 'react';
import DownJobsAlert from '../components/dashboard/DownJobsAlert';
import Layout from '../components/shared/Layout';
import useJobs from '../hooks/dashboard/useJobs';

const DashboardPage: React.FC = () => {
  const jobs = useJobs();

  return (
    <Layout>
      {jobs.data ? (
        <>
          <DownJobsAlert downCount={1} />
          {jobs.data.map(job => (
            <p key={job.id}>{job.jobName}</p>
          ))}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </Layout>
  );
};

export default DashboardPage;
