<template>
<!--  查看所有教师信息-->
  <div class="container">
    <div class="content">
      <el-table
          :data="teachers"
          stripe
          style="width: 100%">
        <el-table-column
            prop="id"
            label="学工号"
            width="100">
        </el-table-column>
        <el-table-column
            prop="name"
            label="姓名"
            width="200">
        </el-table-column>
        <el-table-column
            prop="deptName"
            label="所在学院"
            width="200">
        </el-table-column>
        <el-table-column
            prop="salary"
            label="薪资"
            width="150">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script lang="ts">
import {reactive} from "vue";
import axios from "axios";
import {url} from "../../../ts/strings";
import Result, {checkValid} from "../../../ts/result";

export default {
  name: "AllTeachers",
  setup() {
    const teachers = reactive<Array<Teacher>>([]);

    const showCourses = () => {
      axios.get(url + '/manager/showTeacher').then((response) => {
        const result: Result = response.data;
        if (!checkValid(result)) {
          return;
        }
        result.data.forEach((teacher: Teacher) => {
          teachers.push(teacher);
        });
      });
    };

    showCourses();

    return {
      teachers
    }
  }
}

interface Teacher {
  id: string;
  name: string;
  deptName: string;
  salary: string;
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  width: 80%;
  margin: 3% auto;
}
</style>