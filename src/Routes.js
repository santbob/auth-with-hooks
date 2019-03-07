import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite'
import { AuthStoreContext } from './stores/AuthStore'
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'

//pages
import LandingPage from './pages/Landing'
import LoginPage from './pages/Login'
import HomePage from './pages/Home'

const PrivateRoute = observer(({ component: Component, ...rest }) => {
  const authStore = useContext(AuthStoreContext);
  console.log('PrivateRoute ', rest)
  return (<Route
      {...rest}
      render={props =>
        authStore.user ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location }
            }}
          />
        )
      }
    />);
});


const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path='/login' component={LoginPage} />
      <PrivateRoute exact path='/home' component={HomePage} />
    </Switch>
  </Router>
)

export default Routes;
