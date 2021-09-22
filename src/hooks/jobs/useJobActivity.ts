import { Job } from '../../interfaces/resources/jobs';
import { useMutation, useQuery } from 'react-query';
import api from '../../utils/api';
import useToken from '../auth/useToken';

// TODO: remove duplicated code!!!
const mutationFnFactory = (job: Job, jwt: string) => {
  const headers = { Authorization: `Bearer ${jwt}` };

  return job.active
    ? async () => {
        await api.post<void>(`/protected/job/${job.id}/pause`, {}, { headers });
      }
    : async () => {
        await api.post<void>(
          `/protected/job/${job.id}/restart`,
          {},
          { headers }
        );
      };
};

const activeFn = (id: number, jwt: string) => {
  return api.post<{ active: boolean }>(
    `/protected/job/${id}/active`,
    {},
    { headers: { Authorization: `Bearer ${jwt}` } }
  );
};

const useJobActivity = (job: Job) => {
  const token = useToken();
  const { mutate, isLoading, isSuccess, error } = useMutation(
    mutationFnFactory(job, token.retrieve()!)
  );

  const { data } = useQuery(['jobToggleActive', job.id], () =>
    activeFn(job.id, token.retrieve()!)
  );

  console.log(data?.data.active);

  return {
    toggle: mutate,
    isLoading,
    isSuccess,
    error,
    active: data?.data.active
  };
};

export default useJobActivity;
