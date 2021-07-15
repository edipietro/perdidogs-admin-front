import { Post } from './Post'
import { Rol } from './Rol'

export type User = {
  Id: number
  email: string
  password: string
  posts: Post[]
  rol: Rol
}
