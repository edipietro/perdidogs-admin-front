import axios from 'axios'
import { SERVER_URL } from '../config/Rest'
import { User } from '../types/model/User'
 
class UserService {
  axiosConfig = { timeout: 3000 }
 

  async login(email: string, password: string): Promise<User> {
    return (await axios.put<User>(`${SERVER_URL}/user/login`, { email, password }, this.axiosConfig)).data
  }

  async forgotPassword(email: string): Promise<any> {
    return (await axios.put<User>(`${SERVER_URL}/user/forgot-password`, { email }, this.axiosConfig)).data
  }

 async changePasswordWithToken(email:string,token: number, newPassword:string):Promise<User> {
  return (await axios.put<User>(`${SERVER_URL}/user/changePasswordWithToken`, { email,token,newPassword }, this.axiosConfig)).data
 }
}

export const userService = new UserService()
