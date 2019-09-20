import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/reset.css'
// rem解决方案在各个界面里面都有用到，所以在入口文件中引入
import '@/assets/js/rem.js'
// 引入包的时候，后面的名字一定和package.json中的名字相同

//vant完全引入  
// import Vant from 'vant'
// import 'vant/lib/index.css'
// Vue.use(Vant)

// 按需引入,推荐方式
import { Icon,Button,Cell, CellGroup, NavBar ,Tabbar,TabbarItem,Swipe,SwipeItem,Lazyload} from 'vant';
import  "@/Mock/mock"
// Vue.use(Button)
// Vue.use(Icon)
//全局注册组件
Vue.use(Button).use(Icon).use(Cell).use(CellGroup).use(NavBar).use(Tabbar).use(TabbarItem).use(Lazyload)
.use(Swipe).use(SwipeItem);    

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
