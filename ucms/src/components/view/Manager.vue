<template>
  <div>
    <el-row>
      <el-col :span="5">
        <el-row class="tac">
          <el-col :span="18">
            <h4>管理员端</h4>
            <el-menu
                default-active="1"
                class="el-menu-vertical-demo"
                unique-opened>
              <el-submenu index="1">
                <template #title>
                  <i class="el-icon-location"></i>
                  <span>课程管理</span>
                </template>
                <router-link to="/manager/all-courses">
                  <el-menu-item index="1-1">
                    查看全部课程
                  </el-menu-item>
                </router-link>
                <router-link to="/manager/save-new-course">
                  <el-menu-item index="1-2">
                    新增课程
                  </el-menu-item>
                </router-link>
                <router-link to="/manager/remove-course">
                  <el-menu-item index="1-3">
                    删除课程
                  </el-menu-item>
                </router-link>
              </el-submenu>

              <el-submenu index="2">
                <template #title>
                  <i class="el-icon-date"></i>
                  <span>学生管理</span>
                </template>
                <router-link to="/manager/all-students">
                  <el-menu-item index="2-1">
                    查看所有学生信息
                  </el-menu-item>
                </router-link>
                <router-link to="/manager/save-new-student">
                  <el-menu-item index="2-2">
                    新建学生信息
                  </el-menu-item>
                </router-link>
                <router-link to="/manager/remove-student">
                  <el-menu-item index="2-3">
                    删除学生信息
                  </el-menu-item>
                </router-link>
                <router-link to="/manager/let-student-join-course">
                  <el-menu-item index="2-4">
                    令学生加入课程
                  </el-menu-item>
                </router-link>
                <router-link to="/manager/let-student-leave-course">
                  <el-menu-item index="2-5">
                    令学生退出课程
                  </el-menu-item>
                </router-link>
              </el-submenu>

              <el-submenu index="3">
                <template #title>
                  <i class="el-icon-s-promotion"></i>
                  <span>教师管理</span>
                </template>
                <router-link to="/manager/all-teachers">
                  <el-menu-item index="3-1">
                    查看所有教师信息
                  </el-menu-item>
                </router-link>
                <router-link to="/manager/save-new-teacher">
                  <el-menu-item index="3-2">
                    新建教师信息
                  </el-menu-item>
                </router-link>
                <router-link to="/manager/remove-teacher">
                  <el-menu-item index="3-3">
                    删除教师信息
                  </el-menu-item>
                </router-link>
                <router-link to="/manager/add-section-to-teacher">
                  <el-menu-item index="3-4">
                    分配课程段
                  </el-menu-item>
                </router-link>
                <router-link to="/manager/remove-section-of-teacher">
                  <el-menu-item index="3-5">
                    取消分配课程段
                  </el-menu-item>
                </router-link>
              </el-submenu>

              <el-submenu index="4">
                <template #title>
                  <i class="el-icon-document-remove"></i>
                  <span>课程段管理</span>
                </template>
                <router-link to="/manager/all-sections">
                  <el-menu-item index="4-1">
                    查看所有课程段
                  </el-menu-item>
                </router-link>
                <router-link to="/manager/save-new-section">
                  <el-menu-item index="4-2">
                    新建课程段
                  </el-menu-item>
                </router-link>
                <router-link to="/manager/remove-section">
                  <el-menu-item index="4-3">
                    删除课程段
                  </el-menu-item>
                </router-link>
              </el-submenu>

              <el-submenu index="5">
                <template #title>
                  <i class="el-icon-menu"></i>
                  <span>授课申请管理</span>
                </template>
                <router-link to="/manager/apply">
                  <el-menu-item index="5-1">
                    查看授课申请
                  </el-menu-item>
                </router-link>
              </el-submenu>
            </el-menu>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="19">
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