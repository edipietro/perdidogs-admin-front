import { AlertStatus } from "./AlertStatus";
import { Pet } from "./Pet";
import { Post } from "./Post";
import { User } from "./User";

export type Alert = {
  Id: number
  owner: User
  pet:Pet
  creationDate:Date
  alertStatus: AlertStatus
  posibleAlerts:Post[]
  location:Location
}