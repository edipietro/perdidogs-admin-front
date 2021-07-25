import axios from "axios"
import { SERVER_URL } from "../config/Rest"
import { ActiveOverInactivePercent } from "../types/model/ActiveOverInactivePercent"
import { Alert } from "../types/model/Alert"
import { Filter } from "../types/model/Filter"
import { Post } from "../types/model/Post"
import { Stat } from "../types/model/Stat"
import { User } from "../types/model/User"

class StadisticService {
  axiosConfig = { timeout: 3000 }

  async porcentajeUsuariosActivosSobreInactivos(usersActive: User[], usersInactive: User[]): Promise<ActiveOverInactivePercent> { 
    return (await axios.put<ActiveOverInactivePercent>(`${SERVER_URL}/porcentajeUsuariosActivosSobreInactivos`, { usersActive, usersInactive }, this.axiosConfig)).data
  }

  async porcentajePostActivosSobreInactivos(usersActive: User[], usersInactive: User[]): Promise<ActiveOverInactivePercent> { 
    return (await axios.put<ActiveOverInactivePercent>(`${SERVER_URL}/porcentajeUsuariosActivosSobreInactivos`, { usersActive, usersInactive }, this.axiosConfig)).data
  }


  async calculateLostBreeds(postsActive: Post[], postsInactive:Post[]): Promise<ActiveOverInactivePercent>{ 
    return (await axios.put<ActiveOverInactivePercent>(`${SERVER_URL}/calculateLostBreeds`, { postsActive,postsInactive }, this.axiosConfig)).data
  }

  async porcentajeDeRazasPerdidas(postsActive: Post[], postsInactive:Post[]): Promise<ActiveOverInactivePercent>{ 
    return (await axios.put<ActiveOverInactivePercent>(`${SERVER_URL}/porcentajeDeRazasPerdidas`, { postsActive,postsInactive }, this.axiosConfig)).data
  }

  async porcentajeDeAlertasActivasSobreInactivas(activeAlert: Alert[], inactiveAlert:Alert[]): Promise<ActiveOverInactivePercent>{ 
    return (await axios.put<ActiveOverInactivePercent>(`${SERVER_URL}/porcentajeDeAlertasActivasSobreInactivas`, { activeAlert,inactiveAlert }, this.axiosConfig)).data
  }

}

export const stadisticService = new StadisticService()
