import React, { useEffect, useState } from 'react'
import { makeStyles, Theme, createStyles, useTheme } from '@material-ui/core/styles'
import { useSnackbar } from 'notistack'
import Root from '../components/Root'
import { Path } from '../types/model/Path'
import showError from '../utils/Erros'
import LoadingLinearProgress from '../components/LoadingLinearProgress'
import { stadisticService } from '../services/StadisticService'
import MyBox from '../components/MyStyledComponents/MyBox'
import { UserTableDTO } from '../types/model/UserTableDTO'

const UserTable: React.FC = () => {
  const classes = useStyles()

  const [isLoading, setIsLoading] = useState(true)

  const [data, setData] = useState<UserTableDTO[]>([])

  const theme = useTheme()

  const { enqueueSnackbar } = useSnackbar()

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setData([...(await stadisticService.userTable())])
      } catch (error) {
        console.log(error)
        enqueueSnackbar(showError(error), { variant: 'error' })
      } finally {
        setIsLoading(false)
      }
    }
    fetchStats()
  }, [])

  const paths = [{ name: 'Estadisticas', icon: 'analytics' } as Path, { name: 'Razas perdidas', icon: 'pets' } as Path]

  return (
    <Root paths={paths}>
      <LoadingLinearProgress isLoading={isLoading} />
      <MyBox className={classes.root}>
        <div className={classes.title}> Tabla </div>
        {console.log(data)}
        <div className={classes.chartsContainer}></div>
      </MyBox>
    </Root>
  )
}

export default UserTable

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      padding: 24,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%'
    },
    chartsContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      width: '100%'
    },
    title: {
      fontSize: 24,
      alignSelf: 'flex-start',
      marginBottom: 24
    }
  })
)
