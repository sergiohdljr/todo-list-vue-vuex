<template>
  <div class="Tarefa">
    <p :class="{ 'tarefa-completa': tarefa.completa }">{{ tarefa.tarefa }}</p>
    <div class="button-group">
      <button class="completar-task" @click="completarTarefa(tarefa.id)">
        &#10003;
      </button>
      <button class="deletar-task" @click="deletarTarefa(tarefa.id)">
        &#x2715;
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tarefa: Object,
  },
  data() {
    return {};
  },
  methods: {
    completarTarefa(id) {
      this.$store.commit("COMPLETE_TASK", id);
    },
    deletarTarefa(id) {
      this.$store.commit("DELETE_TASK", id);
    },
  },
};
</script>

<style scoped>
.Tarefa {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: whitesmoke;
  color: black;
}

p {
  padding-left: 0.6rem;
  font-size: 1.2rem;
}

.tarefa-completa {
  text-decoration: line-through;
  opacity: 60%;
}

.button-group {
  height: 100%;
}

button {
  border: none;
  height: 100%;
  width: 40px;
  font-size: 1.2rem;
  cursor: pointer;
}

.completar-task {
  background-color: greenyellow;
}

.deletar-task {
  background-color: tomato;
}
</style>
