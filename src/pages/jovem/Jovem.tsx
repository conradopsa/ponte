import React from 'react';
import { theme } from './Theme';
import { Switch } from "react-router-dom";
import { Box, Container, makeStyles, ThemeProvider } from "@material-ui/core";
import RouteWithSubRoutes from "../../components/RouteWithSubRoutes";
import TopBar from '../../components/Topbar';
import BottomBar from '../../components/BottomBar';

const useStyles = makeStyles({
  backgroundImage: {
    display: 'inline-block',
    width: '100vw',
    height: '100vh',
    backgroundImage: "url('/title-background.png')",
    backgroundSize: '100% 53vh',
    backgroundRepeat: 'no-repeat'
  }
});

export function Jovem({ routes }: any) {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.backgroundImage}>
        <TopBar />

        <Container maxWidth="sm">
          <Switch>
            { routes.map((route: any, i: number) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
          </Switch>
        </Container>

        <Box mt={10}>
          <BottomBar />
        </Box>
      </div>
    </ThemeProvider>
  );
}
