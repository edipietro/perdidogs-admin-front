
import { User } from "./User";

export type PostFilter = {

  breed: number
  user: User 
  ownerEmail: string
  createdFrom: Date
  createdTo: Date
  postStatus: number
  userStatus: number
}