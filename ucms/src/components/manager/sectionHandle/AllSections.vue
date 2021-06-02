<template>
<!--  查看所有课程段-->
  <div class="container">
    <div class="content">
      <el-table
          :data="sections"
          stripe
          style="width: 100%">
        <el-table-column
            prop="courseId"
            label="课程ID"
            width="100"
            fixed="left">
        </el-table-column>
        <el-table-column
            prop="secId"
            label="课程段ID"
            width="80">
        </el-table-column>
        <el-table-column
            prop="semester"
            label="开课季度"
            width="120">
        </el-table-column>
        <el-table-column
            prop="year"
            label="开课年份"
            width="100">
        </el-table-column>
        <el-table-column
            prop="building"
            label="上课地址"
            width="120">
        </el-table-column>
        <el-table-column
            prop="roomNumber"
            label="上课教室"
            width="120">
        </el-table-column>
        <el-table-column
            prop="maxCapacity"
            label="最大客容量"
            width="120">
        </el-table-column>
        <el-table-column
            prop="selectedNumber"
            label="已选人数"
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
  name: "AllSections",
  setup() {
    const sections = reactive<Array<Section>>([]);

    const showSections = () => {
      axios.get(url + '/manager/showSection').then((response) => {
        const result: Result = response.data;
        console.log(result);
        if (!checkValid(result)) {
          return;
        }
        result.data.forEach((section: Section) => {
          sections.push(section);
        });
      });
    };

    showSections();

    return {
      sections
    }
  }
}

interface Section {
  courseId: string;
  secId: string;
  semester: string;
  year: string;
  building: string;
  roomNumber: string;
  maxCapacity: string;
  selectedNumber: string;
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