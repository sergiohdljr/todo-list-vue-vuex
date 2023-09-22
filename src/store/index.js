import { createStore } from "vuex";

export default createStore({
  state: {
    tarefas: [],
    formErros: [],
  },
  getters: {
    doneTodosCount(state) {
      return state.tarefas.filter((tarefa) => tarefa.completa).length;
    },
    numberOfTasks(state) {
      return state.tarefas.length;
    },
    ErrorForm(state) {
      if (state.formErros.length === 0) {
        return false;
      }
      return state.formErros[0];
    },
  },
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
    FORM_ERROR(state) {
      state.formErros.push("O campo não poder estar em branco.");
    },
    CLEAR_ERRORS_FORM(state) {
      state.formErros = [];
    },
  },
  actions: {},
  modules: {},
});
