<template>
  <div>
    <van-nav-bar title="首页">
      <van-icon name="search" slot="left"></van-icon>
      <van-icon name="cart" slot="right"></van-icon>
    </van-nav-bar>
    <div class="carousel">
      <!-- <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe> -->
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(item,index) in carouselItem" :key="index">
          <img :src="item.imgSrc" alt />
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>  

<script>
export default {
  /* 
    nav-bar--头部
    tabber-bar--底部

    组件使用v-for必须使用key属性,保证唯一，用于插件虚拟dom
  */
  data() {
    return {
      carouselItem: [
        {
          name: "img0",
          imgSrc: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568820050074&di=0fa8505e46ff2ff1d9e6ce00c9bbcafa&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_70%2Cc_zoom%2Cw_640%2Fimages%2F20180222%2Fb993a9cabde842d488aeab888a315ff8.jpeg"
        },
        {
          name: "img0",
          imgSrc: "@/assets/img/timg.jpeg"
        },
        {
          name: "img1",
          imgSrc:
            "https://imagebaidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E7%8B%97%E7%8B%97%E7%9A%84%E5%9B%BE%E7%89%87&hs=2&pn=3&spn=0&di=31020&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&ie=utf-8&oe=utf-8&cl=2&lm=-1&cs=179289776%2C3629766819&os=225309741%2C609433390&simid=0%2C0&adpicid=0&lpn=0&ln=30&fr=ala&fm=&sme=&cg=&bdtype=0&oriquery=%E7%8B%97%E7%8B%97%E7%9A%84%E5%9B%BE%E7%89%87&objurl=http%3A%2F%2Fimg5q.duitang.com%2Fuploads%2Fitem%2F201501%2F12%2F20150112192119_tRdzj.jpeg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3B17tpwg2_z%26e3Bv54AzdH3Frj5rsjAzdH3F4ks52AzdH3Fdba89ld89AzdH3F1jpwtsAzdH3F&gsm=0&islist=&querylist="
        },
        {
          name: "img2",
          imgSrc:
            "https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E7%8B%97%E7%8B%97%E7%9A%84%E5%9B%BE%E7%89%87&hs=2&pn=4&spn=0&di=133980&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&ie=utf-8&oe=utf-8&cl=2&lm=-1&cs=3051592192%2C1422888722&os=3281239998%2C4165587643&simid=3425786750%2C275792835&adpicid=0&lpn=0&ln=30&fr=ala&fm=&sme=&cg=&bdtype=0&oriquery=%E7%8B%97%E7%8B%97%E7%9A%84%E5%9B%BE%E7%89%87&objurl=http%3A%2F%2Fimg.51ztzj.com%2Fupload%2Fimage%2F20150213%2Fdn201502034005_670x419.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3Bc8zpz3_z%26e3Bv54AzdH3F1jfhAzdH3F9mc9b_z%26e3Bip4%23wgvi56_gwekw6&gsm=0&islist=&querylist="
        },
        {
          name: "img3",
          imgSrc:
            "https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E7%8B%97%E7%8B%97%E7%9A%84%E5%9B%BE%E7%89%87&hs=2&pn=9&spn=0&di=87450&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&ie=utf-8&oe=utf-8&cl=2&lm=-1&cs=2792177667%2C3954370525&os=4236159822%2C130075067&simid=4024238370%2C553449247&adpicid=0&lpn=0&ln=30&fr=ala&fm=&sme=&cg=&bdtype=0&oriquery=%E7%8B%97%E7%8B%97%E7%9A%84%E5%9B%BE%E7%89%87&objurl=http%3A%2F%2Fpic27.nipic.com%2F20130314%2F9448607_115213098000_2.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3Bgtrtv_z%26e3Bv54AzdH3Ffi5oAzdH3F8AzdH3Fm9AzdH3F0mmdmnmha1c1bnjj_z%26e3Bip4s&gsm=0&islist=&querylist="
        },
        {
          name: "img4",
          imgSrc:
            "https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E7%8B%97%E7%8B%97%E7%9A%84%E5%9B%BE%E7%89%87&hs=2&pn=10&spn=0&di=151580&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&ie=utf-8&oe=utf-8&cl=2&lm=-1&cs=3672724211%2C207396175&os=2771240498%2C403359121&simid=3350571104%2C136507914&adpicid=0&lpn=0&ln=30&fr=ala&fm=&sme=&cg=&bdtype=0&oriquery=%E7%8B%97%E7%8B%97%E7%9A%84%E5%9B%BE%E7%89%87&objurl=http%3A%2F%2Fimg.ph.126.net%2F2Nc7U2xGSy3jRbTUjWoNWg%3D%3D%2F3226547658036171704.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fks52_z%26e3B8mn_z%26e3Bv54AzdH3Fh5g2xtwg2678a8cAzdH3Fks52AzdH3FfpwptvAzdH3F80anadnm9da88cna88c8nllnnAzdH3F&gsm=0&islist=&querylist="
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
</style>