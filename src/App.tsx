import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import { theme } from "./Theme";
import {
  Home,
  Login,
  Jovem,
  JovemHabilidades,
  JovemBeneficios,
  JovemDesafios,
  Contribua,
} from "./pages";
import { Contrate } from "./pages/contrate/Contrate";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route exact path="/jovem">
            <Jovem />
          </Route>

          <Route path="/jovem/habilidades">
            <JovemHabilidades />
          </Route>

          <Route path="/jovem/desafios">
            <JovemDesafios />
          </Route>

          <Route path="/jovem/beneficios">
            <JovemBeneficios />
          </Route>

          <Route exact path="/contrate">
            <Contrate />
          </Route>

          <Route exact path="/contribua">
            <Contribua />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
