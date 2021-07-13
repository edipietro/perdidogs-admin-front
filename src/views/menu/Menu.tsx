import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { withRouter } from 'react-router-dom'
import { UserContext } from '../../contexts/UserContext'
import MyAppBar from '.import React, { useState, useContext } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import IconButton from '@material-ui/core/IconButton'
import { Icon } from '@material-ui/core'
import { UserContext } from '../../../../contexts/UserContext'
import { useHistory } from 'react-router-dom'
import CollapseButton from './components/CollapseButton'
import { ThemeContextDispatch } from '../../../../contexts/ThemeContext'
import GitHubIcon from '@material-ui/icons/GitHub'
import TwitterIcon from '@material-ui/icons/Twitter'
import useGlobalStyle from '../../../../styles/globalStyles'
import Divider from '@material-ui/core/Divider'
import { itemList } from './Itemlist'
import watchScroll from '../../../../utils/WatchScroll'
import { useObservable } from 'rxjs-hooks/dist/cjs/use-observable'

interface StyleProps {
  marginTop: number
}

const appBarwidth = 260

const useStyles = makeStyles((theme) => ({
  drawer: {
    /* marginTop: (props: StyleProps) => props.marginTop, */
    paddingTop: 50,
    zIndex: 2,
    width: appBarwidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: theme.palette.background.paper,
    height: '100vh',
    overflowX: 'hidden',
    boxShadow: '0px 0px 20px rgb(0 0 0 / 20%)',
    transition: 'padding-top 0.2s ease 0s, width 0.2s cubic-bezier(0.4, 0, 0.2, 1) 0s',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0
  },
  drawerTop: {
    paddingTop: 0
  },

  drawerOpen: {
    /*     transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }) */
  },
  drawerClose: {
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(7) + 8 //Probar en docker
    }
  },
  iconDisabled: {
    color: 'rgb(133 139 143)'
  },
  itemList: {
    display: 'flex',
    flexDirection: 'column'
  },
  colorModeContainer: {
    fontSize: '1rem'
  },
  drawerBottonContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    gap: '2rem',
    padding: '16px 16px'
  },
  socialContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '16px'
  }
}))

interface MyDrawerProps {
  marginTop: number
}

const MyDrawer: React.FC<MyDrawerProps> = ({ marginTop }) => {
  const classes = useStyles({ marginTop })

  const classesGlobal = useGlobalStyle()

  const [open, setOpen] = useState(true)

  const { user, logout } = useContext(UserContext)

  const { isDark, setIsDark } = useContext(ThemeContextDispatch)

  const scrollDirection = useObservable(watchScroll, 'Up')

  if (!user) return null

  return (
    <div
      /*       onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)} */
      className={clsx(classes.drawer, classesGlobal.scrollbarStyles, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open
        /*  [classes.drawerTop]: scrollDirection === 'Down' && 'hidden' */
      })}
    >
      <List className={classes.itemList}>
        {itemList.map((item, index) => (
          <div key={'item_' + index}>
            <CollapseButton item={item} drawerOpen={open} setDrawerOpen={setOpen} />
            <Divider />
          </div>
        ))}
      </List>

      <div>
        <Divider variant="middle" />
        <div className={classes.drawerBottonContainer}>
          <div className={classes.colorModeContainer}>
            {(open || isDark) && (
              <IconButton disableRipple disableFocusRipple onClick={() => setIsDark(false)}>
                <Icon classes={{ colorDisabled: classes.iconDisabled }} color={isDark ? 'disabled' : 'primary'}>
                  wb_sunny
                </Icon>
              </IconButton>
            )}
            {open && <a>/</a>}
            {(open || !isDark) && (
              <IconButton disableRipple disableFocusRipple onClick={() => setIsDark(true)}>
                <Icon classes={{ colorDisabled: classes.iconDisabled }} color={isDark ? 'primary' : 'disabled'}>
                  nightlight_round
                </Icon>
              </IconButton>
            )}
          </div>
          {open && (
            <div className={classes.socialContainer}>
              <IconButton
                disableRipple
                disableFocusRipple
                onClick={() => window.open('https://gitlab.com/liesa/middleware/webapp')}
              >
                <GitHubIcon />
              </IconButton>
              <IconButton color="primary" disableRipple disableFocusRipple>
                <TwitterIcon />
              </IconButton>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default MyDrawer
'
import MyDrawer from './menu/MyDrawer'

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
