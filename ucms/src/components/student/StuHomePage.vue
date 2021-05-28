<template>
  <div class="container">
    <div class="content">
      <el-descriptions class="margin-top" :column="2" :size="''" border>
        <el-descriptions-item>
          <template #label>
            <i class="el-icon-user"></i>
            姓名
          </template>
          {{ studentInfo.name }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <i class="el-icon-mobile-phone"></i>
            学工号
          </template>
          {{ studentInfo.id }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <i class="el-icon-location-outline"></i>
            部门名
          </template>
          {{ studentInfo.deptName }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <i class="el-icon-tickets"></i>
            入学年份
          </template>
          {{ studentInfo.enrollmentYear }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <i class="el-icon-office-building"></i>
            已获得的总学分
          </template>
          {{ studentInfo.obtainedCredit }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <i class="el-icon-star-off"></i>
            需要获取的总学分
          </template>
          {{ studentInfo.requiredCredit }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <i class="el-icon-s-data"></i>
            绩点成绩
          </template>
          {{ studentInfo.gpa }}
        </el-descriptions-item>
      </el-descriptions>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import {url} from "../../ts/strings";
import {reactive} from "vue";
import Result from "../../ts/result";

export default {
  name: "StuHomePage",
  setup() {
    const studentInfo = reactive<StudentInfo>({
      name: '',
      id: '',
      deptName: '',
      enrollmentYear: '',
      obtainedCredit: '',
      requiredCredit: '',
      gpa: ''
    });

    axios.get(url + "/student/homePage", {
      params: {
        id: localStorage.getItem("ID")
      }
    }).then((response) => {
      const result: Result = response.data;
      if (result.code != 1) {
        alert("页面出错！")
        return;
      }
      studentInfo.name = result.data.name;
      studentInfo.id = localStorage.getItem("ID") || '';
      studentInfo.deptName = result.data.deptName;
      studentInfo.enrollmentYear = result.data.enrollmentYear;
      studentInfo.obtainedCredit = result.data.obtainedCredit;
      studentInfo.requiredCredit = result.data.requiredCredit;
      studentInfo.gpa = result.data.gpa;
    })

    return {
      studentInfo
    }
  }
}

interface StudentInfo {
  name: string;
  id: string;
  deptName: string;
  enrollmentYear: string;
  obtainedCredit: string;
  requiredCredit: string;
  gpa: string;
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