export type Data<T> = {
  pageNumber: number
  pageSize: number
  totalItem: number
  succeeded: boolean
  message: string
  errors: string
  data: T
}
