import { createStore } from "vuex";

export default createStore({
  state: {
    tarefas: [],
  },
  getters: {},
  mutations: {
    ADD_TASK(state, payload) {
      state.tarefas.push(payload);
    },
    COMPLETE_TASK(state, id) {
      state.tarefas.forEach((tarefa) => {
        if (tarefa.id === id) {
          tarefa.completa = !tarefa.completa;
        }
      });
    },
  },
  actions: {},
  modules: {},
});
