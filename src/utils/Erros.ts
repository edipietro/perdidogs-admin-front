/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
export default function showError(error: any): string {
  //Response from backend server
  console.log(error.response)
  if (error.response) {
    if (error.response.data) {
      console.log(error.response.data)
      return 'No se pudo realizar la accion'
    }
  } else return 'No hay conexion con el servidor'
  return 'Error'
}
