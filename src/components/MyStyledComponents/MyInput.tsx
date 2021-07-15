import { makeStyles } from '@material-ui/core/styles'
import { InputHTMLAttributes } from 'react'

export const useStyles = makeStyles((theme) => ({
  input: {
    backgroundColor: theme.palette.primary.main,
    width: '100%',
    height: '40px',
    border: '0px',
    borderRadius: '16px',
    padding: '0px 16px',
    outline: '0px',
    color: 'white !important'
  }
}))

/* const MyInput = ({ placeholder, onChange, value, type, onKeyPress }) => {
 */
const MyInput: React.FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
  const classes = useStyles()
  return (
    <div /* className={classes.inputContainer} */>
      <input
        onKeyPress={(event) => (props.onKeyPress ? event.key : () => null)}
        type={props.type ? props.type : 'text'}
        className={classes.input}
        onChange={(event) => (props.onChange ? event.target.value : () => null)}
        value={props.value}
      />
    </div>
  )
}

export default MyInput
