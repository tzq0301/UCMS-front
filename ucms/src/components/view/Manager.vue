<template>
  <div>
    <el-row>
      <el-col :span="4">
        <el-row class="tac">
          <el-col :span="18">
            <h4>管理员端</h4>
            <el-menu
                default-active="1"
                class="el-menu-vertical-demo">
              <router-link to="/manager/all-courses">
                <el-menu-item index="1">
                  <template #title>
                    <i class="el-icon-location"></i>
                    <span>课程管理</span>
                  </template>
                </el-menu-item>
              </router-link>
              <router-link to="/manager/all-sections">
                <el-menu-item index="2">
                  <template #title>
                    <i class="el-icon-date"></i>
                    <span>课程段管理</span>
                  </template>
                </el-menu-item>
              </router-link>
              <router-link to="/manager/all-students">
                <el-menu-item index="3">
                  <template #title>
                    <i class="el-icon-s-promotion"></i>
                    <span>学生管理</span>
                  </template>
                </el-menu-item>
              </router-link>
              <router-link to="/manager/all-teachers">
                <el-menu-item index="4">
                  <template #title>
                    <i class="el-icon-document-remove"></i>
                    <span>教师管理</span>
                  </template>
                </el-menu-item>
              </router-link>
              <router-link to="/manager/teacher-apply">
                <el-menu-item index="4">
                  <template #title>
                    <i class="el-icon-menu"></i>
                    <span>授课申请管理</span>
                  </template>
                </el-menu-item>
              </router-link>
            </el-menu>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="20">
        <router-view/>
      </el-col>
    </el-row>
  </div>
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

    router.push({path: '/manager/all-courses'})

    return {}
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}

.router-link-active {
  text-decoration: none;
}
</style>