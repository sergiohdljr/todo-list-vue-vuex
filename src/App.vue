<template>
  <img alt="Vue logo" src="./assets/logo.png" width="100" />
  <div>
    <div class="container-tarefas">
      <InputButtonAdd />
      <Task v-for="tarefa in this.$store.state.tarefas" :tarefa="tarefa" />
    </div>
  </div>
</template>

<script>
import InputButtonAdd from "./components/Input-button-add.vue";
import Task from "./components/task.vue";

export default {
  name: "App",
  components: {
    InputButtonAdd,
    Task,
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
