import React from 'react';
import DownServicesAlert from '../components/dashboard/DownServicesAlert';
import Layout from '../components/shared/Layout';
import useJobs from '../hooks/dashboard/useJobs';

// const mockData: DashboardService[] = [
//   {
//     name: 'CatPics',
//     url: 'https://catpics.com',
//     downFor: null
//   },
//   {
//     name: 'PuppyPics',
//     url: 'https://puppypics.com',
//     downFor: null
//   },
//   {
//     name: 'CatPicsOnCheapServer',
//     url: 'https://catpics.com',
//     downFor: 60
//   },
//   {
//     name: 'CatPicsFTP',
//     url: 'ftp://catpics.com',
//     downFor: null
//   }
// ];

const DashboardPage: React.FC = () => {
  const jobs = useJobs();

  return (
    <Layout>
      {jobs ? (
        <>
          <DownServicesAlert jobs={jobs} />
          {jobs.map(job => (
            <p>{job.name}</p>
          ))}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </Layout>
  );
};

export default DashboardPage;
