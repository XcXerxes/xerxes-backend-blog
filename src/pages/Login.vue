<template>
  <section class="login-warpper">
    <div class="mask"></div>
    <div class="login-content animated bounceInDown">
      <div class="login-content__heading">
        <h2>后台博客系统</h2>
      </div>
      <login-form v-on:login-submit="loginSubmit"></login-form>
    </div>
  </section>
</template>
<script>
  import loginForm from '@/components/Login/login-form'
  import {setCookie} from '@/utils'
  import md5 from 'blueimp-md5'
  import api from '@/api'

  export default {
    methods: {
      loginSubmit (loginForm) {
        console.log(loginForm)
        api.login(Object.assign(loginForm, {
          password: md5(loginForm.password)
        })).then(data => {
          console.log(data)
          if (data.code === 200) {
            this.$message({
              type: 'success',
              message: data.message
            })
            this.$router.push('/user')
            setCookie('xc_token', data.data)
          } else if (data.code === -500) {

          } else {
            this.$message.error(data.message)
          }
        }).catch(err => {
          this.$message.error(err)
        })
      }
    },
    components: {
      loginForm
    }
  }
</script>
<style lang="scss">
  .login-warpper {
    height: inherit;
    background: url('../assets/images/bankend-bg.jpg') no-repeat;
    background-size: cover;

    @at-root {
      .login-content {
        position: absolute;
        top: 30%;
        left: 50%;
        width: 460px;
        background: rgba(255, 255, 255, .6);
        border-radius: 5px;
        margin-left: -230px;
        box-sizing: border-box;
        z-index: 100;
        padding: 20px 40px;
      }
      .login-content__heading {
        margin-bottom: 20px;
        padding: 10px 0;
        >h2 {
          text-align: center;
          font-size: 1.5rem;
          text-shadow: 3px 2px 1px #b5b5b5;
          font-weight: 700;
          color: #000;
        }
      }
    }
  }
</style>
