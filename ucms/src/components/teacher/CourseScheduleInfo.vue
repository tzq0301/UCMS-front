<template>
  <div>
    <el-descriptions class="margin-top" title="基本信息" :column="3" :size="''">
      <template #extra>
        <el-button type="primary" size="small" @click="returnQueryCourseSchedule">返回</el-button>
      </template>
      <el-descriptions-item label="课程名称">{{ info.title }}</el-descriptions-item>
      <el-descriptions-item label="课程学分">{{ info.credits }}</el-descriptions-item>
      <el-descriptions-item label="年级要求">{{ info.requiredGrade }}</el-descriptions-item>
      <el-descriptions-item label="课程类别">{{ info.courseType }}</el-descriptions-item>
      <el-descriptions-item label="开课时间">{{ info.year }} - {{ info.semester }}</el-descriptions-item>
      <el-descriptions-item label="上课地点">{{ info.building }} - {{ info.roomNumber }}</el-descriptions-item>
    </el-descriptions>
  </div>
  <h4>上课时间</h4>
  <div>
    <el-table
        :data="info.timeSlots"
        stripe
        style="width: 100%">
      <el-table-column
          prop="day"
          label="日期"
          width="120">
      </el-table-column>
      <el-table-column
          prop="startWeek"
          label="开课周"
          width="120">
      </el-table-column>
      <el-table-column
          prop="endWeek"
          label="结课周"
          width="120">
      </el-table-column>
      <el-table-column
          prop="startHr"
          label="上课时间（小时）"
          width="120">
      </el-table-column>
      <el-table-column
          prop="endHr"
          label="下课时间（小时）"
          width="120">
      </el-table-column>
      <el-table-column
          prop="startMin"
          label="上课时间（分钟）"
          width="120">
      </el-table-column>
      <el-table-column
          prop="endMin"
          label="下课时间（分钟）"
          width="120">
      </el-table-column>
    </el-table>
  </div>
  <h4>学生信息</h4>
  <div>
    <el-table
        :data="info.students"
        stripe
        style="width: 100%">
      <el-table-column
          prop="studentId"
          label="学生ID"
          width="120">
      </el-table-column>
      <el-table-column
          prop="name"
          label="学生姓名"
          width="120">
      </el-table-column>
      <el-table-column
          prop="deptName"
          label="学院名"
          width="120">
      </el-table-column>
      <el-table-column
          prop="enrollmentYear"
          label="入学年份"
          width="120">
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import {url} from "../../ts/strings";
import {useRoute} from "vue-router";
import {reactive} from "vue";
import TimeSlot from "../../ts/timeSlot";
import Result from "../../ts/result";
import router from "../../router";

export default {
  name: "CourseScheduleInfo",
  setup() {
    const info = reactive<Info>({
      title: '',
      credits: 0,
      requiredGrade: 0,
      courseType: '',
      courseId: '',
      secId: '',
      semester: '',
      year: 0,
      building: '',
      roomNumber: '',
      timeSlots: [],
      students: []
    });

    const {params: {courseId, secId, semester, year}} = useRoute();

    axios.get(url + '/teacher/querySpecificCourseInfo', {
      params: {
        courseId: courseId,
        secId: secId,
        semester: semester,
        year: year
      }
    }).then((response) => {
      const result: Result = response.data;
      info.title = result.data.title;
      info.credits = result.data.credits;
      info.requiredGrade = result.data.requiredGrade;
      info.courseType = result.data.courseType;
      info.courseId = result.data.courseId;
      info.secId = result.data.secId;
      info.semester = result.data.semester;
      info.year = result.data.year;
      info.building = result.data.building;
      info.roomNumber = result.data.roomNumber;
      result.data.timeSlots.forEach((day: string,
                                    startWeek: number, endWeek: number,
                                    startHr: number, endHr: number,
                                    startMin: number, endMin: number) => {
        info.timeSlots.push({
          day, startWeek, endWeek, startHr, endHr,
          startMin, endMin
        });
      });
      result.data.students.forEach((studentId: string, name: string,
                                    deptName: string, enrollmentYear: string) => {
        info.students.push({studentId, name, deptName, enrollmentYear});
      });
    });

    const returnQueryCourseSchedule: Function = () => {
      router.push({ path: '/teacher'})
      return;
    }

    return {
      info,
      returnQueryCourseSchedule
    }
  }
}

interface Info {
  title: string;
  credits: number;
  requiredGrade: number;
  courseType: string;
  courseId: string;
  secId: string;
  semester: string;
  year: number;
  building: string;
  roomNumber: string;
  timeSlots: Array<TimeSlot>;
  students: Array<Student>;
}

interface Student {
  studentId: string;
  name: string;
  deptName: string;
  enrollmentYear: string;
}
</script>

<style scoped>

</style>