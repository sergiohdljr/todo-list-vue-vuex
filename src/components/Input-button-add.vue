<template>
  <form @submit.prevent="adicionarTarefa">
    <input type="text" v-model="tarefa" />
    <button type="submit">Adicionar tarefa</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      tarefa: "",
    };
  },
  methods: {
    adicionarTarefa() {
      const objetoTarefa = {
        id: Math.random(),
        tarefa: this.tarefa,
        completa: false,
      };

      if (!this.tarefa) {
        this.$store.commit("FORM_ERROR");
        return;
      }

      this.$store.commit("ADD_TASK", objetoTarefa);
      this.tarefa = "";
      this.$store.commit("CLEAR_ERRORS_FORM");
    },
  },
};
</script>

<style scoped>
form {
  width: 100%;
  height: 40px;
  display: flex;
  align-items: stretch;
  margin-bottom: 1.5rem;
}

input {
  display: flex;
  flex-grow: 1;
  font-size: 1.2rem;
  padding-left: 0.6rem;
}

button {
  all: none;
  color: black;
  font-size: 1rem;
  cursor: pointer;
}
</style>
