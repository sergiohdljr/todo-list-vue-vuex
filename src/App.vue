<template>
  <img alt="Vue logo" src="./assets/logo.png" width="100" />
  <div>
    <div class="container-tarefas">
      <div>
        <p>tarefas completas: {{ doneTodosCount }}</p>
        <p>total de tarefas: {{ totalOfTasks }}</p>
      </div>

      <InputButtonAdd />
      <p v-if="this.$store.getters.ErrorForm">{{ errorForm }}</p>
      <filters />
      <Task
        v-if="this.$store.state.tarefas.length > 0"
        v-for="tarefa in this.$store.state.tarefas"
        :tarefa="tarefa"
      />
      <p v-else>Nenhuma tarefa registrada ainda.</p>
    </div>
  </div>
</template>

<script>
import InputButtonAdd from "./components/Input-button-add.vue";
import Task from "./components/task.vue";
import filters from "./components/filters.vue";

export default {
  name: "App",
  components: {
    InputButtonAdd,
    Task,
    filters,
  },
  computed: {
    doneTodosCount() {
      return this.$store.getters.doneTodosCount;
    },
    totalOfTasks() {
      return this.$store.getters.numberOfTasks;
    },
    errorForm() {
      return this.$store.getters.ErrorForm;
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.container-tarefas {
  width: 60%;
  min-width: 400px;
  height: auto;
}
</style>
