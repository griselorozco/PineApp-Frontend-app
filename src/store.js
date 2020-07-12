/* eslint-disable */
import Vue from "vue";
import Vuex from "vuex";
import router from "@/router";

import {
  loginApi,
  getUserById,
  editUser,
  changeImage,
  seguirPerfil,
  saveCard,
  removeCard,
  getDinero
} from "@/api/modules";

const URL_IMG = "http://localhost:3004/public/upload";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    barColor: "rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)",
    barImage:
      "https://demos.creative-tim.com/material-dashboard-pro/assets/img/sidebar-1.jpg",
    drawer: null,
    token: "",
    usuario: "",
    perfil: "",
    rol: "",
    logueado: false,
    seguir: false,
    seguidos: [],
    seguidores: [],
    tarjetas: [],
    dinero: ""
  },
  getters: {
    usuarioGetter: state => state.usuario,
    perfilGetter: state => state.perfil,
    seguirGetter: state => state.seguir,
    seguidosGetter: state => state.seguidos,
    seguidoresGetter: state => state.seguidores,
    tarjetasGetter: state => state.tarjetas,
    dineroGetter: state => state.dinero
  },
  mutations: {
    obtener_usuario(state, payload) {
      state.token = payload;
      if (payload === "") {
        state.usuario = "";
        state.perfil = "";
        state.rol = "";
        state.token = "";
        state.logueado = false;
      } else {
        state.logueado = true;
        state.token = payload.token;
        state.usuario = payload.user;
        state.perfil = payload.perfil;
        state.rol = payload.rol;
      }
    },
    set_usuario(state, payload) {
      state.usuario = payload.perfil;
      // state.usuario.imagen = `${URL_IMG}/${payload.perfil.imagen}`;
    },
    set_seguir(state, payload) {
      state.seguir = payload;
    },
    set_seguidos(state, payload) {
      state.seguidos = payload;
    },
    set_seguidores(state, payload) {
      state.seguidores = payload;
    },
    set_tarjetas(state, payload) {
      state.tarjetas = payload;
    },
    add_tarjeta(state, payload) {
      state.tarjetas.push(payload);
    },
    remove_tarjeta(state, id) {
      let index = state.tarjetas.findIndex(index => index._id == id);
      state.tarjetas.splice(index, 1);
    },
    set_dinero(state, payload) {
      state.dinero = payload;
    },

    SET_BAR_IMAGE(state, payload) {
      state.barImage = payload;
    },
    SET_DRAWER(state, payload) {
      state.drawer = payload;
    },
    SET_SCRIM(state, payload) {
      state.barColor = payload;
    }
  },
  actions: {
    async login_action({ commit }, payload) {
      console.log(payload);
      const serviceResponse = await loginApi(payload);
      console.log(serviceResponse);
      if (serviceResponse.ok) {
        commit("obtener_usuario", serviceResponse);
        localStorage.setItem("token", serviceResponse.token);
        localStorage.setItem("rol", JSON.stringify(serviceResponse.rol));
        localStorage.setItem("perfil", JSON.stringify(serviceResponse.perfil));
        localStorage.setItem("logueado", true);
        router.push("/app");
        return serviceResponse;
      } else {
        return serviceResponse;
      }
    },
    logout_action({ commit }) {
      localStorage.clear();
      commit("obtener_usuario", "");
      router.push("/");
      return true;
    },
    leer_token({ commit }) {
      const token = localStorage.getItem("token");
      if (token) {
        const token = localStorage.getItem("token");
        const rol = JSON.parse(localStorage.getItem("rol"));
        // eslint-disable-next-line camelcase
        const perfil = JSON.parse(localStorage.getItem("perfil"));
        const payload = {
          rol: rol,
          perfil: perfil,
          token: token
        };
        commit("obtener_usuario", payload);
      } else {
        commit("obtener_usuario", "");
        router.push({ name: "Login" });
      }
    },
    async getUserByIdAction({ commit }, id) {
      const serviceResponse = await getUserById(id);
      console.log(serviceResponse);
      if (serviceResponse.ok) {
        commit("set_usuario", serviceResponse);
        commit("set_seguidos", serviceResponse.perfil.seguidos);
        commit("set_seguidores", serviceResponse.perfil.seguidores);
        commit("set_tarjetas", serviceResponse.perfil.tarjetas);
      } else {
        const params = { text: serviceResponse.message };
        window.getApp.$emit("SHOW_ERROR", params);
      }
    },
    async updatePerfil({ commit }, payload) {
      const serviceResponse = await editUser(payload.usuario_id, payload);
      console.log(serviceResponse);
      if (serviceResponse.ok) {
        commit("set_usuario", serviceResponse);
        return serviceResponse;
      } else {
        const params = { text: serviceResponse.message };
        window.getApp.$emit("SHOW_ERROR", params);
        return serviceResponse;
      }
    },
    async updateImagenPerfil({ commit }, payload) {
      const serviceResponse = await changeImage(payload);
      console.log(serviceResponse);
      if (serviceResponse.ok) {
        // commit("set_usuario", serviceResponse);
        return serviceResponse;
      } else {
        const params = { text: serviceResponse.message };
        window.getApp.$emit("SHOW_ERROR", params);
        return serviceResponse;
      }
    },
    async seguirPerfil({ commit }, payload) {
      const serviceResponse = await seguirPerfil(payload);
      if (serviceResponse) {
        if (serviceResponse.seguir) commit("set_seguir", true);
        else commit("set_seguir", false);
        return serviceResponse;
      } else {
        const params = { text: serviceResponse.message };
        window.getApp.$emit("SHOW_ERROR", params);
        return serviceResponse;
      }
    },
    async agregarTarjeta({ commit }, payload) {
      const serviceResponse = await saveCard(payload);
      if (serviceResponse.ok) {
        commit("add_tarjeta", serviceResponse.tarjeta);
        return serviceResponse;
      } else {
        const params = { text: serviceResponse.message };
        window.getApp.$emit("SHOW_ERROR", params);
        return serviceResponse;
      }
    },
    async eliminarTarjeta({ commit }, payload) {
      const serviceResponse = await removeCard(payload);
      if (serviceResponse.ok) {
        commit("remove_tarjeta", serviceResponse.tarjeta._id);
        return serviceResponse;
      } else {
        const params = { text: serviceResponse.message };
        window.getApp.$emit("SHOW_ERROR", params);
        return serviceResponse;
      }
    },
    async obtenerDinero({ commit }) {
      const serviceResponse = await getDinero();
      console.log(serviceResponse);
      if (serviceResponse.ok) {
        if (!serviceResponse.dinero) commit("set_dinero", 0);
        else commit("set_dinero", serviceResponse.dinero);
        return serviceResponse;
      } else {
        const params = { text: serviceResponse.message };
        window.getApp.$emit("SHOW_ERROR", params);
        return serviceResponse;
      }
    }
  }
});
