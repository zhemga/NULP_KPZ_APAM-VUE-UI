import Vuex from 'vuex';

const store = new Vuex.Store({
  state: {
    isLoading: false,
  },
  mutations: {
    startLoading(state) {
      state.isLoading = true;
    },
    stopLoading(state) {
      state.isLoading = false;
    },
  },
  actions: {
    startLoading({ commit }) {
      commit('startLoading');
    },
    stopLoading({ commit }) {
      commit('stopLoading');
    },
  },
});

export default store;