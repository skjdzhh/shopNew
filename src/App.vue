<template>
  <div id="app">
  
  <router-view></router-view>
   <ul class="footer-bar">
     <li class="footer-bar-item">
     <router-link to="/">首页</router-link>
     </li>
     <li class="footer-bar-item">
    <router-link to="/category">分类</router-link>
     </li>
     <li class="footer-bar-item">
     <router-link to="/cart">购物车</router-link>
     </li>
     <li class="footer-bar-item">
     <router-link to="/profile">我的</router-link>
     </li>


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

      -->

   </ul>
  </div>
</template>

<style lang="scss">
.footer-bar{
  display: flex;
// 弹性盒模型中父元素的高度和子元素的高度相同
  background:#eeeeee;
  // 固定定位的元素脱离文档流（高由内容撑，宽由内容撑，多个占一行）
  position: fixed;
  bottom: 0px;
  width:100%;
  height: 1rem;
  // sass语法
  &-item{
    flex-grow:1;
    text-align: center;
    line-height: 1rem;

  }
}
</style>
