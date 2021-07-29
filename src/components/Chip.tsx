import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import { PostStatus } from '../types/model/PostStatus'

type ChipProps = {
  status: PostStatus
}

const Chip: React.FC<ChipProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = (
  props
) => {
  const { status, className, ...otherProps } = props

  const classes = useStyles(status)

  return <div className={clsx(className, classes.chip)}>{status.description}</div>
}

export default Chip

const useStyles = makeStyles((theme) => ({
  chip: {
    backgroundColor: (status: PostStatus) => {
      if (status.Id == 1) return 'green'
      else if (status.Id == 2) return 'red'
      else if (status.Id == 3) return 'yellow'
    },
    borderRadius: 6,
    padding: '16px', //El top tendria que conicidor con el margenTop/paddingTop del menu
    justifySelf: 'center',
    alignSelf: 'center',
    display: 'flex',
    boxShadow: '0px 0px 20px rgb(0 0 0 / 10%)'
  }
}))
