import React, { useContext } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Menu from '../components/Menu/Menu'
import { UserContext } from '../contexts/UserContext'
import Login from '../views/Login'
import PostAdministration from '../views/PostAdministration'

const Routes: React.FC = () => {
  const { user } = useContext(UserContext)

  return (
    <Router>
      {user && (
        <Menu>
          <Switch>
            <Route path="/" component={PostAdministration} />
          </Switch>
        </Menu>
      )}
      {!user && <Route path="/" component={Login} />}
    </Router>
  )
}

export default Routes
