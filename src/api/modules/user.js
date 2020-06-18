import { apiHttp } from '../axiosApi.js'
import {

  userPath, userSave, loginPath,

} from '../config/apiRoute.js'

export const createUsers = (body) =>
  apiHttp('POST', `${userSave}`, body)

export const editUsers = (userId, body) =>
  apiHttp('PUT', `${userSave}/${userId}`, body)

export const getUsers = () =>
  apiHttp('GET', `${userPath}`)

export const loginApi = ({ user, password }) => {
    return apiHttp('POST', `${loginPath}`, { user, password })
  }
