<template>
  <el-form label-width="80px" id="box-in">
    <el-form-item label="账号">
      <el-input v-model="form.account"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="form.password" @key.enter="onLogin"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onLogin">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import {reactive} from 'vue';
import axios from 'axios';
import router from '../../router'
import Result from "../../ts/result";

class Form {
  account: string;
  password: string;

  constructor(account: string, password: string) {
    this.account = account;
    this.password = password;
  }
}

export default {
  name: "Login",
  setup() {
    const form = reactive(new Form('', ''));

    const onLogin = () => {
      if ('' === form.account) {
        alert('账号不能为空！');
        form.account = '';
        form.password = '';
        return;
      }

      if ('' === form.password) {
        alert('密码不能为空！');
        form.account = '';
        form.password = '';
        return;
      }

      axios.post(
          'http://localhost:8080/cums/login',
          form
      ).then((response) => {
        const result: Result = response.data;
        // 登陆失败，重新登录
        if (result.code === 0) {
          alert(result.message);
          form.account = '';
          form.password = '';
          return;
        }
        // 登录成功
        switch (result.data) {
          case 0:
            localStorage.setItem('role', 'student');
            router.push({path: '/student'});
            break;
          case 1:
            localStorage.setItem('role', 'teacher');
            router.push({path: '/teacher'});
            break;
          case 2:
            localStorage.setItem('role', 'manager');
            router.push({path: '/manager'});
            break;
          default:
            break;
        }
      });
    };

    return {
      form,
      onLogin
    };
  },
}
</script>

<style scoped>
#box-in {
  width: 30%;
  margin: 0 auto;
}
</style>