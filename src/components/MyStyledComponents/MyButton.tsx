import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'
import { ButtonProps } from '@material-ui/core/Button'

const useStyles = makeStyles(() => ({
  button: {
    borderRadius: '16px',
    /* backgroundColor:  theme.palette.secondary.main, */
    outline: '0px',
    cursor: 'pointer',
    border: 'none',
    color: 'white',
    textTransform: 'none'
  }
}))

const MyButton: React.FC<ButtonProps> = (props) => {
  const classes = useStyles()

  return (
    <div>
      <Button
        disabled={props.disabled ? props.disabled : false}
        onClick={props.onClick}
        color={props.color ? props.color : 'secondary'}
        size="small"
        variant="contained"
        className={classes.button}
      >
        {props.children}
      </Button>
    </div>
  )
}

export default MyButton
