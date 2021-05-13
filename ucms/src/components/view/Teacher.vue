<template>
  Teacher
</template>

<script>
import router from "../../router";

export default {
  name: "Teacher",
  setup() {
    if (localStorage.getItem('role') !== 'teacher') {
      router.push({path: '/un-auth'});
      return;
    }
    return {};
  }
}
</script>

<style scoped>

</style>