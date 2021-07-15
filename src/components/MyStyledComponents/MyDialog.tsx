import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '1rem'
  },
  dialog: {
    borderRadius: 12
  }
}))

interface DialogProps {
  open: boolean
  setOpen: (value: boolean) => void
  children: React.ReactNode
}

const MyDialog: React.FC<DialogProps> = (props) => {
  const classes = useStyles()

  const { setOpen, open, children } = props

  return (
    <Dialog onClose={() => setOpen(false)} open={open} classes={{ paper: classes.dialog }}>
      <div className={classes.root}>{children}</div>
    </Dialog>
  )
}

export default MyDialog
