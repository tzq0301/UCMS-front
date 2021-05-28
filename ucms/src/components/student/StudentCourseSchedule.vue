<template>
  <!--  <h1>学生本学期课表 + 退课</h1>-->
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
            width="120"
            fixed="left">
        </el-table-column>
        <el-table-column
            prop="secId"
            label="课程段ID"
            width="100">
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
            prop="instructors"
            label="授课教师"
            width="120">
        </el-table-column>
        <el-table-column
            prop="year"
            label="开课年份"
            width="100">
        </el-table-column>
        <el-table-column
            prop="semester"
            label="开课学期"
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
        <el-table-column
            prop="building"
            label="上课地址"
            width="120">
        </el-table-column>
        <el-table-column
            prop="roomNumber"
            label="上课教室"
            width="100">
        </el-table-column>
        <el-table-column
            prop="timeSlot"
            label="时间段"
            width="180">
        </el-table-column>
        <el-table-column
            fixed="right"
            label="操作"
            width="60">
          <template #default="scope">
            <el-popconfirm
                title="确认退课"
                confirm-button-text="确认退课"
                @confirm="deleteCourse(scope.row)"
                cancel-button-text="取消退课">
              <template #reference>
                <el-button type="text" size="medium">退课</el-button>
              </template>
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script lang="ts">
import {reactive, ref} from "vue";
import axios from "axios";
import {url} from "../../ts/strings";
import Result from "../../ts/result";
import {ElMessage} from "element-plus";

export default {
  name: "StudentCourseSchedule",
  setup() {
    const courses = reactive<Array<DoneCourse>>([]);
    const totalCredit = ref<string>('');

    const getCourseSchedule = () => {
      axios.get(url + '/student/selectedScheme', {
        params: {
          id: localStorage.getItem("ID")
        }
      }).then((response) => {
        const result: Result = response.data;
        if (result.code == 0) {
          alert("查询出错！");
          return;
        } else if (result.code == 2) {
          alert("未查询到结果！");
          return;
        }
        result.data.courses.forEach((course: DoneCourse) => {
          courses.push(course);
        });
        totalCredit.value = result.data.totalCredit;
      })
    };

    getCourseSchedule();

    const deleteCourse = (row: DoneCourse) => {
      axios.delete(url + '/student/cancelCourse', {
        params: {
          id: localStorage.getItem("ID"),
          courseId: row.courseId,
          secId: row.secId,
          semester: row.semester,
          year: row.year
        }
      }).then((response) => {
        const result: Result = response.data;
        if (result.code == 1) {
          ElMessage.success({message: "退课成功！", type: "success"});
        } else {
          ElMessage.error("退课失败 TAT");
        }
        courses.splice(0, courses.length);
        getCourseSchedule();
      })
    };

    return {
      courses,
      totalCredit,
      deleteCourse
    };
  }
}

interface DoneCourse {
  courseId: string;
  secId: string;
  semester: string;
  year: string;
  title: string;
  deptName: string;
  credits: string;
  requiredGrade: string;
  courseType: string;
  building: string;
  roomNumber: string;
  timeSlot: string;
  instructors: string;
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