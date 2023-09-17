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
    DELETE_TASK(state, id) {
      state.tarefas = state.tarefas.filter((tarefa) => tarefa.id !== id);
    },
    DELETE_COMPLETE_TASKS(state) {
      state.tarefas = state.tarefas.filter((tarefas) => !tarefas.completa);
    },
  },
  actions: {},
  modules: {},
});
