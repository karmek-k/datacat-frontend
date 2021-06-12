import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

interface Props {
    name: String;
    url: String;
    thumbnail: String;
};

const useStyles = makeStyles({
    root: {
        minWidth: 300,
    },
})


const JobCard: React.FC<Props> = ({name, url, thumbnail}) => {
    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography component="h5" variant="h5">
                    {name}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default JobCard;