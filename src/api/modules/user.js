import { apiHttp } from '../axiosApi.js'
import {

  userPath, userSave, loginPath,

} from '../config/apiRoute.js'

export const createUser = (body) =>
  apiHttp('POST', `${userSave}`, body)

export const editUser = (userId, body) =>
  apiHttp('PUT', `${userSave}/${userId}`, body)

export const getUsers = () =>
  apiHttp('GET', `${userPath}`)

export const loginApi = (body) => {
    return apiHttp('POST', `${loginPath}`, body)
  }
