import { Post } from "./Post";
import { User } from "./User";

export type Comment = {
  Id: number
  creation: Date
  text: string
  post: Post
  owner: User
}