import React from 'react'
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox'
import { withStyles } from '@material-ui/core/styles'

const PrimaryCheckBox = withStyles({
  root: {
    color: '#399ead',
    '&$checked': {
      color: '#399ead'
    }
  },
  checked: {}
})((props: CheckboxProps) => <Checkbox {...props} />)

const MyCheckBox: React.FC<CheckboxProps> = () => {
  return <PrimaryCheckBox />
}

export default MyCheckBox
