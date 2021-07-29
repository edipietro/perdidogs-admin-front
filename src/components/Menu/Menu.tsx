import React, { useContext, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { withRouter } from 'react-router-dom'
import { UserContext } from '../../contexts/UserContext'
import NavBar from './NavBar'
import LateralMenu from './LateralMenu'

const appBarHeight = 50

const Menu: React.FC = ({ children }) => {
  const classes = useStyles()

  const appBarHeight = 65

  const { user } = useContext(UserContext)

  const [open, setOpen] = useState(true)

  const handleDrawer = () => setOpen(!open)

  if (!user) return null

  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar handleDrawer={handleDrawer} height={appBarHeight} />
      <div className={classes.drawerAndContentContainer}>
        <LateralMenu open={open} setOpen={setOpen} marginTop={appBarHeight} />
        {children}
      </div>
    </div>
  )
}

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

export default withRouter(Menu)
