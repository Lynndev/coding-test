const state = {
  notifications: [],
};
const getters = {};

const mutations = {
  PUSH(state, notification) {
    state.notifications = notification;
  },
  DELETE(state) {
    state.notifications = [];
  },
};

const actions = {
  add({ commit }, notification) {
    commit("PUSH", notification);
  },
  remove({ commit }) {
    commit("DELETE");
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
