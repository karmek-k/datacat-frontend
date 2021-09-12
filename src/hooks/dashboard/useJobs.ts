import { useEffect, useState } from 'react';
import { Job } from '../../interfaces/Job';
import api from '../../utils/api';
import useToken from '../auth/useToken';

const useJobs = () => {
  const token = useToken();
  const [jobs, setJobs] = useState<Job[] | null>(null);
  useEffect(() => console.log(jobs), [jobs]);

  api
    .get<{ job: Job[] }>('/protected/jobs', {
      headers: { Authorization: `Bearer ${token.retrieve()}` }
    })
    .then(res => {
      setJobs(res.data.job);
    });

  return jobs;
};

export default useJobs;
