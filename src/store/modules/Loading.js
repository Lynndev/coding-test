const state = {
  loading: false,
};
const getters = {};

const mutations = {
  CHANGE_LOADING(state) {
    state.loading = !state.loading;
  },
};

const actions = {};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
