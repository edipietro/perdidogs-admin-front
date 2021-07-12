import React, { useContext } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { UserContext } from '../contexts/UserContext'
import Login from '../views/Login/Login'
 

const Routes: React.FC = () => {
  const { user } = useContext(UserContext)

  return (
    <Router>
      {user && (        
          <Switch>
     
          </Switch>
      )}
      {!user && <Route path="/" component={Login} />}
    </Router>
  )
}

export default Routes
