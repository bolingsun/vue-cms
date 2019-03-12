<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" src="../../images/shuijiao.jpg">
                    <div class="mui-media-body">
                        <h3>幸福</h3>
                        <p class='mui-ellipsis'>
                            <span>发表时间：2016-12-16 12:12:45</span>
                            <span>点击： 0次</span>
                        </p>
                    </div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" src="../../images/shuijiao.jpg">
                    <div class="mui-media-body">
                        <h3>小木屋</h3>
                        <p class='mui-ellipsis'>
                            <span>发表时间：2016-12-17 12:12:45</span>
                            <span>点击： 0次</span>
                        </p>
                    </div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" src="../../images/shuijiao.jpg">
                    <div class="mui-media-body">
                        <h3>烤火炉</h3>
                        <p class='mui-ellipsis'>
                            <span>发表时间：2016-12-18 12:12:45</span>
                            <span>点击： 0次</span>
                        </p>
                    </div>
                </a>
            </li>
		</ul>
    </div>
</template>

<script>
export default{
    data(){
        return{}
    },
    methods:{
        getNewsList(){
            
        }
    }
}
</script>

<style scoped>
.mui-table-view li h3{
    font-size: 14px;
}
.mui-table-view li .mui-ellipsis{
    font-size: 12px;
    color: #609df8;
    display: flex;
    justify-content: space-between;
}
</style>

