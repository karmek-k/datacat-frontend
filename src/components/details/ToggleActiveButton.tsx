import React from 'react';
import Button from '@material-ui/core/Button';
import { Job } from '../../interfaces/resources/jobs';
import useJobActivity from '../../hooks/jobs/useJobActivity';

interface Props {
  job: Job;
}

const ToggleActiveButton: React.FC<Props> = ({ job }) => {
  const jobActivity = useJobActivity(job);

  return (
    <Button
      onClick={() => jobActivity.toggle()}
      variant={jobActivity.isLoading ? 'outlined' : 'contained'}
      color={jobActivity.active ? 'secondary' : 'primary'}
    >
      {jobActivity.active ? 'Stop' : 'Start'} job
    </Button>
  );
};

export default ToggleActiveButton;
