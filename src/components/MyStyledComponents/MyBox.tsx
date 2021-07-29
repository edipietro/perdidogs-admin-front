import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

const Box: React.FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = (props) => {
  const classes = useStyles()

  const { className, children } = props

  return <div className={clsx(className, classes.box)}>{children}</div>
}

export default Box

const useStyles = makeStyles((theme) => ({
  box: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: 6,
    padding: '16px', //El top tendria que conicidor con el margenTop/paddingTop del menu
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    boxShadow: '0px 0px 20px rgb(0 0 0 / 10%)'
  }
}))
