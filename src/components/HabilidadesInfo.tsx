import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CardActions } from '@material-ui/core';
import { ChevronRight } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main
  },
  button: {
    borderRadius: '100%',
    margin: '0 4px'
  }
}));

export function HabilidadesInfo(props: any) {
  const classes = useStyles();

  return (
    <Card elevation={5}>
      <CardActionArea className={classes.card}>
        <CardContent>
          <Typography variant="body2" color="secondary">{ props.name }</Typography>
        </CardContent>

        <CardActions>
          <ChevronRight color="secondary" />
        </CardActions>
      </CardActionArea>
    </Card>
  );
}