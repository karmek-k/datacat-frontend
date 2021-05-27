import React from 'react';
import Alert from '@material-ui/lab/Alert';
import { DashboardService } from '../../interfaces/DashboardService';

interface Props {
  services: DashboardService[];
}

const DownServicesAlert: React.FC<Props> = ({ services }) => {
  const downCount = services.filter(item => item.downFor !== null).length;

  if (downCount > 0) {
    return (
      <Alert severity="error">
        {downCount} service{downCount > 1 && 's'} down!
      </Alert>
    );
  }

  return <Alert severity="success">All services functional</Alert>;
};

export default DownServicesAlert;
