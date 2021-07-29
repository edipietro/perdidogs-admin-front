import { Role } from './Role'

export type User = {
  Id: number
  email: string
  password: string
  role: Role
  firstName: string
  lastName: string
  avatar: string
}
