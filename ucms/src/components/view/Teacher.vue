<template>
  <div>
    <el-row>
      <el-col :span="4">
        <el-row class="tac">
          <el-col :span="18">
            <h4>教师端</h4>
            <el-menu
                default-active="1"
                class="el-menu-vertical-demo">
              <el-menu-item
                  index="1"
                  @click="switchView(1)">
                <template #title>
                  <i class="el-icon-location"></i>
                  <span>查询课表</span>
                </template>
              </el-menu-item>
              <el-menu-item
                  index="2"
                  @click="switchView(2)">
                <template #title>
                  <i class="el-icon-menu"></i>
                  <span>申请开课</span>
                </template>
              </el-menu-item>
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
  name: "Teacher",
  setup() {
    if (localStorage.getItem('role') !== 'teacher') {
      router.push({path: '/un-auth'});
      return;
    }

    const switchView = (viewNumber: number) => {
      switch (viewNumber) {
        case 1:
          router.push({path: '/teacher/query-course-schedule'});
          break;
        case 2:
          router.push({path: '/teacher/apply-for-beginning-course'});
          break;
        default:
          break;
      }
      return;
    };

    return {
      switchView
    };
  }
}
</script>

<style scoped>

</style>