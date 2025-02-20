<template>
    <div class="production_wrap">
      <MianBaoXue :parData="parData"></MianBaoXue>
      <div class="content">
        <div class="newsOut" v-for="item in 5">
            <div class="imgO"><img src="../../assets/img/xinjian/dian1.jpg" alt=""></div>
            <div class="newsBottom">
              <div class="textS">国家知识产权局专利局电学发明审查部来我校交流</div>
              <div class="lineB">
                <div class="fontS">11/29</div>
                <div class="qiu">
                  <img src="../../assets/img/xinjian/part3_con_dot.png" alt="">
                </div>
                <div class="lineDiv">

                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import MianBaoXue from '@/components/production/MianBaoXue.vue'
  export default {
    data() {
      return {
        parData:["新闻动态","工作动态"],
        activeName: 'first'
      }
    },
    components: {
      MianBaoXue
    },
  }
  </script>
  
  <style lang="scss" scoped>
  .production_wrap {
    width: 100%;
  }
  .content{
    font-size: 18px;
    color: #323232;
    .p{
      text-indent: 2em;
      padding-bottom: 20px;
    }
    .div{
      padding-bottom: 20px;
      padding-left: 150px;
    }
    .span{
        text-indent: 2em;
        font-size: 16px;
        color: #622983;
        padding-bottom: 20px;
    }
    .tit{
        font-weight: 700;
        font-size: 24px;
        padding-bottom:20px ;
    }
  }
  .fw{
    font-weight: 700;
  }
  ::v-deep .el-tabs__nav-wrap::after{
    background: #622983 !important;
  }
  ::v-deep .el-tabs__item.is-active {
    color: #622983 !important;
    font-weight: 700;
    background: #fff;
}
  ::v-deep .el-tabs__item:hover{
  color: #622983 !important;
}
::v-deep .el-tabs__active-bar{
  background-color: #622983;
  height: 3px;
}
::v-deep .el-tabs--top .el-tabs__item.is-top {
    font-size: 18px;
}
::v-deep .el-tabs--top .el-tabs__header.is-top{
    margin-bottom: 30px;
}


.newsOut{
  display: flex;
  margin-bottom: 30px;
  .imgO{
    width: 35%;
    height: 230px;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .newsBottom{
    width: 65%;
    padding: 20px 0;
    margin-left: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .textS{
      font-weight: 700;
      font-size: 20px;
    }
    .lineB{
      display: flex;
      align-items: center;
      .fontS{
        font-weight: 700;
        font-size:28px ;
        color: #642a81;
      }
      .qiu{
        display: flex;
        margin-left: 20px;
      }
      .lineDiv{
        width: 100%;
        height: 1px;
        background: #ccc;
      }
    }
  }

}
  </style>