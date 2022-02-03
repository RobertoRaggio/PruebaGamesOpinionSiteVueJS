<template>
  <div>
    <section v-for="game in games" v-bind:key="game.id">
      <b-card class="to-left" no-body style="max-width: 20rem">
        <img v-bind:src="game.background_image" />
        <b-card-body>
          <b-card-title>{{ game.name }}</b-card-title>
        </b-card-body>
        <b-list-group flush>
          <b-list-group-item>Rating: {{ game.rating }}</b-list-group-item>
          <b-list-group-item>Released: {{ game.released }}</b-list-group-item>
          <b-list-group-item>Updated: {{ game.updated }}</b-list-group-item>
        </b-list-group>
        <b-card-body class="to-center">
          <b-button variant="primary">Opinar</b-button>
        </b-card-body>
      </b-card>
    </section>
  </div>
</template>

<script>
import games from "../data/games.json";

export default {
  name: "Games",
  props: {
    msg: String,
  },

  computed: {
    games() {
      return games.map((game) => {
        return game;
      });
    },
  },
};
</script>
<style>
.to-left {
  text-align: start;
}
.to-center {
  text-align: center;
}
</style>
