<template>
  <!--  <h1>培养方案 + 查看已结课课程成绩</h1>-->
  <div class="container">
    <div class="content">
      <el-descriptions :column="2" border>
        <el-descriptions-item>
          <template #label>
            <i class="el-icon-user"></i>
            学工号
          </template>
          {{ scheme.id }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <i class="el-icon-office-building"></i>
            学院名称
          </template>
          {{ scheme.deptName }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <i class="el-icon-collection"></i>
            总共的专业必修学分
          </template>
          {{ scheme.ttcompulsoryCredit }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <i class="el-icon-table-lamp"></i>
            现有的专业必修学分
          </template>
          {{ scheme.sccompulsoryCredit }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <i class="el-icon-mobile-phone"></i>
            总共的专业选修学分
          </template>
          {{ scheme.ttelectiveCredit }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <i class="el-icon-star-off"></i>
            现有的专业选修学分
          </template>
          {{ scheme.scelectiveCredit }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <i class="el-icon-location-outline"></i>
            总共的跨专业学分
          </template>
          {{ scheme.ttinterdisciplinaryElectiveCredit }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <i class="el-icon-s-data"></i>
            现有的跨专业学分
          </template>
          {{ scheme.scinterdisciplinaryElectiveCredit }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <i class="el-icon-tickets"></i>
            总共的公选课学分
          </template>
          {{ scheme.ttpublicElectiveCourse }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <i class="el-icon-s-order"></i>
            现有的公选课学分
          </template>
          {{ scheme.scpublicElectiveCourse }}
        </el-descriptions-item>
      </el-descriptions>
    </div>
  </div>
</template>

<script lang="ts">
import {reactive} from "vue";
import axios from "axios";
import {url} from "../../ts/strings";
import Result from "../../ts/result";

export default {
  name: "TrainingScheme",
  setup() {
    const scheme = reactive<TrainingScheme>({
      id: localStorage.getItem("ID") || '',
      deptName: '',
      ttcompulsoryCredit: '',
      ttelectiveCredit: '',
      ttinterdisciplinaryElectiveCredit: '',
      ttpublicElectiveCourse: '',
      sccompulsoryCredit: '',
      scelectiveCredit: '',
      scinterdisciplinaryElectiveCredit: '',
      scpublicElectiveCourse: ''
    })

    axios.get(url + '/student/trainingScheme', {
      params: {
        id: localStorage.getItem('ID')
      }
    }).then((response) => {
      const result: Result = response.data;
      if (result.code == 0) {
        alert("页面出错！")
        return;
      }
      scheme.deptName = result.data.deptName;
      scheme.ttcompulsoryCredit = result.data.ttcompulsoryCredit;
      scheme.ttelectiveCredit = result.data.ttelectiveCredit;
      scheme.ttinterdisciplinaryElectiveCredit = result.data.ttinterdisciplinaryElectiveCredit;
      scheme.ttpublicElectiveCourse = result.data.ttpublicElectiveCourse;
      scheme.sccompulsoryCredit = result.data.sccompulsoryCredit;
      scheme.scelectiveCredit = result.data.scelectiveCredit;
      scheme.scinterdisciplinaryElectiveCredit = result.data.scinterdisciplinaryElectiveCredit;
      scheme.scpublicElectiveCourse = result.data.scpublicElectiveCourse;
    })

    return {
      scheme
    }
  }
}

interface TrainingScheme {
  id: string;
  deptName: string;
  ttcompulsoryCredit: string;
  ttelectiveCredit: string;
  ttinterdisciplinaryElectiveCredit: string;
  ttpublicElectiveCourse: string;
  sccompulsoryCredit: string;
  scelectiveCredit: string;
  scinterdisciplinaryElectiveCredit: string;
  scpublicElectiveCourse: string;
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