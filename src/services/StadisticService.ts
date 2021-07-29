import axios from 'axios'
import { SERVER_URL_ADMIN } from '../config/Rest'
import { ActiveOverInactivePercent } from '../types/model/ActiveOverInactivePercent'
import { Stat } from '../types/model/Stat'

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

  async calculateLostBreeds(): Promise<Stat[]> {
    return (await axios.put<Stat[]>(`${SERVER_URL_ADMIN}/stats/calculateLostBreeds`, {}, this.axiosConfig)).data
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
