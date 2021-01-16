import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import { TrendingUp } from '@material-ui/icons';
import { DesafiosInfo } from '../../../components/DesafiosInfo';
import Description from '../../../components/Description';

const useStyles = makeStyles({
  grid: {
    padding: '0px 8px'
  },
  title: {
    alignSelf: 'flex-start'
  }
});

const DESAFIOS = [
  {
    src: '/hackathonccr.png',
    to: 'http://www.grupoccr.com.br/hackathonccr/'
  }
];

export function JovemDesafios() {
  const classes = useStyles();

  return (
    <>
      <Description>
        <Typography align="center" variant="subtitle2" color="secondary">
          Além da teoria <br/>
          Aprenda na prática e potencialize sua formação
        </Typography>
        <TrendingUp color="primary" />
      </Description>

      <Grid
        container
        direction="column"
        alignItems="center"
        className={classes.grid}
        spacing={2}
      >
        <Grid item className={classes.title}>
          <Typography variant="h5" color="secondary">Desafios disponíveis</Typography>
        </Grid>

        { DESAFIOS.map((elem, index) => (
          <Grid item key={`desafio${index}`}>
            <DesafiosInfo src={ elem.src } to={ elem.to } />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
