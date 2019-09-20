import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Category from './views/Category'
import Cart from './views/Cart'
import Profile from './views/Profile'
import Tanxing1 from './views/Tanxing1'
import Tanxing2 from './views/Tanxing2'
import Ajax from './views/Ajax'

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
    },
    {
      path:'/tanxing1',
      name:'tanxing1',
      component:Tanxing1
    },
    {
      path:'/tanxing2',
      name:'tanxing2',
      component:Tanxing2
    },{
      path:'/ajax',
      name:'ajax',
      component:Ajax
    }
  ]
})
