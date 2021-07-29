import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import UserContext from '../../contexts/UserContext'
import { useHistory } from 'react-router-dom'
import { ThemeContextDispatch } from '../../contexts/ThemeContext'
import Avatar from '@material-ui/core/Avatar'
import clsx from 'clsx'

import IconButton from '@material-ui/core/IconButton'
import Icon from '@material-ui/core/Icon'

interface NavBarProps {
  height: number
  handleDrawer: () => void
}

const NavBar: React.FC<NavBarProps> = ({ height, handleDrawer }) => {
  const classes = useStyles({ height })

  const history = useHistory()

  const { user, logout } = useContext(UserContext)

  const { isDark } = useContext(ThemeContextDispatch)

  const logo = '/logo.png'

  if (!user) return null

  //Para ocultarla
  /*   <nav
  className={clsx(classes.navbar, {
    [classes.navbarHidden]: scrollDirection === 'Down' && 'hidden'
  })}
> */

  return (
    <nav className={clsx(classes.navbar)}>
      <div className={classes.navbarLeft}>
        {/*         <IconButton onClick={handleDrawer} edge="start" className={clsx(classes.icon)}>
          <Icon className={classes.icon}>menu_open</Icon>
        </IconButton> */}
        <Button className={classes.homeButton} size="large" onClick={() => history.push('/home')}>
          <div className={classes.logoContainer}>
            <img className={classes.logo} src={logo} />
            <div className={classes.title}>Perdidogs</div>
          </div>
        </Button>
      </div>
      <div className={classes.navbarRight}>
        {/*         <div className={classes.notications}>
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon className={classes.icon} />
          </Badge>
        </div> */}
        <div className={classes.userContainer}>
          <Avatar src={user.avatar} className={classes.avatar}>
            {user.firstName[0] + user.lastName[0]}
          </Avatar>
          <div className={classes.userName}>
            {user.firstName} {user.lastName}
          </div>
          <IconButton color="inherit" onClick={logout} disableRipple disableFocusRipple>
            <Icon className={classes.icon}>logout</Icon>
          </IconButton>
        </div>
      </div>
    </nav>
  )
}

export default NavBar

const useStyles = makeStyles((theme) => ({
  navbar: {
    /* backgroundColor: theme.palette.primary.main, */
    borderBottom: '2px solid rgba(133, 133, 133, 0.1)',
    /*   height: (props: StyleProps) => props.height, */
    /* boxShadow: '0px 0px 20px rgb(0 0 0 / 50%)', */
    display: 'flex',
    justifyContent: 'space-between',
    background: theme.palette.background.paper,
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    /* height: '50px', */
    transition: 'top 0.2s ease 0s',
    zIndex: 3,
    padding: '0px 16px'
  },
  navbarHidden: {
    top: '-65px'
  },
  icon: {
    color: theme.palette.primary.main
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16
  },
  logo: {
    width: '38px',
    height: '38px'
  },
  title: {
    fontFamily: 'Love Ya Like A Sister',
    fontSize: 32,
    fontWeight: 'bold',
    color: theme.palette.text.secondary
  },
  navbarLeft: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  navbarRight: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  userContainer: {
    display: 'flex',
    gap: '8px',
    alignItems: 'center',
    color: 'white',
    fontSize: '24px'
  },
  avatar: {
    width: 36,
    height: 36,
    color: theme.palette.text.primary
  },
  notications: {
    padding: 24
  },
  userName: {
    fontSize: '18px',
    color: theme.palette.text.primary,
    fontWeight: 600
  },
  homeButton: {
    textTransform: 'none'
  }
}))
