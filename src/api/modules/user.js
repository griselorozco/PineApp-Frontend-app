import { apiHttp } from "../axiosApi.js";
import {
  userPath,
  userSave,
  loginPath,
  userImage,
  seguir
} from "../config/apiRoute.js";

export const createUser = body => apiHttp("POST", `${userSave}`, body);

export const editUser = (userId, body) =>
  apiHttp("PUT", `${userSave}/${userId}`, body);

export const changeImage = body => apiHttp("POST", `${userImage}`, body);

export const getUserById = id => apiHttp("GET", `${userSave}/${id}`);

export const getUsers = () => apiHttp("GET", `${userPath}`);

export const seguirPerfil = id => apiHttp("GET", `${seguir}/${id}`);

export const loginApi = body => {
  return apiHttp("POST", `${loginPath}`, body);
};

export const consultarDinero = () => {
  return apiHttp("GET", `dinero`);
};
