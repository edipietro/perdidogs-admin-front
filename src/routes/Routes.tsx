import React, { useContext } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Menu from '../components/Menu/Menu'
import { UserContext } from '../contexts/UserContext'
import Login from '../views/Login'
import LostBreedStats from '../views/LostBreedStats'
import PostAdministration from '../views/PostAdministration'
import PostCard from '../views/PostCard'
/* import PostAdministration from '../views/PostAdministration' */

const Routes: React.FC = () => {
  const { user } = useContext(UserContext)

  return (
    <Router>
      {user && (
        <Menu>
          <Switch>
            <Route path="/publicaciones/administrar" component={PostAdministration} />
            <Route path="/estadisticas/razasPerdidas" component={LostBreedStats} />
            <Route path="/" component={PostAdministration} />
          </Switch>
        </Menu>
      )}
      {!user && <Route path="/" component={Login} />}
    </Router>
  )
}

export default Routes
