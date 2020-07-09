import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    carrinho: [],
  },
  mutations: {
    setCarrinho(state, payload) {
      state.carrinho = payload;
    },
  },
});