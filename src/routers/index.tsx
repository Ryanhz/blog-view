import * as React from 'react';
import { HashRouter, Route, Switch, BrowserRouter, Redirect } from "react-router-dom";

// import IndexList from "@Components/list";
import Login from "@Components/login";
import Signup from "@Components/signup";

let Router: any = process.env.NODE_ENV !== 'production' ? BrowserRouter : HashRouter
const RouteConfig = (
  <HashRouter >
    <Switch>
      {/* <Route exact={true} path="/" component={IndexList} /> */}
      <Route exact={true} path="/login" component={Login} />
      <Route exact={true} path="/signup" component={Signup} />
      <Redirect from='' to="/" />
    </Switch>

  </HashRouter>
);

export default RouteConfig;