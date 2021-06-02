<template>
<!--  新建课程-->
  <div id="container">
    <el-form :model="ruleForm" status-icon label-width="100px">
      <el-form-item label="课程ID">
        <el-input v-model.trim="ruleForm.courseId" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="课程名称">
        <el-input v-model.trim="ruleForm.title" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="学院名称">
        <el-input v-model.trim="ruleForm.deptName" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="学分">
        <el-input v-model.trim="ruleForm.credits" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="所需年级限制">
        <el-input v-model.trim="ruleForm.requiredGrade" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="课程类别">
        <el-input v-model.trim="ruleForm.courseType" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm">提交</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import {reactive} from "vue";
import axios from "axios";
import {url} from "../../../ts/strings";
import Result from "../../../ts/result";

export default {
  name: "SaveNewCourse",
  setup() {
    const ruleForm =  reactive<RuleForm>({
      courseId: '',
      title: '',
      deptName: '',
      credits: '',
      requiredGrade: '',
      courseType: ''
    })

    const validate = () => {
      if (!Number.isInteger(ruleForm.credits)) {
        alert('学分必须是数字！');
        return false;
      }
      if (!Number.isInteger(ruleForm.requiredGrade)) {
        alert('所需年级要求必须是数字！');
        return false;
      }
      return true;
    }

    const submitForm = () => {
      if (!validate()) {
        return;
      }
      axios.get(url + '/manager/newCourse', {
        params: {
          courseId: ruleForm.courseId,
          title: ruleForm.title,
          courseType: ruleForm.courseType,
          credits: ruleForm.credits,
          deptName: ruleForm.deptName,
          requiredGrade: ruleForm.requiredGrade
        }
      }).then((response) => {
        const result: Result = response.data;
        if (result.code == 0) {
          alert('输入信息有误或者服务器出错！');
          return;
        } else if (result.code == 1) {
          alert('新建课程成功！');
          resetForm();
          return;
        }
      });
    };

    const resetForm = () => {
      ruleForm.courseId = '';
      ruleForm.title = '';
      ruleForm.deptName = '';
      ruleForm.credits = '';
      ruleForm.requiredGrade = '';
      ruleForm.courseType = '';
    }

    return {
      ruleForm,
      submitForm,
      resetForm
    }
  }
}

interface RuleForm {
  courseId: string;
  title: string;
  deptName: string;
  credits: string;
  requiredGrade: string;
  courseType: string;
}
</script>

<style lang="less" scoped>
#container {
  width: 40%;
  transform: translateX(15vw) translateY(10vh);
}
</style>