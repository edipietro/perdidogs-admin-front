import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { Button, LinearProgress, useTheme } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import clsx from 'clsx'

import { useSnackbar } from 'notistack'
import UserContext from '../contexts/UserContext'
import { userService } from '../services/UserService'
import showError from '../utils/Erros'
import LoadingLinearProgress from '../components/LoadingLinearProgress'

const Login: React.FC = () => {
  const labelLight = '/labrador.png'

  const classes = useStyles()

  const history = useHistory()

  const { setUser } = useContext(UserContext)

  const [email, setUsername] = useState('')

  const [password, setPassword] = useState('')

  const [isLoading, setIsLoading] = useState(false)

  const { enqueueSnackbar } = useSnackbar()

  const theme = useTheme()

  const login = async () => {
    if (password.length < 8) {
      enqueueSnackbar('El email o la contraseña no son validos', { variant: 'error' })
    } else {
      try {
        setIsLoading(true)
        setUser(await userService.login(email, password))
        history.push('/')
      } catch (error) {
        console.log(error)
        enqueueSnackbar(showError(error), { variant: 'error' })
      }
      setIsLoading(false)
    }
  }

  return (
    <div className={classes.root}>
      <div className={classes.loadingContainer}>
        <LoadingLinearProgress isLoading={isLoading} />
        {/*   <LoadingLinearProgress isLoading={isLoading} /> */}
      </div>

      <div className={classes.midContent}>
        <img className={classes.logoLogin} src={labelLight} />
        <div className={classes.loginContainer}>
          <form className={classes.form} noValidate>
            <div>
              <input
                onChange={(event) => setUsername(event.target.value)}
                placeholder="Email"
                className={clsx(classes.input, classes.inputEmail)}
              />

              <input
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Contraseña"
                type="password"
                className={classes.input}
              />
            </div>
            {/*       <TextField
              variant="filled"
              margin="normal"
              required
              fullWidth
              id="user"
              label="Usuario"
              name="user"
              autoFocus
              onChange={(event) => setUsername(event.target.value)}
            />
            <TextField
              variant="filled"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(event) => setPassword(event.target.value)}
            /> */}
            <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Recordar" />

            <Button fullWidth variant="contained" color="primary" className={classes.submit} onClick={login}>
              Ingresar
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Olvido su contraseña?
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      background: 'linear-gradient(180deg, #FFE5B2 1.04%, #EFB865 100%)',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh'
    },
    loadingContainer: {
      position: 'absolute',
      top: 0,
      width: '100%'
    },
    midContent: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',

      width: '25vw'
    },
    loginContainer: {},
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1)
    },
    submit: {
      margin: theme.spacing(0, 0, 2)
    },

    logoLogin: {
      width: '60%'
    },
    input: {
      width: '100%',
      filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
      border: '1px solid #000000',
      borderRadius: 8,
      padding: 16,
      color: 'grey'
      /*  marginBottom: 16 */
    },
    inputEmail: {
      marginBottom: 16
    }
  })
)
