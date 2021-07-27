import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { UserContext } from '../contexts/UserContext'
import Divider from '@material-ui/core/Divider'
import MyBreadcrumbs from './MyStyledComponents/MyBreadcrumbs'
import { Path } from '../types/componenets/Path'

const appBarHeight = 75

const useStyles = makeStyles((theme) => ({
  root: {
    display: ' flex',
    flexDirection: 'column',
    /* justifyContent: 'center',
    alignItems: 'center', */
    zIndex: 1,
    width: '100%',
    backgroundColor: theme.palette.background.default,
    marginLeft: 260,
    marginTop: appBarHeight,
    padding: 16,
    gap: 16,
    flexFlow: 'column'
  },
  tittle: {
    fontWeight: 600,
    fontSize: 22,
    paddingBottom: 8
  }
}))

interface RootProps extends React.HTMLAttributes<HTMLDivElement> {
  tittle: string
  paths?: Path[]
}

const Root: React.FC<RootProps> = (props) => {
  const classes = useStyles()

  const { tittle, paths, children, ...otherprops } = props

  const { user } = useContext(UserContext)

  if (!user) return null

  return (
    <div className={classes.root}>
      <MyBreadcrumbs paths={paths} />
      <Divider />
      <div>
        {/*   <div className={classes.tittle}> {tittle}</div> */}
        <div {...otherprops}>{children}</div>
      </div>
    </div>
  )
}

export default Root
