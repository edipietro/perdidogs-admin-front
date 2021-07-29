import React from 'react'
import 'primeicons/primeicons.css'
/* import 'primereact/resources/themes/md-dark-indigo/theme.css' */
import 'primereact/resources/primereact.css'
import 'primeflex/primeflex.css'
import { Chart } from 'primereact/chart'
import { useTheme } from '@material-ui/core'

type PieChartProps = {
  chartData: PieChartDataProps
  title?: string
}

const PieChart: React.FC<PieChartProps> = ({ chartData, title }) => {
  const theme = useTheme()

  const lightOptions = {
    plugins: {
      title: {
        display: true && title,
        text: title,
        font: {
          size: 22
        },
        color: theme.palette.text.primary
      },
      legend: {
        labels: {
          color: theme.palette.text.secondary,
          font: {
            size: 16
          }
        },
        position: 'bottom'
      }
    }
  }

  return <Chart type="pie" data={chartData} options={lightOptions} style={{ position: 'relative', width: '33%' }} />
}

export default PieChart

export type PieChartDataProps = {
  labels: string[]
  datasets: PieDataSetProps[]
}

export type PieDataSetProps = {
  data: number[]
  backgroundColor: string[]
  hoverBackgroundColor: string[]
}
