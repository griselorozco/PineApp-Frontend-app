import { apiHttp } from '../axiosApi.js'
import {

    publicacionSave,mostrarPublicaciones,darLike,obtenerPublicacion,comentar,elimarComentario,editarPublicacion,
    obtenerPublicacionesUsuario

} from '../config/apiRoute.js'

export const createPublicacion= (body) =>
  apiHttp('POST', `${publicacionSave}`, body)
  
export const realizarComentario= (body,publicacionId) =>
  apiHttp('POST', `${comentar}/${publicacionId}`, body)
  
export const destroyComentario= (publicacionId,comentarioId) =>
  apiHttp('GET', `${elimarComentario}/${publicacionId}/${comentarioId}`)

  export const getPublicaciones = () =>
  apiHttp('GET', `${mostrarPublicaciones}`)
  
  export const getPublicacionesUser = () =>
  apiHttp('GET', `${ obtenerPublicacionesUsuario}`)

  export const like = (publicacionId) =>
  apiHttp('PUT', `${darLike}/${publicacionId}`)

  export const editPublicacion = (publicacionId) =>
  apiHttp('GET', `${editarPublicacion}/${publicacionId}`)

  export const updatePublicacion = (publicacionId,body) =>
  apiHttp('PUT', `${editarPublicacion}/${publicacionId}`,body)

  export const getPublicacion = (publicacionId) =>
  apiHttp('GET', `${obtenerPublicacion}/${publicacionId}`)



