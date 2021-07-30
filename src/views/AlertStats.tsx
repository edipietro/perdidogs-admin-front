import React, { useEffect, useState } from 'react'
import { makeStyles, Theme, createStyles, useTheme } from '@material-ui/core/styles'
import { useSnackbar } from 'notistack'
import Root from '../components/Root'
import { Path } from '../types/model/Path'
import esLocale from 'date-fns/locale/es'
import showError from '../utils/Erros'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import LoadingLinearProgress from '../components/LoadingLinearProgress'
import { Stat } from '../types/model/Stat'
import { stadisticService } from '../services/StadisticService'
import PieChart, { PieChartDataProps } from '../components/PieChart'
import randomColor from '../utils/randomColor'
import { Chart } from 'primereact/chart'
import BarChart, { BarChartDataProps } from '../components/BarChart'
import MyBox from '../components/MyStyledComponents/MyBox'
import DoughnutChart from '../components/DoughnutChart'

const AlertStats: React.FC = () => {
  const classes = useStyles()

  const [isLoading, setIsLoading] = useState(true)

  const [stats, setStats] = useState<Stat[]>([])

  const theme = useTheme()

  const { enqueueSnackbar } = useSnackbar()

  const chartDataForPie: PieChartDataProps = {
    labels: stats.map((stat) => stat.description),
    datasets: [
      {
        data: stats.map((stat) => stat.count),
        backgroundColor: ['#6cdceb', '#d470a0', '#42A5F5', '#66BB6A', '#FFA726', '#9070d4'],
        hoverBackgroundColor: ['#8cf1ff', '#faa5ce', '#64B5F6', '#81C784', '#FFB74D', '#c2a6ff']
      }
    ]
  }

  const chartDataForBar: BarChartDataProps = {
    labels: stats.map((stat) => stat.description),
    datasets: [
      {
        data: stats.map((stat) => stat.percent),
        backgroundColor: '#42A5F5',
        label: 'Hola'
      }
    ]
  }

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setStats([...(await stadisticService.calculateAlertLostBreeds())])
      } catch (error) {
        enqueueSnackbar(showError(error.message), { variant: 'error' })
      } finally {
        setIsLoading(false)
      }
    }
    fetchStats()
  }, [])

  const paths = [{ name: 'Estadisticas', icon: 'analytics' } as Path, { name: 'Razas perdidas', icon: 'pets' } as Path]

  return (
    <MuiPickersUtilsProvider locale={esLocale} utils={DateFnsUtils}>
      <Root paths={paths}>
        <LoadingLinearProgress isLoading={isLoading} />
        <MyBox className={classes.root}>
          <div className={classes.title}> Estadisticas de alertas </div>
          <div className={classes.chartsContainer}>
            <DoughnutChart chartData={chartDataForPie} />
            <BarChart chartData={chartDataForPie} />
          </div>
        </MyBox>
      </Root>
    </MuiPickersUtilsProvider>
  )
}

export default AlertStats

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
