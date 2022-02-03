<template>
  <div class="home">
    <h1>view: Home.vue</h1>
    <CardGames />
  </div>
</template>

<script>
import CardGames from "@/components/CardGames.vue";

export default {
  components: {
    name: "Home",
    CardGames,
  },
};
</script>
