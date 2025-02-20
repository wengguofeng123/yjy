<template>
    <div class="production_wrap">
      <MianBaoXue :parData="parData"></MianBaoXue>
      <div class="content">
        <p class="p">科技成果转化是一个持续且环环相扣的过程。在这个过程中，技术转移研究院协同学校相关部门从成果披露开始介入，经过成果评估、知识产权保护、市场推广、商务谈判等，形成转化方案，最终帮助学校和成果完成人与合作方签约或投资成立新公司。科技成果转化所产生的收入将按照国家法律及清华大学相关规定，返还学校、院系和成果完成人团队。</p>
        <div class="dImg"><img src="../../assets/img/xinjian/cg.png" alt=""></div>
    </div>
    </div>
  </template>
  
  <script>
  import MianBaoXue from './MianBaoXue.vue'
  export default {
    data() {
      return {
        parData:["面向研究人员","成果转化"]
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
    .zTit{
        font-size: 30px;
        font-weight:700 ;
        color: rgb(112, 48, 160);
        padding-bottom: 20px;
        padding-left: 35px;
    }
    .dImg{
        text-align: center;
        margin-top: 40px;
        margin-bottom: 50px;
    }
  }
  </style>