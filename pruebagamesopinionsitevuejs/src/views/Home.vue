<template>
  <div class="home">
    <h1>view: Home.vue</h1>
    <CardGamesList />
  </div>
</template>

<script>
import CardGamesList from "@/components/CardGamesList.vue";

export default {
  components: {
    name: "Home",
    CardGamesList,
  },
};
</script>
