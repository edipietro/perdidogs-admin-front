/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
export default function showError(error: any): string {
  console.log(error.response)
  //Response from backend server
  if (error.response) {
    if (error.response.data) return error.response.data
  } else return 'No hay conexion con el servidor'
  return 'Error'
}
