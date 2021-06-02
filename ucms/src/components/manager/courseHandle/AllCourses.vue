<template>
<!--  查看所有课程-->
  <div class="container">
    <div class="content">
      <el-table
          :data="courses"
          stripe
          style="width: 100%">
        <el-table-column
            prop="courseId"
            label="课程ID"
            width="100"
            fixed="left">
        </el-table-column>
        <el-table-column
            prop="title"
            label="课程名称"
            width="240"
            fixed="left">
        </el-table-column>
        <el-table-column
            prop="deptName"
            label="开课学院"
            width="120">
        </el-table-column>
        <el-table-column
            prop="credits"
            label="课程学分"
            width="100">
        </el-table-column>
        <el-table-column
            prop="requiredGrade"
            label="所需年级限制"
            width="120">
        </el-table-column>
        <el-table-column
            prop="courseType"
            label="课程类别"
            width="120">
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
  name: "AllCourses",
  setup() {
    const courses = reactive<Array<Course>>([]);

    const showCourses = () => {
      axios.get(url + '/manager/showCourse').then((response) => {
        const result: Result = response.data;
        if (!checkValid(result)) {
          return;
        }
        result.data.forEach((course: Course) => {
          courses.push(course);
        });
      });
    };

    showCourses();

    return {
      courses
    }
  }
}

interface Course {
  courseId: string;
  title: string;
  deptName: string;
  credits: string;
  requiredGrade: string;
  courseType: string;
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