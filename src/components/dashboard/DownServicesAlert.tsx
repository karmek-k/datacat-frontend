import React from 'react';
import Alert from '@material-ui/lab/Alert';
import { Job } from '../../interfaces/resources/jobs';

interface Props {
  jobs: Job[];
}

const DownJobsAlert: React.FC<Props> = ({ jobs }) => {
  const downCount = jobs.filter(item => item.downFor !== null).length;

  if (downCount > 0) {
    return (
      <Alert severity="error">
        {downCount} service{downCount > 1 && 's'} down!
      </Alert>
    );
  }

  return <Alert severity="success">All services functional</Alert>;
};

export default DownJobsAlert;
