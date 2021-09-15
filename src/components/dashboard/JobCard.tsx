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

interface StylesProps {
  color: string;
}

const useStyles = makeStyles<Theme, StylesProps>({
  root: {
    maxWidth: '400px',
    borderRadius: '10px'
  },
  iconArea: {
    color: 'white',
    background: props => props.color,
    height: '5rem',
    width: '5rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '10px'
  },
  jobDataArea: {
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: '0.5rem'
  }
});

const JobCard: React.FC<Props> = ({ job }) => {
  const color = statusColors.get(job.status)!;
  const classes = useStyles({ color });

  return (
    <Paper className={classes.root} elevation={3}>
      <Grid container>
        <Grid item className={classes.iconArea}>
          <DoneIcon fontSize="large" />
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
