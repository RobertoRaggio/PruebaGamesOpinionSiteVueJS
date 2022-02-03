<template>
  <div>
    <h1>Administrando la Lista de Opiniones</h1>
    <b-container class="alert alert-danger move-left" role="alert">
      No existen opiniones por ADMINISTRAR
    </b-container>
    <b-container>
      <div class="row">
        <div class="col-md-12">
          <div class="table-responsive">
            <table class="table">
              <thead class="thead-dark">
                <tr class="move-left">
                  <th scope="col">#</th>
                  <th scope="col">Persona</th>
                  <th scope="col">Juego</th>
                  <th scope="col">Opinion</th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="move-left"
                  v-for="opinion in opinions"
                  v-bind:key="opinion.id"
                >
                  <th scope="row">{{ opinion.id }}</th>
                  <td>{{ opinion.personName }}</td>
                  <td>{{ opinion.gameName }}</td>
                  <td>{{ opinion.opinion }}</td>
                  <td><b-button variant="danger">Eliminar</b-button></td>
                  <td><b-button variant="primary">Editar</b-button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </b-container>
    <b-container v-for="(opinion, index) in opinions" v-bind:key="index">
      <h1>
        Editando la opinion de {{ opinion.gameName + " Index: " + index }}
      </h1>
      <h1>{{ singleUserOpinion(1) }}</h1>
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

  methods: {
    singleUserOpinion(indexOpinionData) {
      let userName = console.log(indexOpinionData);
    },
  },
};
</script>

<style scoped>
.move-left {
  text-align: start;
}
</style>
