import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Category from './views/Category'
import Cart from './views/Cart'
import Profile from './views/Profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    // 名字和path建议小写，名字建议大写
    {
      path:'/category',
      name:"category",
      component:Category
    },
    {
      path:'/cart',
      name:'cart',
      component:Cart
    },
    {
      path:'/profile',
      name:'profile',
      component:Profile
    }
  ]
})
