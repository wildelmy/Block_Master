import React from 'react'
import {
  HashRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";
import Home from '../pages/Home.jsx'
import { AuthRouter } from './AuthRouter'
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

const [checking, setchecking] = useState(true)
const [isLooggedIn, setIsLooggedIn] = useState(false)

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
          path="/auth"
          component={AuthRouter}
          isAuthenticated= {isLooggedIn}
          />

          <PrivateRoute
          exact
          path="/"
          component={Home}
          isAuthenticated={isLooggedIn}
          />

          <Redirect to = "/AuthRouter/Login" />
    
        </Switch>
      </div>
    </Router>
  )
}
