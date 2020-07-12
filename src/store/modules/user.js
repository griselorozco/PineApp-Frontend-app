import { GET_USER } from "../mutation-types";

import { getUserById } from "@/api/modules";

const initialState = {
  found_user: {}
};

const state = {
  ...initialState
};

const getters = {
  found_user: state => state.found_user
};

const mutations = {
  [GET_USER]: (state, payload) => {
    state.found_user = payload.user;
  }
};
const actions = {
  async getUserByIdAction({ commit }, id) {
    const serviceResponse = await getUserById(id);
    console.log(serviceResponse);
    if (serviceResponse.ok) {
      commit(GET_USER, serviceResponse);
    } else {
      const params = { text: serviceResponse.message };
      window.getApp.$emit("SHOW_ERROR", params);
    }
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
