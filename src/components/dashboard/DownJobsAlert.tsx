import React from 'react';
import Alert from '@material-ui/lab/Alert';

interface Props {
  downCount: number;
}

const DownJobsAlert: React.FC<Props> = ({ downCount }) => {
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
