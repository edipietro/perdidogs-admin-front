import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date'
import { User } from './User'

export type Filter = {
  breed?: number
  ownerEmail?: string
  createdFrom?: MaterialUiPickersDate
  createdTo?: MaterialUiPickersDate
  postStatus?: number
}
