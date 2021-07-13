import React, { useState, useContext, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import { UserContext } from '../../../contexts/UserContext'
import { useHistory } from 'react-router-dom'
import { ThemeContextDispatch } from '../../../contexts/ThemeContext'
import Avatar from '@material-ui/core/Avatar'
import Badge from '@material-ui/core/Badge'
import NotificationsIcon from '@material-ui/icons/Notifications'
import { debounce } from '@material-ui/core/utils'
import clsx from 'clsx'
import { of, fromEvent, animationFrameScheduler } from 'rxjs'
import { distinctUntilChanged, filter, map, pairwise, switchMap, throttleTime } from 'rxjs/operators'
import { useObservable } from 'rxjs-hooks'
import { getCorrectEventName } from '@material/animation'
import watchScroll from '../../../utils/WatchScroll'
import IconButton from '@material-ui/core/IconButton'
import Icon from '@material-ui/core/Icon'
interface StyleProps {
  height: number
}

const useStyles = makeStyles((theme) => ({
  navbar: {
    /* backgroundColor: theme.palette.primary.main, */
    /*  borderBottom: '2px solid rgba(133, 133, 133, 0.1)', */
    /*   height: (props: StyleProps) => props.height, */
    boxShadow: '0px 0px 20px rgb(0 0 0 / 50%)',
    display: 'flex',
    justifyContent: 'space-between',
    background: 'linear-gradient(139.73deg, #399ead 0%, #399ead 100%)',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: '50px',
    transition: 'top 0.2s ease 0s',
    zIndex: 3,
    padding: '0px 16px'
  },
  navbarHidden: {
    top: '-65px'
  },
  icon: {
    color: 'white'
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16
  },
  logo: {
    width: '28px',
    height: '28px'
  },
  logoLabel: {
    width: '150px',
    height: '18px'
  },
  navbarLeft: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  navbarRight: {
    display: 'flex',
    /*     width: '14%', */
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
  }
}))

interface MyAppBarProps {
  height: number
}

const MyAppBar: React.FC<MyAppBarProps> = ({ height }) => {
  const classes = useStyles({ height })

  const history = useHistory()

  const scrollDirection = useObservable(watchScroll, 'Up')

  const { user, logout } = useContext(UserContext)

  const { isDark } = useContext(ThemeContextDispatch)

  const logoLight = '/liesa-logo-negro.png'

  const labelLight = '/liesa-label-negro.png'

  const logoNight = '/liesa-logo-blanco.png'

  const labelNight = '/liesa-label-blanco.png'

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
        {/* <IconButton onClick={handleDrawer} edge="start" className={clsx(classes.icon)}>
              <Icon className={classes.icon}>menu_open</Icon>
            </IconButton> */}
        <Button size="large" onClick={() => history.push('/home')}>
          <div className={classes.logoContainer}>
            <img className={classes.logo} src={isDark ? logoNight : logoLight} />
            <img className={classes.logoLabel} src={isDark ? labelNight : labelLight} />
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
          <Avatar className={classes.avatar}>{user.username[0]}</Avatar>
          {user.username}
          <IconButton color="inherit" onClick={logout} disableRipple disableFocusRipple>
            <Icon /* className={classes.icon} */>logout</Icon>
          </IconButton>
        </div>
      </div>
    </nav>
  )
}

export default MyAppBar
