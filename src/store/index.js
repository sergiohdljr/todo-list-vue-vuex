import { createStore } from "vuex";

export default createStore({
  state: {
    tarefas: [],
  },
  getters: {},
  mutations: {
    ADD_TASK(state, payload) {
      state.tarefas.push(payload);
      console.log(...state.tarefas);
    },
  },
  actions: {},
  modules: {},
});
