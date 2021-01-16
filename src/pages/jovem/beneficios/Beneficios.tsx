import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Cake } from '@material-ui/icons';
import { LojasInfo } from '../../../components/LojasInfo';
import Description from '../../../components/Description';

const LOJAS = [
  {
    name: 'Delícias de Trigo',
    description: 'Você será bem-vindo para ganhar alguns pães'
  },
  {
    name: 'Extrabom',
    description: 'Você será bem-vindo para ganhar alguns mantimentos'
  },
];

export function JovemBeneficios() {
  return (
    <>
      <Description>
        <Typography align="center" variant="subtitle2" color="secondary">
          Lojas parceiras <br/>
          Dedique-se e ganhe presentes
        </Typography>
        <Cake color="primary" />
      </Description>

      <Grid
        container
        direction="column"
        spacing={2}
      >
        <Grid item>
          <Typography variant="h5" color="secondary">Lojas abertas agora</Typography>
        </Grid>
        
        { LOJAS.map((elem, index) => (
          <Grid item key={`loja${index}`}>
            <LojasInfo {...elem} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}