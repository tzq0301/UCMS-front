<template>
  <!--  <h1>查看所有可选课程 + 选课</h1>-->
  <div class="container">
    <div class="content">
      <div>
        <div class="inputs">
          <el-row :gutter="30">
            <el-col :span="6">
              <el-input
                  placeholder="教师姓名"
                  v-model="instructorName"
                  clearable>
              </el-input>
            </el-col>
            <el-col :span="6">
              <el-input
                  placeholder="学院名称"
                  v-model="departmentName"
                  clearable>
              </el-input>
            </el-col>
            <el-col :span="6">
              <el-input
                  placeholder="课程名称"
                  v-model="courseName"
                  clearable>
              </el-input>
            </el-col>
            <el-col :span="6">
              <el-button type="primary" @click="selectCourses">检索课程</el-button>
            </el-col>
          </el-row>
        </div>
      </div>
      <br>
      <br>
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
            prop="maxCapacity"
            label="最大课容量"
            width="100">
        </el-table-column>
        <el-table-column
            prop="selectedNumber"
            label="已选人数"
            width="100">
        </el-table-column>
        <el-table-column
            prop="teachers"
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
                title="确认选课"
                confirm-button-text="确认选课"
                @confirm="insertCourse(scope.row)"
                cancel-button-text="取消选课">
              <template #reference>
                <el-button type="text" size="medium">选课</el-button>
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
  name: "SelectCourse",
  setup() {
    const courses = reactive<Array<SelectableCourse>>([])
    const instructorName = ref<string>('');
    const departmentName = ref<string>('');
    const courseName = ref<string>('');

    const getInfo = (courses: any, name?: string, deptName?: string, title?: string) => {
      // console.log(name, deptName, title);
      axios.get(url + '/student/allCourse', {
        params: {name: name, deptName: deptName, title: title}
      }).then((response) => {
        const result: Result = response.data;
        if (result.code == 0) {
          alert("页面异常！");
          return;
        } else if (result.code == 2) {
          alert("未查询到相关记录！");
          return;
        }
        courses.splice(0, courses.length);
        result.data.forEach((value: SelectableCourse) => {
          courses.push(value);
        })
      })
    };

    getInfo(courses);

    const selectCourses = () => {
      getInfo(courses, instructorName.value, departmentName.value, courseName.value);
    };

    const insertCourse = (row: SelectableCourse) => {
      axios.post(url + '/student/selectCourse', {}, {
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
          ElMessage.success({message: "选课成功！", type: "success"})
        } else {
          ElMessage.error("选课失败 TAT");
        }
      });
    };

    return {
      courses,
      instructorName,
      departmentName,
      courseName,
      selectCourses,
      insertCourse
    }
  }
}

interface SelectableCourse {
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
  maxCapacity: string;
  selectedNumber: string;
  teachers: string;
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

.inputs {
  width: 100%;
}
</style>