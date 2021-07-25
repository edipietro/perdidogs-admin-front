import axios from 'axios'
import { SERVER_URL } from '../config/Rest'
import { Post } from '../types/model/Post'
import { PostFilter } from '../types/model/PostFilter'

class PostService {
  axiosConfig = { timeout: 3000 }

  async get(id: number): Promise<Post> {
    return (await axios.get<Post>(`${SERVER_URL}/post/${id}`, this.axiosConfig)).data
  }

  async getPostsByUserId(userId: number): Promise<Post[]> {
    return (await axios.get<Post[]>(`${SERVER_URL}/post/${userId}`, this.axiosConfig)).data
  }

  async rejectPost(idPost: number, idUser: number): Promise<Post> {
    return (await axios.put<Post>(`${SERVER_URL}/rejectAPost/${idPost}/${idUser}`, this.axiosConfig)).data
  }
 
  async aceptPost(idPost: number, idUser: number): Promise<Post> {
    return (await axios.put<Post>(`${SERVER_URL}/aceptAPost/${idPost}/${idUser}`, this.axiosConfig)).data
  }
  
  async filterPosts(filter: PostFilter): Promise<Post[]>{
    return (await axios.put<Post[]>(`${SERVER_URL}/by-admin-filter`, this.axiosConfig)).data
  }

}

export const postService = new PostService()