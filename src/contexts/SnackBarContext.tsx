import React from 'react'
import { SnackbarProvider } from 'notistack'
import Grow from '@material-ui/core/Grow'
import { TransitionProps } from '@material-ui/core/transitions'

function GrowTransition(props: TransitionProps) {
  return <Grow {...props} />
}

const SnackBarProvider: React.FC = ({ children }) => {
  return (
    <SnackbarProvider
      maxSnack={5}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right'
      }}
      TransitionComponent={GrowTransition}
    >
      {children}
    </SnackbarProvider>
  )
}
export default SnackBarProvider
