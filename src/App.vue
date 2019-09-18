<template>
  <div id="app">
    

    <router-view></router-view>

    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="records" to="category">分类</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" to="cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="contact" to="profile">我的</van-tabbar-item>
    </van-tabbar>

    <!-- 命名空间的命名法
     public目录表示不用打包的资源文件
     当在一个组件中不引入一个组件的时候，没有必要再这个组件中注册，
     路由不算组件的引入，所以可以不用

     view-router为自定义组件，

     router-link,会被渲染成一个a标签

     git:代码管理软件，版本控制工具
      echo "# shopNew" >> README.md
      git init
      git add *         //将项目中所有的文件让git进行管理
      git add README.md
      git commit -m "first commit"
      git remote add origin https://github.com/skjdzhh/shopNew.git
      git push -u origin master


      vant组件库（移动端）
      推荐组件库：vux(移动端)
      ElementUI(饿了吗)
      iView（有生态，有后端管理系统，iChart）
      i18n：国际化（view插件vue-i18n解决）
      muse-UI

      安装插件
      npm install xx --save             //生产环境
      npm install xx --save-dev         //开发环境 

      安装新的包后需要重启一下服务 

      头部组件NavBar

    -->
  </div>
</template>

<script>
export default {
  data(){
    return{
      active:0
    }
  }
}
</script>

<style lang="scss">
.footer-bar {
  display: flex;
  // 弹性盒模型中父元素的高度和子元素的高度相同
  background: #eeeeee;
  // 固定定位的元素脱离文档流（高由内容撑，宽由内容撑，多个占一行）
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 1rem;
  // sass语法
  &-item {
    flex-grow: 1;
    text-align: center;
    line-height: 1rem;
  }
}
</style>
