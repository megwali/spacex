import { Route, Switch, useLocation } from 'react-router-dom';

import { Dashboard, Details } from '../pages';


const Container = () => {
  const { pathname } = useLocation();

  return (
    <Switch>
      <Route exact path="/">
        <Dashboard />
      </Route>

      <Route path="/:id">
        <Details id={pathname} />
      </Route>
    </Switch>
  );
};

export default Container;
