<template>
  <div id="app">
    

    <router-view></router-view>

  <!-- 标签栏，页面底部 -->       
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="records" to="/category">分类</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="contact" to="/profile">我的</van-tabbar-item>
      <van-tabbar-item icon="gem-o" to="/tanxing2">弹性</van-tabbar-item>
    </van-tabbar>

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
body{
  height: 3000px;
}
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
