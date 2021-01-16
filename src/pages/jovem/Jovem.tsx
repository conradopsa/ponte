import React from 'react';
import { Container, makeStyles } from "@material-ui/core";
import { Switch } from "react-router-dom";
import RouteWithSubRoutes from "../../components/RouteWithSubRoutes";

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
    <div className={classes.backgroundImage}>
      <Container maxWidth="sm">
        <Switch>
          { routes.map((route: any, i: number) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </Container>
    </div>
  );
}
