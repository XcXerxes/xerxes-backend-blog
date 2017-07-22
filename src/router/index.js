import Vue from 'vue'
import Router from 'vue-router'

const Login = (resolve) => require(['@/pages/Login'], resolve)
const Home = (resolve) => require(['@/pages/Home'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '/'
        }
      ]
    }
  ]
})
