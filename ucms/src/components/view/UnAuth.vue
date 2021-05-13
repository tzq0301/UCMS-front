<template>
  <el-col :sm="12" :lg="6">
    <el-result icon="error" title="未登录" subTitle="请根据提示进行登录操作">
      <template #extra>
        <el-button type="primary" size="medium" @click="returnToLogin">返回</el-button>
      </template>
    </el-result>
  </el-col>
</template>

<script>
import router from "../../router";

export default {
  name: "UnAuth",
  setup() {
    const returnToLogin = () => {
      router.push({path: '/un-auth'});
    }
    return {
      returnToLogin
    }
  }
}
</script>

<style scoped>

</style>