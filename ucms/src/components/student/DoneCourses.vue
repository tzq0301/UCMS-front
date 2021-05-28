<template>
  <div class="container">
    <div class="content">
      <el-table
          :data="doneCourses"
          stripe
          style="width: 100%">
        <el-table-column
            prop="title"
            label="课程名称"
            width="250">
        </el-table-column>
        <el-table-column
            prop="deptName"
            label="开课学院"
            width="150">
        </el-table-column>
        <el-table-column
            prop="credits"
            label="课程学分"
            width="120">
        </el-table-column>
        <el-table-column
            prop="courseType"
            label="课程类别"
            width="150">
        </el-table-column>
        <el-table-column
            prop="year"
            label="开课年份"
            width="120">
        </el-table-column>
        <el-table-column
            prop="semester"
            label="开课学期"
            width="120">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script lang="ts">
import {reactive} from "vue";
import axios from "axios";
import {url} from "../../ts/strings";
import Result from "../../ts/result";

export default {
  name: "DoneCourses",
  setup() {
    const doneCourses = reactive<Array<DoneCourse>>([])

    axios.get(url + '/student/doneCourses', {
      params: {
        id: localStorage.getItem("ID")
      }
    }).then((response) => {
      const result: Result = response.data;
      if (result.code == 0) {
        alert("页面出错！")
        return;
      }
      result.data.forEach((value: DoneCourse) => {
        doneCourses.push(value);
      });
    });

    return {
      doneCourses
    }
  }
}

interface DoneCourse {
  title: string;
  deptName: string;
  credits: string;
  courseType: string;
  semester: string;
  year: string;
  grade: string;
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
  margin: 10% auto;
}
</style>