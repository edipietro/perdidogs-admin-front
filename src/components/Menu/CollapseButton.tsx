import React, { MouseEventHandler, useEffect } from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import { Icon } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

interface CollapseButtonProps {
  item: Item
  drawerOpen: boolean
  setDrawerOpen: (drawerOpen: boolean) => void
}

interface Item {
  readonly label: string
  readonly logo: string
  readonly ruta: string
  readonly children: ItemChildren[]
  readonly open: boolean
}

interface ItemChildren {
  readonly label: string
  readonly ruta: string
  readonly icon: string
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper
    },
    nested: {
      paddingLeft: theme.spacing(4)
    },
    itemLogo: {
      width: '25px',
      height: '25px'
    },
    itemButton: {
      padding: '5px 8px',
      minWidth: 50
    },
    ListItemIcon: {
      minWidth: 45
    },
    label: {
      fontSize: '1rem'
      /* color: theme.palette.primary.main */
    },
    icon: {
      color: theme.palette.primary.main
    }
  })
)
const CollapseButton: React.FC<CollapseButtonProps> = ({ item, drawerOpen, setDrawerOpen }) => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const history = useHistory()

  const handleClick = () => {
    setOpen(!open)
  }

  /* const handleRoute = (route:string):MouseEventHandler<HTMLDivElement> => history.push(route)
   */
  useEffect(() => {
    open ? setDrawerOpen(open) : null
  }, [open])

  return (
    <List className={classes.root}>
      <ListItem className={classes.itemButton} button onClick={handleClick}>
        <ListItemIcon className={classes.itemButton}>
          <img className={classes.itemLogo} src={item.logo} />
        </ListItemIcon>
        <ListItemText disableTypography className={classes.label} primary={item.label} />
        {open && drawerOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open && drawerOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {item.children.map((children, index) => (
            <ListItem
              key={'children_' + index}
              onClick={() => history.push(item.ruta + children.ruta)}
              button
              className={classes.nested}
            >
              <ListItemIcon className={classes.ListItemIcon}>
                <Icon className={classes.icon}>{children.icon}</Icon>
              </ListItemIcon>
              <ListItemText disableTypography primary={children.label} />
            </ListItem>
          ))}
        </List>
      </Collapse>
    </List>
  )
}

export default CollapseButton
