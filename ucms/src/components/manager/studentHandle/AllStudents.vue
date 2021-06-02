<template>
<!--  查看所有学生信息-->
  <div class="container">
    <div class="content">
      <el-table
          :data="students"
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
            prop="enrollmentYear"
            label="入学年份"
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
  name: "AllStudents",
  setup() {
    const students = reactive<Array<Student>>([]);

    const showStudents = () => {
      axios.get(url + '/manager/showStudent').then((response) => {
        const result: Result = response.data;
        if (!checkValid(result))
          return;
        result.data.forEach((student: Student) => {
          students.push(student);
        });
      });
    };

    showStudents()

    return {
      students
    };
  }
}

interface Student {
  id: string;
  name: string;
  deptName: string;
  enrollmentYear: string;
}
</script>

<style lang="less" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;

  .content {
    width: 80%;
    margin: 3% auto;
  }
}
</style>