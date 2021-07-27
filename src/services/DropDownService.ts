import axios from 'axios'
import { SERVER_URL } from '../config/Rest'
import { Breed } from '../types/model/Breed'
import { Color } from '../types/model/Color'
import { FurLength } from '../types/model/FurLength'
import { Size } from '../types/model/Size'

class DropDownService {
  async getAllBreeds(): Promise<Breed[]> {
    return (await axios.get<Breed[]>(`${SERVER_URL}/dropdown/breeds`)).data
  }

  async getAllColors(): Promise<Color[]> {
    return (await axios.get<Color[]>(`${SERVER_URL}/dropdown/colors`)).data
  }

  async getAllSizes(): Promise<Size[]> {
    return (await axios.get<Size[]>(`${SERVER_URL}/dropdown/sizes`)).data
  }

  async getAllLengths(): Promise<FurLength[]> {
    return (await axios.get<FurLength[]>(`${SERVER_URL}/dropdown/lengths`)).data
  }
}

const dropDownService = new DropDownService()

export default dropDownService
