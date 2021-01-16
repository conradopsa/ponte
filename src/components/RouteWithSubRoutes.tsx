import { Route } from 'react-router-dom';

export default function RouteWithSubRoutes(route: any) {
  return (
    <Route
      path={route.path}
      render={props => (
        <route.component {...props} routes={route.children} />
      )}
    />
  );
}