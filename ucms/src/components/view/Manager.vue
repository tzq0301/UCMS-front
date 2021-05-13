<template>
  Manager
</template>

<script>
import router from "../../router";

export default {
  name: "Manager",
  setup() {
    if (localStorage.getItem('role') !== 'manager') {
      router.push({path: '/un-auth'});
      return
    }
    return {}
  }
}
</script>

<style scoped>

</style>