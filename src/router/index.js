import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/Home/Home'
import Category from '@/pages/Category/Category'
// import Header from '@/components/Header/Header'
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/:category',
      component: Category
    }
  ]
})
