<template>
    <div class="container">
        <!-- 当弹性盒模型中的子元素进行分份的时候，由于子元素中的内容导致不是按照比例分配
        这时需要给每一个子元素加上width:0属性
         -->
         <p>uuuuuuuuuuuuuuuuu</p>
        <div class="parent">
            <div class="child child1">
                <p>hjkjhjjjjj</p>
                <p>h</p>
                <p>hhhhhhhhhh</p>
            </div>
            <div class="child child2">
                <p>hjkjhjjjjj</p>
                <p>hhhhhhhhhh</p>
                <p>hhhhhhhhhh</p>
            </div>
            <div class="child child3">
                <p>hjkjhjjjjj</p>
                <p>hhhhhhhhhh</p>
                <p>hhhhhhhhhh</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
 
    .parent{
        display: flex;
        // flex-wrap: wrap;
        // justify-content: space-arounds;
        
    }
    .child{
        // height: 200px;
        // flex-flow: 1;
        // width: 0px;
        // width: 150px;
        width: 45%;

    }
    .child1{
        background: #f00;
        // flex-groxw: 1;
    }
    .child2{
        background: #0f0;
        // flex-grow:1;
    }
    .child3{
        background: #00f;
        // flex-grow:1
    }
</style>