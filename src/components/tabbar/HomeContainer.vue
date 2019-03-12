<template>
    <div>
        <!-- 这是轮播图 -->
        <mt-swipe :auto="4000">
            <!-- 在组件中使用v-for循环的话，一定要使用key -->
            <mt-swipe-item v-for="item in lunbotuList" :key='item.id'>
                <img v-bind:src="item.images.small" alt="">
            </mt-swipe-item>
        </mt-swipe>
        <!-- 这是9宫格 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newslist">
                    <!-- <span class="mui-icon mui-icon-home"></span> -->
                    <img src="../../images/新闻.png" alt="">
                    <div class="mui-media-body">新闻资讯</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <!-- <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span> -->
                    <img src="../../images/分享.png" alt="">
                    <div class="mui-media-body">图片分享</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <!-- <span class="mui-icon mui-icon-chatbubble"></span> -->
                    <img src="../../images/购物车.png" alt="">
                    <div class="mui-media-body">商品购买</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <!-- <span class="mui-icon mui-icon-location"></span> -->
                    <img src="../../images/留言.png" alt="">
                    <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <!-- <span class="mui-icon mui-icon-search"></span> -->
                    <img src="../../images/视频.png" alt="">
                    <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <!-- <span class="mui-icon mui-icon-phone"></span> -->
                    <img src="../../images/联系人.png" alt="">
                    <div class="mui-media-body">联系我们</div></a></li>
		</ul> 
    </div>
</template>

<script>

import { Toast} from 'mint-ui'
export default{
    data(){
        return {
            lunbotuList: []//保存轮播图的数组
        }
    },
    created(){
        this.getLunbotu();
    },
    methods:{
        getLunbotu(){
            this.$http.jsonp('https://api.douban.com/v2/movie/in_theaters?start=0&count=4',{},{
                headers:{},
                emulateJSON:true}).then((response) =>{
                    //console.log(response.data);
                    if(!response.data.count == 0){
                        //成功拿到数据
                        this.lunbotuList = response.data.subjects;
                    }else{
                        //失败了，没有数据
                        Toast('加载轮播图数据失败')
                    }
                });
        }
    }
}
</script>

<style scoped>
.mint-swipe{
    height: 300px;
}
.mint-swipe-item img{
    height: 100%;
    margin-left: 90px;
}
.mui-grid-view.mui-grid-9{
    background-color: #fff;
    border: none;
}
.mui-grid-view.mui-grid-9 img{
    width: 60px;
    height: 60px;
}
.mui-grid-view.mui-grid-9 .mui-media-body{
    font-size: 13px;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border: 0;
}
/* .mint-swipe-item:nth-child(1){
}
.mint-swipe-item:nth-child(2){
}
.mint-swipe-item:nth-child(3){
} */
</style>
