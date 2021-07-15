import { LinearProgress } from '@material-ui/core'
import React from 'react'

interface LoadingLinearProgressProps {
  isLoading: boolean
}

const LoadingLinearProgress: React.FC<LoadingLinearProgressProps> = ({ isLoading }) => {
  return isLoading ? <LinearProgress /> : <div style={{ marginTop: 4 }}></div>
}

export default LoadingLinearProgress
