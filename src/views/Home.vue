<template>
  <div>
    <!-- 导航栏 -->
    <van-nav-bar title="首页">
      <van-icon name="search" slot="left"></van-icon>
      <van-icon name="cart" slot="right"></van-icon>
    </van-nav-bar>

    <!-- 轮播图 -->
    <div>
      <van-swipe :autoplay="5000" class="carousel">
        <van-swipe-item v-for="(item,index) in carouselItem" :key="index">
          <img v-lazy="item.imgSrc" alt class="carousel-item" />
        </van-swipe-item>
      </van-swipe>
    </div>

    <van-button type="default">默认按钮</van-button>
    <van-button type="primary" :to="path">主要按钮</van-button>

    <!-- 热门商品 -->
    <div class="hot">
      <p>热门商品</p>
      <swiper class="hot-swiper">
        <swiper-slide v-for="(item,index) in list" :key="index">
          <div class="hot-swiper-content">
            <img :src="item.imgSrc" alt="">
            <div>{{item.name}}</div>
            <div>{{itme.age}}</div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>  

<script>
import 'swiper/dist/css/swiper.css' 
//一个组件库中暴露出很多个组件
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  /* 
    nav-bar--头部
    tabber-bar--底部

    组件使用v-for必须使用key属性,保证唯一，用于插件虚拟dom
  */
  data() {
    return {
       path:"/profile",

       //轮播图
      carouselItem: [
        {
          name: "img1",
          imgSrc:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568869677961&di=48810c06dcc976dcc7898438dc01860d&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fimage%2F2%2F960x600%2F135899202660.jpg"
        },
        {
          name: "img2",
          imgSrc:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568903922996&di=b32c17a6ed0943084a74ed841c81e3a3&imgtype=0&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20180803%2F20%2F1533300715-dosZArivlU.jpg"
          // imgSrc: "@/assets/img/timg.jpeg"  不能用
        },
        {
          name: "img3",
          imgSrc:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568869677956&di=c8daac56692ad1f32ac6e5cc602b1927&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fc38ce78f8492ef6f96ae33ff51cc8520c1be797aeed9-PcfX67_fw658"
            
        },
        {
          name: "img4",
          imgSrc:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568869677960&di=dd78433964b0039210e48cde2cb20451&imgtype=0&src=http%3A%2F%2Fimage2.cnpp.cn%2Fupload%2Fimages%2F20140904%2F13555778174_1366x768.jpg"
            
        },
        
      ],

      //热门商品   
      "list": [
        {
            "name": "谢成",
            "age": 32,
            "height": 182,
            "imgSrc":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568869677961&di=48810c06dcc976dcc7898438dc01860d&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fimage%2F2%2F960x600%2F135899202660.jpg"
        }, {
            "name": "唯创",
            "age": 20,
            "height": 190,
            "imgSrc":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568869677961&di=48810c06dcc976dcc7898438dc01860d&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fimage%2F2%2F960x600%2F135899202660.jpg"
        }
      ]
      }
    },
    components:{
    swiper,
    swiperSlide
  }
}
</script>

<style lang="scss" scoped>
.carousel {
  height: 300px;

  &-item {
    width: 100%;
    height: 4rem;
  }
}
.hot{
  &-swiper{
    width:100%;
    // height: 0.5rem;
    // padding-left: 0.2rem;
    // line-height: 0.5rem;
    // text-align: center;
  }
}
</style>