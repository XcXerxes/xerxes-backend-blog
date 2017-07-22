<template>
  <el-form ref="loginForm" :model="loginForm" :rules="loginRules">
    <el-form-item prop="username">
      <el-input placeholder="请输入用户名" v-model="loginForm.username"></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input placeholder="请输入密码" v-model="loginForm.password" type="password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submit('loginForm')" :style="{width:'100%'}">登录</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [
          {required: true, message: '请输入用户名', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    submit (formName) {
      this.$refs[formName].validate((validated) => {
        if (validated) {
          this.$emit('login-submit', this.loginForm)
        } else {
          console.log('not submit')
        }
      })
    }
  }
}
</script>

<style>

</style>

