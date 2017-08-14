import Vue from 'vue'
import Router from 'vue-router'

const Login = (resolve) => require(['@/pages/Login'], resolve)
const Home = (resolve) => require(['@/pages/Home'], resolve)
const UserList = (resolve) => require(['@/pages/user/user-list'], resolve)
const CateList = (resolve) => require(['@/pages/cate/cate-list'], resolve)
const CateAdd = (resolve) => require(['@/pages/cate/cate-add'], resolve)
const CateView = (resolve) => require(['@/pages/cate/cate-view'], resolve)
const CateEdit = (resolve) => require(['@/pages/cate/cate-edit'], resolve)
const ArticleList = (resolve) => require(['@/pages/article/article-list'], resolve)
const ArticleAdd = (resolve) => require(['@/pages/article/article-add'], resolve)
const ArticleEdit = (resolve) => require(['@/pages/article/article-edit'], resolve)
const ArticleView = (resolve) => require(['@/pages/article/article-view'], resolve)
const Setting = (resolve) => require(['@/pages/set/setting'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/user',
      component: Home,
      children: [
        {
          path: '/',
          component: UserList
        },
        {
          path: '/cate',
          component: CateList
        },
        {
          path: '/cate/add',
          name: 'addCate',
          component: CateAdd
        },
        {
          path: '/cate/view',
          name: 'viewCate',
          component: CateView
        },
        {
          path: '/cate/edit',
          name: 'editCate',
          component: CateEdit
        },
        {
          path: '/article',
          name: 'listArticle',
          component: ArticleList
        },
        {
          path: '/article/edit/:id',
          name: 'editArticle',
          component: ArticleEdit
        },
        {
          path: '/article/add',
          name: 'addArticle',
          component: ArticleAdd
        },
        {
          path: '/article/view/:id',
          name: 'viewArticle',
          component: ArticleView
        },
        {
          path: '/setting',
          name: 'setting',
          component: Setting
        }
      ]
    }
  ]
})
