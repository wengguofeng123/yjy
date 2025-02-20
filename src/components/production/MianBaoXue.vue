<template>
    <div class="TopOut">
        <div class="top">
            <div><img src="../../assets/img/xinjian/sy_tit_more.png" alt=""></div>
            <div class="title">当前位置：</div>
        </div>
        <div>
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>{{ parData[0] }}</el-breadcrumb-item>
                <el-breadcrumb-item>{{ parData[1] }}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
    </div>

</template>

<script>

export default {
    // props:['parData'],
    props: {
        parData: Array,
    },
    data() {
        return {
           
        }
    },
    mounted(){
       
    }
}
</script>

<style lang="scss" scoped>
    .TopOut{
        display: flex;
        align-items: center;
        width: 100%;
        border-bottom: 4px solid #622983;
        padding-bottom: 15px;
        .title{
            padding-left: 10px;
        }
        margin-bottom: 30px;
    }
    .top{
        display: flex;
        align-items: center;
    }
</style>