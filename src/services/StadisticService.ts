export type StadisticService = {
 
  async porcentajeUsuariosActivosSobreInactivos(usersActive: User[], usersInactive: User[]): ActiveOverInactivePercent {
    return (await axios.put<User>(`${SERVER_URL}/user/login`, { email, password }, this.axiosConfig)).data
  }


}