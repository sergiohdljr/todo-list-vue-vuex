<template>
  <img alt="Vue logo" src="./assets/logo.png" width="100"/>
  <div>
    <input type="text" v-model="tarefa" />
    <button @click="adicionarTarefa">Adicionar tarefa</button>
    <div class="container-tarefas">
      <p v-for="tarefa in this.$store.state.tarefas">
        {{ tarefa.tarefa }} - completa: {{ tarefa.completa }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      id: 1,
      tarefa: "",
    };
  },
  methods: {
    adicionarTarefa() {
      const objetoTarefa = {
        id: this.id,
        tarefa: this.tarefa,
        completa: false,
      };
      this.$store.commit("ADD_TASK", objetoTarefa);
    },
  },
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
