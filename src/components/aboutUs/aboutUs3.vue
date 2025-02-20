<template>
    <div class="production_wrap">
      <MianBaoXue :parData="parData"></MianBaoXue>
      <div class="content">

      </div>
    </div>
  </template>
  
  <script>
  import MianBaoXue from '@/components/production/MianBaoXue.vue'
  export default {
    data() {
      return {
        parData:["关于我们","联系我们"],
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

  </style>