<template>
    <div>
        <van-button type="primary" @click="getData">请求数据</van-button>
        <van-button type="danger" @click="clearData">清空数据</van-button>
        <ul v-for="(item,index) in list" :key="index">
            <li>{{item}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                list:[]   
            }
        },
        methods: {
            ajax(){
                // ajax原理
                let movieUrl = "https://bird.ioliu.cn/v2?url=https://api.douban.com/v2/movie/in_theaters?city=广州&start=0&count=10";

                //创建XMLHttpRequest对象
                let xmlhttp;
                if(window.XMLHttpRequest){
                    xmlhttp = new XMLHttpRequest();
                }
                else{
                    // xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
                }

                //发送请求
                xmlhttp.open('GET',movieUrl,true);
                xmlhttp.send();
 
                //响应请求
                xmlhttp.addEventListener('readystatechange',()=>{
                    if(xmlhttp.readyState==4&&xmlhttp.status==200){
                        let obj = JSON.parse(xmlhttp.responseText);
                        // console.log(obj);
                        this.list = obj;
                        con
                    }
                });
            },
            getData(){
                this.ajax();
            },
            clearData(){
                this.list = [];
            }
        },  
    }
</script>

<style lang="scss" scoped>

</style>