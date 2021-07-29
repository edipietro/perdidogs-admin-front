import React from 'react'
import 'primeicons/primeicons.css'
/* import 'primereact/resources/themes/md-dark-indigo/theme.css' */
import 'primereact/resources/primereact.css'
import 'primeflex/primeflex.css'
import { Chart } from 'primereact/chart'
import { useTheme } from '@material-ui/core'

type BarChartProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  chartData: any
  title?: string
}

const BarChart: React.FC<BarChartProps> = ({ chartData, title }) => {
  const theme = useTheme()

  const options = {
    maintainAspectRatio: false,
    aspectRatio: 0.8,
    plugins: {
      title: {
        display: true && title,
        text: title,
        font: {
          size: 22
        },
        color: theme.palette.text.primary
      },
      legend: false
    },
    scales: {
      x: {
        ticks: {
          color: theme.palette.text.primary
        },
        grid: {
          color: theme.palette.type === 'dark' ? theme.palette.grey.A700 : theme.palette.grey[300]
        }
      },
      y: {
        grid: {
          color: theme.palette.type === 'dark' ? theme.palette.grey.A700 : theme.palette.grey[300]
        }
      }
    }
  }

  return <Chart type="bar" data={chartData} options={options} style={{ position: 'relative', width: '50%' }} />
}

export default BarChart

export type BarChartDataProps = {
  labels: string[]
  datasets: BarDataSetProps[]
}

export type BarDataSetProps = {
  label: string
  backgroundColor: string
  data: number[]
}
