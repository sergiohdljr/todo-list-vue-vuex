import { createStore } from "vuex";

export default createStore({
  state: {
    tarefas: [{ id: 1, tarefa: "tarefa teste", completa: true }],
  },
  getters: {},
  mutations: {
    ADD_TASK(state, payload) {
      state.tarefas.push(payload);
    },
  },
  actions: {},
  modules: {},
});
