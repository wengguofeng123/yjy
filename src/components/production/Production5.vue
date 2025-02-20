<template>
    <div class="production_wrap">
      <MianBaoXue :parData="parData"></MianBaoXue>
      <div class="content">
        <div class="cT">
            <div class="c1">《清华大学科技成果评估处置和利益分配管理办法》</div>
            <div>《清华大学知识产权管理规定》</div>
        </div>
    </div>
    </div>
  </template>
  
  <script>
  import MianBaoXue from './MianBaoXue.vue'
  export default {
    data() {
      return {
        parData:["面向研究人员","政策文件"]
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
    .cT{
        border: 1px solid #eee;
        div{
            height: 80px;
            line-height: 80px;
            margin-left: 30px;
            margin-right: 30px;
        }
        .c1{
            border-bottom: 1px solid #eee;
        }
    }
  }
  </style>