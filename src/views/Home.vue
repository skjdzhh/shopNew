<template>
  <div class="container">
    <!-- 导航栏 -->
    <van-nav-bar title="首页" class="nav-bar">
      <van-icon name="search" slot="left"></van-icon>
      <van-icon name="cart" slot="right"></van-icon>
    </van-nav-bar>
    

    <!-- 轮播图 -->
    <div>
      <van-swipe :autoplay="5000" class="carousel">
        <van-swipe-item v-for="(item,index) in carouselItem" :key="index" class="uu">
          <img v-lazy="item.imgSrc" alt class="carousel-item" />
        </van-swipe-item>
      </van-swipe>
    </div>

    <!-- 热门商品 -->
    <div class="hot">
      <h4 class="hot-title">热门商品</h4>
      <swiper class="hot-swiper" :options="swiperOption">
        <swiper-slide v-for="(item,index) in list" :key="index" class="hot-swiper-slide">
          <img :src="item.imgSrc" alt />
          <div>{{item.name}}</div>
          <div>{{item.age}}</div>
        </swiper-slide>
      </swiper>
    </div>

    <!-- 推荐商品 -->
    <div class="variety">
      <p>推荐商品</p>
      <ul>
        <li class="variety-item" v-for="(item,index) in varietyItem" :key="index">
          <img :src="item.imgSrc" alt />
          <div>{{item.name}}</div>
          <span>￥{{item.age}}</span>
        </li>
      </ul>
    </div>
    <!-- <div>{{dataTest}}</div> -->

    <div class="bottom"></div> 
  </div>
</template>  

<script>
import "swiper/dist/css/swiper.css";
//一个组件库中暴露出很多个组件
import { swiper, swiperSlide } from "vue-awesome-swiper";
import Axios from "axios";
export default {
  /* 
    nav-bar--头部
    tabber-bar--底部

    组件使用v-for必须使用key属性,保证唯一，用于插件虚拟dom
  */
  data() {
    return {
      dataTest:"",
      path: "/profile",

      //轮播图
      carouselItem: [
        {
          name: "img1",
          imgSrc:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568869677961&di=48810c06dcc976dcc7898438dc01860d&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fimage%2F2%2F960x600%2F135899202660.jpg"
        },
        {
          name: "img2",
          imgSrc:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568903922996&di=b32c17a6ed0943084a74ed841c81e3a3&imgtype=0&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20180803%2F20%2F1533300715-dosZArivlU.jpg"
          // imgSrc: "@/assets/img/timg.jpeg"  不能用
        },
        {
          name: "img3",
          imgSrc:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568869677956&di=c8daac56692ad1f32ac6e5cc602b1927&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fc38ce78f8492ef6f96ae33ff51cc8520c1be797aeed9-PcfX67_fw658"
        },
        {
          name: "img4",
          imgSrc:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568869677960&di=dd78433964b0039210e48cde2cb20451&imgtype=0&src=http%3A%2F%2Fimage2.cnpp.cn%2Fupload%2Fimages%2F20140904%2F13555778174_1366x768.jpg"
        }
      ],

      //热门商品
      list: [
        {
          name: "谢成",
          age: 32,
          height: 182,
          imgSrc:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568869677961&di=48810c06dcc976dcc7898438dc01860d&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fimage%2F2%2F960x600%2F135899202660.jpg"
        },
        {
          name: "唯创",
          age: 20,
          height: 190,
          imgSrc:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568869677961&di=48810c06dcc976dcc7898438dc01860d&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fimage%2F2%2F960x600%2F135899202660.jpg"
        },
        {
          name: "唯创",
          age: 20,
          height: 190,
          imgSrc:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568869677961&di=48810c06dcc976dcc7898438dc01860d&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fimage%2F2%2F960x600%2F135899202660.jpg"
        },
        {
          name: "唯创",
          age: 20,
          height: 190,
          imgSrc:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568869677961&di=48810c06dcc976dcc7898438dc01860d&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fimage%2F2%2F960x600%2F135899202660.jpg"
        },
        {
          name: "唯创",
          age: 20,
          height: 190,
          imgSrc:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568869677961&di=48810c06dcc976dcc7898438dc01860d&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fimage%2F2%2F960x600%2F135899202660.jpg"
        },
        {
          name: "唯创",
          age: 20,
          height: 190,
          imgSrc:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568869677961&di=48810c06dcc976dcc7898438dc01860d&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fimage%2F2%2F960x600%2F135899202660.jpg"
        }
      ],
      swiperOption: {
        slidesPerView: 3
      },

      // 推荐商品
      varietyItem: [
        {
          name: "谢成",
          age: 32,
          height: 182,
          imgSrc:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568869677961&di=48810c06dcc976dcc7898438dc01860d&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fimage%2F2%2F960x600%2F135899202660.jpg"
        },
        {
          name: "唯创",
          age: 20,
          height: 190,
          imgSrc:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568869677961&di=48810c06dcc976dcc7898438dc01860d&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fimage%2F2%2F960x600%2F135899202660.jpg"
        },
        {
          name: "唯创",
          age: 20,
          height: 190,
          imgSrc:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568869677961&di=48810c06dcc976dcc7898438dc01860d&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fimage%2F2%2F960x600%2F135899202660.jpg"
        },
        {
          name: "唯创",
          age: 20,
          height: 190,
          imgSrc:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568869677961&di=48810c06dcc976dcc7898438dc01860d&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fimage%2F2%2F960x600%2F135899202660.jpg"
        },
        {
          name: "唯创",
          age: 20,
          height: 190,
          imgSrc:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568869677961&di=48810c06dcc976dcc7898438dc01860d&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fimage%2F2%2F960x600%2F135899202660.jpg"
        },
        {
          name: "唯创",
          age: 20,
          height: 190,
          imgSrc:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568869677961&di=48810c06dcc976dcc7898438dc01860d&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fimage%2F2%2F960x600%2F135899202660.jpg"
        }
      ]
    };
  },
  components: {
    swiper,
    swiperSlide
  },

  created() {
    Axios.get('http://www.weichuang.com/getList').then(res => {
      // this.dataTest = res;
      // console.log(res);
      // this.dataTest = res;
      console.log(res);
      console.log("succeed!");
    })
    console.log(111);
  }
};
</script>

<style lang="scss" scoped>
.container {
  background: #eee;
}

.nav-bar {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;

  //样式的优先级最高
  z-index: 999 !important;
  // overflow: hidden;
}

// 轮播图只需要设置内部图片样式
.carousel {
  margin-top: 1rem;
  &-item {
    width: 100%;
    height: 4rem;
  }
}

.hot {
  margin-top: 0.2rem;
  background: #fff;
  &-title {
    height: 0.5rem;
    line-height: 0.5rem;
  }

  // 这个组件要设置swiper的高度
  &-swiper {
    // width:100%;
    display: flex;
    height: 3rem;
    justify-content: space-between;
    // height: 0.5rem;
    // padding-left: 0.2rem;
    // line-height: 0.5rem;
    // text-align: center;
    &-slide {
      img {
        height: 2rem;
        width: 2rem;
      }
    }
  }
}

// 推荐商品
.variety {
  margin-top: 0.2rem;
  background: #fff;
  text-align: center;
  margin-bottom: 1rem;
  // justify-content: space-around;
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  &-item {
    flex-basis: 45%;
  }
  img {
    height: 2rem;
    width: 2rem;
  }
}

.bottom {
  height: 100%;
  height: 300px;
}
</style>