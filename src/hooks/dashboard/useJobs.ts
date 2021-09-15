import { useQuery } from 'react-query';
import { Job } from '../../interfaces/resources/jobs';
import api from '../../utils/api';
import useToken from '../auth/useToken';

const useJobs = () => {
  const token = useToken();
  const { isError, data, error } = useQuery<Job[]>('jobs', () =>
    api
      .get<{ jobs: Job[] }>('/protected/jobs', {
        headers: { Authorization: `Bearer ${token.retrieve()}` }
      })
      .then(res => res.data.jobs)
  );

  return {
    isError,
    data,
    error
  };
};

export default useJobs;
