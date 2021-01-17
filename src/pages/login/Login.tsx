import React from 'react';
import { Link, useHistory } from "react-router-dom";
import { Box, Button, Container, Grid, Input, makeStyles, ThemeProvider, Typography } from "@material-ui/core";
import { theme } from '../jovem/Theme';

const useStyles = makeStyles({
  backgroundImage: {
    display: 'inline-block',
    width: '100%',
    height: '100vh',
    backgroundImage: 'url(/title-background.png)',
    backgroundSize: '100% 65vh',
    backgroundRepeat: 'no-repeat'
  },
  input: {
    backgroundColor: '#FFFFFF', 
    padding: '2px 6px', 
    border: '3px solid #4840C0', 
    borderRadius: '4px', 
    boxShadow: '-1px 1px 10px #4840C0',
    fontSize: '11px'
  },
  btnLogin: {
    color: '#FFFFFF', 
    backgroundColor: 
    '#6C63FF', 
    textTransform: 'initial', 
    filter: 'drop-shadow(-1px 4px 15px #4840C0)'
  },
  btnSignUp: {
    color: '#6C63FF', 
    border: '1px solid #6C63FF', 
    textTransform: 'initial'
  }
});

export function Login() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.backgroundImage}>
        <Box display="flex" justifyContent="center" my={2}>
          <img src="/logo.svg" alt="Logo" width="100px" />
        </Box>

        <Typography variant="subtitle1" align="center" color="secondary">Não precisa saber, só caí dentro</Typography>

        <Typography variant="subtitle2" align="center" color="secondary">A gente te ajuda :)</Typography>

        <Box display="flex" justifyContent="center" px={3} >
          <img src="/undraw.svg" width="300px" alt="Illustration" />
        </Box>

        <Container maxWidth="sm" style={{marginTop: '30px'}}>
          <Grid 
            container
            direction="column"
            spacing={2}
            alignContent="center"
          >
            <Grid item xs={11} sm={7} style={{width: '100%'}}>
              <Input placeholder="Seu e-mail" disableUnderline fullWidth className={classes.input} />
            </Grid>

            <Grid item xs={11} sm={7}>
              <Input placeholder="Sua senha" disableUnderline fullWidth className={classes.input} />
            </Grid>

            <Grid item xs={11} sm={7} style={{marginTop: '8px'}}>
              <Button variant="contained" onClick={() => history.push('/jovem/home')} className={classes.btnLogin} fullWidth disableElevation>Entrar</Button>
            </Grid>

            <Grid item xs={11} sm={7} style={{marginTop: '4px'}}>
              <Button variant="outlined" className={classes.btnSignUp} fullWidth disableElevation>Quero virar aluno</Button>
            </Grid>
          </Grid>

          <Grid item style={{marginTop: '8px'}}>
            <Typography variant="body2" align="center" style={{color: '#363092', fontFamily: 'Open sans, sans-serif', fontWeight: 'bold'}}>
                Sou empresa, desejo <Link to="/contrate" style={{color: '#948DFF'}}>contratar talentos</Link>
            </Typography>
          </Grid>
        </Container>

        <Box width="100%" position="fixed" bottom={5} mx="auto">
          <Typography variant="body2" align="center" style={{color: '#363092', fontFamily: 'Open sans, sans-serif', fontWeight: 'bold'}}>© Ponte, 2021</Typography>
        </Box>
      </div>
    </ThemeProvider>
  );
}
