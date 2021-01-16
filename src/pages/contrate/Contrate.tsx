import React from 'react';
import Chart from 'react-apexcharts';
import { theme } from '../jovem/Theme';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Avatar, Box, Container, Grid, IconButton, Paper, ThemeProvider, Toolbar, Typography } from '@material-ui/core';
import { ArrowBack, ArrowForward, Check, } from '@material-ui/icons';
import TopBar from './TopBar';

const useStyles = makeStyles({
  backgroundImage: {
    display: 'inline-block',
    width: '100%',
    height: '100vh',
    backgroundImage: 'url(/title-background.png)',
    backgroundSize: '100% 60vh',
    backgroundRepeat: 'no-repeat'
  },
  button: {
    backgroundColor: "#6C6AE2", 
    color: "#FFF", 
    padding: "10px", 
    borderRadius: "100%"
  }
});

export function Contrate() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.backgroundImage}>
        <TopBar />

        <Container maxWidth="sm">
          <Paper style={{maxWidth: '400px', height: '400px', padding: '20px', margin: '0 auto', marginTop: '60px'}} elevation={5}>
            <Grid
              container
              direction="column"
              alignItems="center"
              spacing={2}
            >
              <Grid item>
                <Avatar
                  alt="S"
                  src="/suellen.png"
                  style={{width: '72px', height: '72px'}}
                />
              </Grid>

              <Grid item>
                <Typography variant="body1" align="center">Suellen Lima</Typography>
                <Typography variant="body2" align="center" style={{color: "#6C6AE2", fontWeight: "bold"}}>Level 1</Typography>
              </Grid>

              <Grid item>
                <Typography variant="body2" align="center">Em busca de um primeiro emprego em programação</Typography>
              </Grid>

              <Grid item style={{transform: 'translateY(-15%)'}}>
                <Chart
                  type="radar"
                  height={300}
                  options={{
                    chart: {
                      toolbar: {
                        show: false,
                      },
                    },
                    xaxis: {
                      categories: [
                        ["Habilidades Linguísticas"],
                        ["Raciocínio", "Lógico"],
                        ["Habilidades", "Espaciais"],
                        ["Habilidades", "Artísticas"],
                        ["Relações", "Pessoais"],
                      ],
                    },
                  }}
                  series={[
                    {
                      name: "Series 1",
                      data: [50, 90, 30, 40, 50],
                    },
                  ]}
                />
              </Grid>
            </Grid>
          </Paper>
        </Container>

        <AppBar 
          position="fixed"
          color="secondary"
          elevation={0}
          style={{top: 'auto', bottom: '0'}}
        >
          <Toolbar>
            <Grid container justify="center" spacing={2}>
              <Grid item>
                <IconButton>
                  <ArrowBack className={classes.button} />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton>
                  <Check className={classes.button} />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton>
                  <ArrowForward className={classes.button} />
                </IconButton>       
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    </ThemeProvider>  
  );    
}