<template>
  <div class="notfound">
    <h1>view: NotFound.vue</h1>
    <CardNotFound />
  </div>
</template>

<script>
import CardNotFound from "@/components/CardNotFound.vue";

export default {
  components: {
    name: "NotFound",
    CardNotFound,
  },
};
</script>
