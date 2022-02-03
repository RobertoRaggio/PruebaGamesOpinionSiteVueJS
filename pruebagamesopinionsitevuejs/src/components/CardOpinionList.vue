<template>
  <div>
    <h1>Lista de Opiniones</h1>
    <b-container class="alert alert-danger" role="alert">
      No existen opiniones por MOSTRAR
    </b-container>
    <b-container>
      <b-card
        v-for="opinion in opinions"
        v-bind:key="opinion.id"
        class="move-left"
        header-text-variant="primary"
        header-bg-variant="light"
      >
        <template #header>
          <p>
            Opinión creada por: {{ opinion.personName }}. Para el juego
            {{ opinion.gameName }}
          </p>
        </template>

        <b-card-text class="move-left">{{ opinion.opinion }}</b-card-text>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import opinions from "../data/opinions.json";

export default {
  name: "Opinions",
  props: {
    msg: String,
  },

  computed: {
    opinions() {
      return opinions.map((opinion) => {
        return opinion;
      });
    },
  },
};
</script>

<style scoped>
.alert {
  text-align: start;
}

.move-left {
  text-align: start;
}
</style>
