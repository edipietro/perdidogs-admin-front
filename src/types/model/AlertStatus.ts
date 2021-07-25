import { Alert } from "./Alert";

export type AlertStatus = {
  
  Id: number
  description: string
  alerts: Alert[]
  creationDate: Date
  endDate: Date

}