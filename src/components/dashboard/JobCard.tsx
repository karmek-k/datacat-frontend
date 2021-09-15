import React from 'react';
import { Job, statusColors } from '../../interfaces/resources/jobs';
import Paper from '@material-ui/core/Paper';
import { makeStyles, Theme } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

interface Props {
  job: Job;
}

const useStyles = makeStyles<Theme, { color: string }>({
  iconArea: {
    color: 'white',
    background: props => props.color
  },
  jobDataArea: {
    display: 'flex',
    flexDirection: 'column'
  }
});

const JobCard: React.FC<Props> = ({ job }) => {
  const color = statusColors.get(job.status)!;
  const classes = useStyles({ color });

  return (
    <Paper>
      <Grid container>
        <Grid item className={classes.iconArea}>
          <DoneIcon />
        </Grid>
        <Grid item className={classes.jobDataArea}>
          <Typography>{job.jobName}</Typography>
          <Typography>{job.jobUrl}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default JobCard;
