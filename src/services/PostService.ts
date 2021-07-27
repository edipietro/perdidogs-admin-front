import axios from 'axios'
import { SERVER_URL_ADMIN } from '../config/Rest'
import { Filter } from '../types/model/Filter'
import { Post } from '../types/model/Post'
import { PostFilter } from '../types/model/PostFilter'

class PostService {
  axiosConfig = { timeout: 3000 }

  async get(id: number): Promise<Post> {
    return (await axios.get<Post>(`${SERVER_URL_ADMIN}/post/${id}`, this.axiosConfig)).data
  }

  async getPostsByUserId(userId: number): Promise<Post[]> {
    return (await axios.get<Post[]>(`${SERVER_URL_ADMIN}/post/${userId}`, this.axiosConfig)).data
  }

  async rejectPost(idPost: number, idUser: number): Promise<Post> {
    return (await axios.put<Post>(`${SERVER_URL_ADMIN}/rejectAPost/${idPost}/${idUser}`, this.axiosConfig)).data
  }

  async aceptPost(idPost: number, idUser: number): Promise<Post> {
    return (await axios.put<Post>(`${SERVER_URL_ADMIN}/aceptAPost/${idPost}/${idUser}`, this.axiosConfig)).data
  }

  async filterPosts(filter: PostFilter): Promise<Post[]> {
    return (await axios.put<Post[]>(`${SERVER_URL_ADMIN}/by-admin-filter`, { filter }, this.axiosConfig)).data
  }

  async getPostsByFilter(filter: Filter): Promise<Post[]> {
    return (await axios.put<Post[]>(`${SERVER_URL_ADMIN}/filterPosts`, filter, this.axiosConfig)).data
  }
}

export const postService = new PostService()
