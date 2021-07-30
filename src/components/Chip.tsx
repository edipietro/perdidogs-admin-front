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

  return (
    <div style={{ display: 'flex' }}>
      <div className={clsx(className, classes.chip)}>{status.description}</div>
    </div>
  )
}

export default Chip

const useStyles = makeStyles((theme) => ({
  chip: {
    backgroundColor: (status: PostStatus) => {
      if (status.Id == 1) return '#2AA763'
      else if (status.Id == 2) return '#BF1A1A'
      else if (status.Id == 3) return '#8F9A0D'
      else if (status.Id == 4) return theme.palette.primary.main
    },
    color: 'white',
    borderRadius: 12,
    padding: '6px 8px', //El top tendria que conicidor con el margenTop/paddingTop del menu
    /*     justifySelf: 'center',
    alignSelf: 'center', */
    /*   display: 'flex', */
    boxShadow: '0px 0px 20px rgb(0 0 0 / 10%)'
  }
}))
