import React from "react";
import { BrowserRouter as Router, Switch, RouteProps, Redirect } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./Theme";
import {
  Home,
  Login,
  Jovem,
  Contribua,
  JovemHome,
  JovemHabilidades,
  JovemDesafios,
  JovemBeneficios,
} from "./pages";
import { Contrate } from "./pages/contrate/Contrate";
import RouteWithSubRoutes from "./components/RouteWithSubRoutes";

const ROUTES: RouteProps[] = [
  {
    path: '/jovem',
    component: Jovem,
    children: [
      {
        path: '/jovem/home',
        component: JovemHome
      },
      {
        path: '/jovem/habilidades',
        component: JovemHabilidades
      },
      {
        path: '/jovem/desafios',
        component: JovemDesafios
      },
      {
        path: '/jovem/beneficios',
        component: JovemBeneficios
      },
      {
        path: '*',
        component: () => <Redirect to="/jovem/home" />
      }
    ]
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: '/contrate',
    component: Contrate
  },
  {
    path: '/contribue',
    component: Contribua
  },
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: '*',
    component: () => <Redirect to="/home" />
  }
];

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          { ROUTES.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </Router>
    </ThemeProvider>
  );
}