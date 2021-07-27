import axios from 'axios'
import { SERVER_URL_ADMIN } from '../config/Rest'
import { User } from '../types/model/User'

class UserService {
  axiosConfig = { timeout: 3000 }

  async login(email: string, password: string): Promise<User> {
    return (await axios.put<User>(`${SERVER_URL_ADMIN}/login`, { email, password }, this.axiosConfig)).data
  }

  /*   async forgotPassword(email: string): Promise<any> {
    return (await axios.put<User>(`${SERVER_URL_ADMIN}/user/forgot-password`, { email }, this.axiosConfig)).data
  } */

  /*   async changePasswordWithToken(email: string, token: number, newPassword: string): Promise<User> {
    return (
      await axios.put<User>(
        `${SERVER_URL_ADMIN}/user/changePasswordWithToken`,
        { email, token, newPassword },
        this.axiosConfig
      )
    ).data
  } */

  /*   async getByUsername(keyword: string): Promise<User[]> {
    return (await axios.put<User[]>(`${SERVER_URL_ADMIN}/user/byUsername`, { keyword }, this.axiosConfig)).data
  } */
}

export const userService = new UserService()
