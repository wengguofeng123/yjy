<template>
  <div :class="navClass">
    <div class="navbar_container">
      <div class="navbar_left">
        <!-- <img src="@/assets/img/home/logo.svg" alt="云逸创造..." /> -->
        北京市科学技术研究院科技情报研究所
      </div>
      <div class="navbar_right">
        <el-menu
          :default-active="activeIndex"
          class="el_menu_demo"
          mode="horizontal"
          background-color="rgba(0,0,0,0)"
          :text-color="navBackground"
          :active-text-color="navBackground"
          @select="changeCurrentPage"
        >
          <el-menu-item index="1" class="menu_item">首页</el-menu-item>
          <el-submenu index="2">
            <template slot="title">面向研究人员</template>
            <!-- <el-menu-item index="2-1" class="menu_item">产业大脑</el-menu-item>
            <el-menu-item index="2-2" class="menu_item">云招商</el-menu-item>
            <el-menu-item index="2-3" class="menu_item"
              >企业创新服务</el-menu-item
            >
            <el-menu-item index="2-4" class="menu_item">产业咨询</el-menu-item> -->
            <div>
            <el-menu-item index="2-1" class="menu_item bgStyle">成果披露</el-menu-item>
            <el-menu-item index="2-2" class="menu_item bgStyle">知识产权保护</el-menu-item>
            <el-menu-item index="2-3" class="menu_item bgStyle">成果孵化</el-menu-item >                     
            <el-menu-item index="2-4" class="menu_item bgStyle">成果转化</el-menu-item>
            <el-menu-item index="2-5" class="menu_item bgStyle">政策文件</el-menu-item>
            <el-menu-item index="2-6" class="menu_item bgStyle">常见问题</el-menu-item>
          </div>
          </el-submenu>
          <!-- <el-menu-item index="3" class="menu_item">云逸研究院</el-menu-item> -->
          <el-submenu index="4" class="menu_item">
            <template slot="title">面向产业界</template>
            <el-menu-item index="4-1" class="menu_item bgStyle">成果发布</el-menu-item>
            <el-menu-item index="4-2" class="menu_item bgStyle">许可流程</el-menu-item>
            <el-menu-item index="4-3" class="menu_item bgStyle">协议文件</el-menu-item>
            <el-menu-item index="4-4" class="menu_item bgStyle">常见问题</el-menu-item>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">面向创业团队</template>
            <el-menu-item index="6-1" class="menu_item bgStyle">创业指南</el-menu-item>
            <el-menu-item index="6-2" class="menu_item bgStyle">利益冲突政策</el-menu-item>
            <el-menu-item index="6-3" class="menu_item bgStyle">相关资源</el-menu-item>
            <el-menu-item index="6-4" class="menu_item bgStyle">常见问题</el-menu-item>
          </el-submenu>
          <el-submenu index="7">
            <template slot="title">科技创新</template>
            <el-menu-item index="7-1" class="menu_item bgStyle">创新动态</el-menu-item>
            <el-menu-item index="7-2" class="menu_item bgStyle">科研项目</el-menu-item>
            <el-menu-item index="7-3" class="menu_item bgStyle">创新平台</el-menu-item>
            <el-menu-item index="7-4" class="menu_item bgStyle">创新进展</el-menu-item>
            <el-menu-item index="7-5" class="menu_item bgStyle">创新成果</el-menu-item>
            <el-menu-item index="7-6" class="menu_item bgStyle">成果转化（知识产权）</el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">新闻动态</template>
            <el-menu-item index="5-1" class="menu_item bgStyle">工作动态</el-menu-item>
            <el-menu-item index="5-2" class="menu_item bgStyle">年度报告</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">关于我们</template>
            <el-menu-item index="3-1" class="menu_item bgStyle">机构概括</el-menu-item>
            <el-menu-item index="3-2" class="menu_item bgStyle">人员招聘</el-menu-item>
            <el-menu-item index="3-3" class="menu_item bgStyle">联系我们</el-menu-item>
          </el-submenu>
        

          <!-- <el-menu-item index="6" class="menu_item"
            ><a href="/demo">立即体验</a></el-menu-item
          > -->
        </el-menu>
        <!-- <a href="#">立即体验</a> -->
        <!-- <span class="right_phone">
          <i class="el-icon-phone"></i>
          <span> 000-000-0000 </span>
        </span> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1',
      navBackground:'#fff',
      navClass:"navbar_wrap navBac1"
    }
  },
  props: {
    selectIndex: {
      type: String,
      default: '0',
    },
  },
  mounted() {
    this.activeIndex = this.selectIndex
    window.onscroll = () => {
      if(document.documentElement.scrollTop > 330){
        // this.navBackground = '#000'
        this.navClass="navbar_wrap navBac2"
      }else{
        // this.navBackground = '#fff'
        this.navClass="navbar_wrap navBac1"
      }
    }
  },
  methods: {
    changeCurrentPage(index) {
      this.activeIndex = index
      switch (this.activeIndex) {
        case '1':
          this.$router.push('/home').catch((v) => {})
          break

        case '2-1':
          this.$router.push('/production/1?id=1').catch((v) => {})
          break
        case '2-2':
          this.$router.push('/production/2?id=2').catch((v) => {})
          break
        case '2-3':
          this.$router.push('/production/3?id=3').catch((v) => {})
          break
        case '2-4':
          this.$router.push('/production/4?id=4').catch((v) => {})
          break
        case '2-5':
          this.$router.push('/production/5?id=5').catch((v) => {})
          break
        case '2-6':
          this.$router.push('/production/6?id=6').catch((v) => {})
          break

        case '7-1':
          this.$router.push('/innovate/1?id=1').catch((v) => {})
          break
        case '7-2':
          this.$router.push('/innovate/2?id=2').catch((v) => {})
          break
        case '7-3':
          this.$router.push('/innovate/3?id=3').catch((v) => {})
          break
        case '7-4':
          this.$router.push('/innovate/4?id=4').catch((v) => {})
          break
        case '7-5':
          this.$router.push('/innovate/5?id=5').catch((v) => {})
          break
        case '7-6':
          this.$router.push('/innovate/6?id=6').catch((v) => {})
          break

        case '4-1':
          this.$router.push('/industry/1?id=1').catch((v) => {})
          break
        case '4-2':
          this.$router.push('/industry/2?id=2').catch((v) => {})
          break
        case '4-3':
          this.$router.push('/industry/3?id=3').catch((v) => {})
          break
        case '4-4':
          this.$router.push('/industry/4?id=4').catch((v) => {})
          break

        case '6-1':
          this.$router.push('/entrepreneurship/1?id=1').catch((v) => {})
          break
        case '6-2':
          this.$router.push('/entrepreneurship/2?id=2').catch((v) => {})
          break
        case '6-3':
          this.$router.push('/entrepreneurship/3?id=3').catch((v) => {})
          break
        case '6-4':
          this.$router.push('/entrepreneurship/4?id=4').catch((v) => {})
          break

        case '5-1':
          this.$router.push('/newsInfo/1?id=1').catch((v) => {})
          break
        case '5-2':
          this.$router.push('/newsInfo/2?id=2').catch((v) => {})
          break

        case '3-1':
          this.$router.push('/aboutUs/1?id=1').catch((v) => {})
          break
        case '3-2':
          this.$router.push('/aboutUs/2?id=2').catch((v) => {})
          break
        case '3-3':
          this.$router.push('/aboutUs/3?id=3').catch((v) => {})
          break



        default:
          break
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.navBac1{
  background: rgba(0, 0, 0, 0.3);

}
.navBac2{
  background: url(../../assets/img/xinjian/sy_nav_top_line.jpg) no-repeat;
  background-size: 100% 100%;
}
.navbar_wrap {
  width: 100%;
  height: 70px;
  // background: rgba(0, 0, 0, 0.3);
  // backdrop-filter: saturate(180%) blur(0.5rem);
  // background: url(../../assets/img/xinjian/sy_nav_top_line.jpg) no-repeat;
  // background-size: 100% 100%;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  .navbar_container {
    width: 90%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .navbar_left {
      display: flex;
      align-items: center;
      height: 100%;
      color: #fff;
      font-size: 26px;
      width: 50%;
      // img {
      //   width: 160px;
      //   cursor: pointer;
      // }
    }
    .navbar_right {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      font-weight: 700;
      a {
        text-decoration: none;
        color: #0038a4;
        display: inline-block;
        width: 100px;
        background: #ffa400;
        line-height: 27px;
        text-align: center;
        border-radius: 20px;
        padding: 5px;
      }
      .el_menu_demo {
        border: none;
      }
      ::v-deep .menu_item {
        font-size: 20px !important;
      }
      li{
        font-size: 20px;
        ::v-deep .el-submenu__title{
          font-size: 20px;
        }
      }
      
      .right_phone {
        &:hover {
          color: #ccc;
        }
        transition: all 0.5s;
        display: flex;
        align-items: center;
        i {
          font-size: 20px;
        }
        span {
          margin-left: 0.5rem;
        }
        margin-left: 2.5rem;
        color: #fff;
      }
    }
  }
}
.bgStyle{
  background: #fff !important;
  color: #555555 !important;
  text-align: center;
  font-size: 12px !important;
}
.bgStyle:hover{
  background: #6510AD !important;
  color:#fff !important;
}
</style>