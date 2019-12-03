import React, { useEffect } from "react";
import {
  Switch,
  Route,
  Redirect,
  withRouter,
  RouteComponentProps
} from "react-router-dom";

// Auth
import { UserContext } from "../firebase/UserContext";
import useAuth from "../hooks/useAuth";

// Components
import { Preload, Header } from "./";

// Routes & pages
import { addRouteAttrToDOM } from "../utils";
import * as routes from "../constants/routes";
import { Login, Gallery } from "../pages";

const App: React.FC<RouteComponentProps> = ({ location }) => {
  // User state
  const [user] = useAuth();

  // On route change ..
  useEffect(() => {
    addRouteAttrToDOM(location);
  }, [location]);

  return (
    <UserContext.Provider value={user}>
      <React.Fragment>
        <Preload />
        <Header route={location.pathname.replace("/", "")} />
        <main id="main">
          <Switch>
            <Route
              exact
              path={routes.HOME}
              render={({ location }) =>
                user ? (
                  <Gallery />
                ) : (
                  <Redirect
                    to={{
                      pathname: routes.LOGIN,
                      state: { from: location }
                    }}
                  />
                )
              }
            />
            <Route
              exact
              path={routes.LOGIN}
              render={({ location }) =>
                !user ? (
                  <Login />
                ) : (
                  <Redirect
                    to={{
                      pathname: routes.HOME,
                      state: { from: location }
                    }}
                  />
                )
              }
            />
          </Switch>
        </main>
      </React.Fragment>
    </UserContext.Provider>
  );
};

export default withRouter(App);
