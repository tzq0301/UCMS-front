<template>
  <div>
    <el-row>
      <el-col :span="4">
        <el-row class="tac">
          <el-col :span="18">
            <h4>学生端</h4>
            <el-menu
                default-active="1"
                class="el-menu-vertical-demo">
              <router-link to="/student/stu-home-page">
                <el-menu-item index="1">
                  <template #title>
                    <i class="el-icon-location"></i>
                    <span>主页</span>
                  </template>
                </el-menu-item>
              </router-link>
              <router-link to="/student/select-course">
                <el-menu-item index="2">
                  <template #title>
                    <i class="el-icon-s-promotion"></i>
                    <span>选课</span>
                  </template>
                </el-menu-item>
              </router-link>
              <router-link to="/student/course-scheme">
                <el-menu-item index="3">
                  <template #title>
                    <i class="el-icon-document-remove"></i>
                    <span>本学期课表</span>
                  </template>
                </el-menu-item>
              </router-link>
              <router-link to="/student/training-scheme">
                <el-menu-item index="4">
                  <template #title>
                    <i class="el-icon-menu"></i>
                    <span>培养计划</span>
                  </template>
                </el-menu-item>
              </router-link>
              <router-link to="/student/done-courses">
                <el-menu-item index="5">
                  <template #title>
                    <i class="el-icon-house"></i>
                    <span>综合成绩</span>
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

<script lang="ts">
import router from "../../router";

export default {
  name: "Student",
  setup() {
    if (localStorage.getItem('role') !== 'student') {
      router.push({path: '/un-auth'});
      return;
    }

    router.push({path: '/student/stu-home-page'});

    return {};
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