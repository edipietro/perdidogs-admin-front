import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Paper, { PaperProps } from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import { DividerProps, StandardProps } from '@material-ui/core'
import clsx from 'clsx'

type MySearchProps = {
  placeholder: string
  search: string | undefined
  setSearch: (search: string) => void
  onClick: () => void
}

const MySearchBar: React.FC<MySearchProps & PaperProps> = (props) => {
  const { onClick, placeholder, search, setSearch, className, ...otherProps } = props

  const classes = useStyles()

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      onClick()
    }
  }

  return (
    <Paper {...otherProps} component="form" className={clsx(classes.root, className)}>
      <InputBase
        className={classes.input}
        value={search}
        spellCheck={false}
        autoComplete="email-address"
        /*  style={{ padding: 8 }} */
        onSubmit={() => console.log('hola')}
        onKeyPress={handleKeyPress}
        onChange={(event) => setSearch(event.currentTarget.value)}
        /*  onKeyPress={handleKeyPress} */
        placeholder={placeholder}
      />
      <IconButton onClick={onClick} color="primary" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}

export default MySearchBar

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      /*  alignItems: 'center', */
      /*  borderStyle: 'solid', */
      /*   alignSelf: 'center', */
      backgroundColor: theme.palette.background.default,
      borderColor: theme.palette.primary.main,
      borderWidth: 1,
      boxShadow: 'none',
      borderRadius: 12
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
