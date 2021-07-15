import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { withRouter } from 'react-router-dom'
import { UserContext } from '../../contexts/UserContext'
import MyAppBar from './MyAppBar'
import MyDrawer from './MyDrawer'

const appBarHeight = 50

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    boxSizing: 'border-box',
    height: '100%'
  },
  drawerAndContentContainer: {
    display: 'flex',
    height: '100%'
  },
  content: {
    display: ' flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: theme.palette.background.default,
    marginLeft: 260,
    /*     marginTop: appBarHeight, */
    padding: 12,
    flexFlow: 'row wrap'
  }
}))

const Menu: React.FC = ({ children }) => {
  const classes = useStyles()

  const appBarHeight = 65

  const { user } = useContext(UserContext)

  if (!user) return null

  return (
    <div className={classes.root}>
      <CssBaseline />
      <MyAppBar height={appBarHeight} />
      <div className={classes.drawerAndContentContainer}>
        <MyDrawer marginTop={appBarHeight} />
        {children}
      </div>
    </div>
  )
}

export default withRouter(Menu)
