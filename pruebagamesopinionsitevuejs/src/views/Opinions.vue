<template>
  <div class="opinions">
    <h1>view: Opinions.vue</h1>
    <CardOpinionList />
  </div>
</template>

<script>
import CardOpinionList from "@/components/CardOpinionList.vue";

export default {
  components: {
    name: "CardOpinionList",
    CardOpinionList,
  },
};
</script>
