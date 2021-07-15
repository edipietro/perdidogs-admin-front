import { Picture } from './Picture'
import { User } from './User'
import { Comment } from './Comment'
import { Pet } from './Pet'
import { PostStatus } from './PostStatus'

export type Post = {
  Id: number
  owner: User
  title: string
  description: string
  creationDate: Date
  endDate: Date
  pictures: Picture[]
  comments: Comment[]
  location: Location
  pet: Pet
  postStatus:PostStatus
}
