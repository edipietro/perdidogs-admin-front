import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      borderStyle: 'solid',
      borderColor: theme.palette.primary.main,
      borderWidth: 1,
      boxShadow: 'none'
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1
    },
    iconButton: {
      padding: 10
    }
  })
)

const MySearchBar: React.FC = () => {
  const classes = useStyles()

  return (
    <Paper component="form" className={classes.root}>
      <InputBase className={classes.input} placeholder="Buscar categoria" />
      <IconButton color="primary" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}

export default MySearchBar
