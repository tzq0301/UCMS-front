<template>
  Student
</template>

<script>
import router from "../../router";

export default {
  name: "Student",
  setup() {
    if (localStorage.getItem('role') !== 'student') {
      router.push({path: '/un-auth'});
      return
    }
    return {}
  }
}
</script>

<style scoped>

</style>