import { Breed } from './Breed'
import { FurLength } from './FurLength'
import { Size } from './Size'

export type Pet = {
  Id: number
  name: string
  sex: string
  hasCollar: boolean
  isActive: boolean
  furlength: FurLength
  size: Size
  breed: Breed
}
