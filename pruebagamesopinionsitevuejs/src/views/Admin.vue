<template>
  <div class="admin">
    <h1>view: Admin.vue</h1>
    <CardAdminList />
  </div>
</template>

<script>
import CardAdminList from "@/components/CardAdminList.vue";

export default {
  components: {
    name: "CardAdminList",
    CardAdminList,
  },
};
</script>
