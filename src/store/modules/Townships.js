import Townships from "./../../services/Townships";

const state = {
  townships: [],
};
const getters = {};
const mutations = {
  SET_TOWNSHIPS(state, townships) {
    state.townships = townships.data;
    console.log(state.townships);
  },
};

const actions = {
  getTownships({ commit }) {
    Townships.getTownships().then((townships) => {
      commit("SET_TOWNSHIPS", townships);
      console.log(townships);
    });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
