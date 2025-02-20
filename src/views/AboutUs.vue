<template>
    <div class="bgImg">
        <PCNavbar selectIndex="3-1" />
        <div class="topImg"><img src="../assets/img/xinjian/33.jpg" alt=""></div>
        <div class="P-layout">
            <div class="titleCard">关于我们</div>
            <el-tabs :tab-position="tabPosition" @tab-click="clickTab" v-model="editableTabsValue">
                <el-tab-pane label="机构概括" name="1"><router-view></router-view></el-tab-pane>
                <el-tab-pane label="人员招聘" name="2"><router-view></router-view></el-tab-pane>
                <el-tab-pane label="联系我们" name="3"><router-view></router-view></el-tab-pane>
            </el-tabs>
        </div>
        <CallMe />

        <!-- <MobileNavBar :currentActive="1" /> -->

    </div>
</template>

<script>
import PCNavbar from '@/components/navbar/index'
// import MobileNavBar from '@/components/navbar/MobileNavBar.vue'
import CallMe from '@/components/callme/index'
export default {
    data() {
        return {
            tabPosition: 'left',
            editableTabsValue: "1",
        };
    },
    watch: {
        $route(to, from) {

            let index = this.$route.query.id;
            console.log(index)
            this.editableTabsValue = index;
        }
    },
    components: {
        PCNavbar,
        CallMe
        // MobileNavBar,
    },
    mounted() {
        let index = this.$route.query.id;
        this.editableTabsValue = index;
    },
    methods: {
        clickTab(tab) {
            var indexID=Number(tab.index)+1;
            console.log(indexID);
            this.$router.push("/aboutUs/"+indexID+"?id="+indexID);
        }
    }
}
</script>

<style>
.bgImg {
    background: url(../assets/img/xinjian/part4_bg.jpg) no-repeat;
    background-size: cover;
}

.topImg {
    width: 100%;
    height: 520px;
    margin-bottom: 30px;

}

.topImg img {
    width: 100%;
    height: 100%;
}

.P-layout {
    width: 80%;
    margin: 0 auto;
    position: relative;

}

.titleCard {
    position: absolute;
    width: 18%;
    height: 130px;
    background: url(../assets/img/xinjian/ej_main_left_lmmc.jpg) no-repeat;
    background-size: cover;
    color: #fff;
    text-align: center;
    line-height: 130px;
    font-size: 26px;
    font-weight: 700;
}

.el-tabs--left .el-tabs__item.is-left {
    text-align: left;
    font-size: 20px;
    color: #323232;
    height: 68px;
    line-height: 68px;
    border-bottom: 1px solid #eee;
    padding-left: 30px;
    /* background:#edf0ff; */
}

.el-tabs--left .el-tabs__active-bar.is-left {
    width: 4px;
    right: none !important;
    left: 0 !important;
}

.el-tabs--left .el-tabs__nav-wrap.is-left::after {
    height: 0;
}

.el-tabs--left .el-tabs__header.is-left {
    width: 18%;
    background: #f6f8ff url(../assets/img/xinjian/ej_main_left_bg.png) no-repeat;
    margin-top: 160px;
    margin-right: 30px;
}

.el-tabs__active-bar {
    background-color: #e99644;
}

.el-tabs__item.is-active {
    color: #e99644 !important;
    font-weight: 700;
    background: #edf0ff;
}

.el-tabs__item:hover {
    color: #e99644 !important;
    font-weight: 700;
}
</style>