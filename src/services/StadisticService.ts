import axios from 'axios'
import { SERVER_URL_ADMIN } from '../config/Rest'
import { ActiveOverInactivePercent } from '../types/model/ActiveOverInactivePercent'
import { Stat } from '../types/model/Stat'
import { UserTableDTO } from '../types/model/UserTableDTO'

class StadisticService {
  axiosConfig = { timeout: 3000 }

  async porcentajeUsuariosActivosSobreInactivos(): Promise<ActiveOverInactivePercent> {
    return (
      await axios.put<ActiveOverInactivePercent>(
        `${SERVER_URL_ADMIN}/stats/porcentajeUsuariosActivosSobreInactivos`,
        {},
        this.axiosConfig
      )
    ).data
  }

  async porcentajePostActivosSobreInactivos(): Promise<ActiveOverInactivePercent> {
    return (
      await axios.put<ActiveOverInactivePercent>(
        `${SERVER_URL_ADMIN}/stats/porcentajeUsuariosActivosSobreInactivos`,
        {},
        this.axiosConfig
      )
    ).data
  }

  async calculatePostLostBreeds(): Promise<Stat[]> {
    return (await axios.put<Stat[]>(`${SERVER_URL_ADMIN}/stats/calculatePostLostBreeds`, {}, this.axiosConfig)).data
  }

  async calculateAlertLostBreeds(): Promise<Stat[]> {
    return (await axios.put<Stat[]>(`${SERVER_URL_ADMIN}/stats/calculateAlertLostBreeds`, {}, this.axiosConfig)).data
  }

  async calculatePostStatus(): Promise<Stat[]> {
    return (await axios.put<Stat[]>(`${SERVER_URL_ADMIN}/stats/calculatePostStatus`, {}, this.axiosConfig)).data
  }

  async porcentajeDeRazasPerdidas(): Promise<ActiveOverInactivePercent> {
    return (
      await axios.put<ActiveOverInactivePercent>(
        `${SERVER_URL_ADMIN}/stats/porcentajeDeRazasPerdidas`,
        {},
        this.axiosConfig
      )
    ).data
  }

  async userTable(): Promise<UserTableDTO[]> {
    console.log((await axios.put<UserTableDTO[]>(`${SERVER_URL_ADMIN}/stats/statFalopa`, this.axiosConfig)).data)
    return (await axios.put<UserTableDTO[]>(`${SERVER_URL_ADMIN}/stats/statFalopa`, this.axiosConfig)).data
  }

  async porcentajeDeAlertasActivasSobreInactivas(): Promise<ActiveOverInactivePercent> {
    return (
      await axios.put<ActiveOverInactivePercent>(
        `${SERVER_URL_ADMIN}/stats/porcentajeDeAlertasActivasSobreInactivas`,
        {},
        this.axiosConfig
      )
    ).data
  }
}

export const stadisticService = new StadisticService()
