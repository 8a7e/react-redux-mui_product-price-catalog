import { privateRoutes } from "../../routes";
import { Route, Switch, Redirect } from "react-router-dom";

function AppRouter() {
  return (
    <Switch>
      {privateRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact={true} />
      ))}
      <Redirect to={"/feed"} />
    </Switch>
  );
}

export default AppRouter;
