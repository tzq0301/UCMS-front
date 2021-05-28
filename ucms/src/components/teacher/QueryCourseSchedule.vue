<template>
  <div>
    <el-table
        :data="courseSchedules"
        stripe
        style="width: 100%">
      <el-table-column
          prop="title"
          label="课程名"
          width="120">
      </el-table-column>
      <el-table-column
          prop="credits"
          label="学分"
          width="120">
      </el-table-column>
      <el-table-column
          prop="courseType"
          label="课程类别"
          width="120">
      </el-table-column>
      <el-table-column
          prop="semester"
          label="开课学期"
          width="120">
      </el-table-column>
      <el-table-column
          prop="year"
          label="开课学年"
          width="120">
      </el-table-column>
      <el-table-column
          prop="building"
          label="上课地址"
          width="120">
      </el-table-column>
      <el-table-column
          prop="roomNumber"
          label="教室"
          width="120">
      </el-table-column>
      <el-table-column
          label="查看详细课程信息">
<!--        todo: 添加按钮          -->
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import {url} from "../../ts/strings";
import Result from "../../ts/result";
import {reactive} from "vue";

export default {
  name: "QueryCourseSchedule",
  setup() {
    const courseSchedules = reactive<CourseSchedule[]>([]);

    axios.get(url + '/teacher/queryCourseSchedule', {
      params: {
        id: localStorage.getItem("ID")
      }
    }).then((response) => {
      const result: Result = response.data;
      if (result.code === 0) {
        alert('请重试！');
        return;
      }
      result.data.courses.forEach((title: string, credits: number, courseType: string,
                                   courseId: string, secId: string, semester: string, year: number,
                                   building: string, roomNumber: string) => {
        courseSchedules.push({
          title: title,
          credits: credits,
          courseType: courseType,
          courseId: courseId,
          secId: secId,
          semester: semester,
          year: year,
          building: building,
          roomNumber: roomNumber
        });
      })
    });

    return {
      courseSchedules
    }
  }
}

interface CourseSchedule {
  title: string;
  credits: number;
  courseType: string;
  courseId: string;
  secId: string;
  semester: string;
  year: number;
  building: string;
  roomNumber: string;
}
</script>

<style scoped>

</style>