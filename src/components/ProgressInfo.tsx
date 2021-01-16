import React from 'react';  
import { Avatar, Box, Grid, makeStyles, Typography } from '@material-ui/core';
import BorderLinearProgress from './BorderLinearProgress';

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(9),
    height: theme.spacing(9)
  },
  responsiveBar: {
    width: '140px',
    [theme.breakpoints.up("sm")]: {
      width: '180px'
    }
  }
}));

export function ProgressInfo(props: any) {
  const classes = useStyles();

  return (
    <Box overflow="hidden">
      <Grid
        container
        direction="column"
        alignItems="center"
        spacing={1}
      >
        <Grid item>
          <Typography variant="body1" color="secondary">{ props.name }</Typography>
        </Grid>
      
        <Grid item>
          <Avatar 
            alt={ props.name[0] } 
            src={ props.src }
            variant={ props.variant || 'circular' }
            className={classes.avatar}
          />
        </Grid>

        <Grid item>
          <div className={classes.responsiveBar}>
            <BorderLinearProgress value={ props.levelProgress } />
            <Box display="flex" justifyContent="space-between">
              <Typography variant="h6" color="secondary">Lv. { props.level }</Typography>
              <Typography variant="h6" color="secondary">{ props.levelProgress }%</Typography>
            </Box>
          </div>
        </Grid>
      </Grid>
    </Box>  
  );
}