<template>
    <div class="production_wrap">
      <MianBaoXue :parData="parData"></MianBaoXue>
      <div class="content">
        <div class="zTit">知识产权基金</div>
        <p class="p">知识产权基金用于资助对于具备较高的创新水平、较好的转化应用前景、能够切实为经济社会发展作出实际贡献的科技成果的知识产权保护，包括：</p>
        <p class="p">（1）PCT 国际专利申请；</p>
        <p class="p">（2）高价值专利培育和体系化专利布局。</p>
        <p class="p">满足条件的PCT申请每件资助1万元；满足条件的高价值专利培育和体系化专利布局进行1:1 配套资助，原则上一项成果资助不超过 10 万。原则上仅资助在知识产权保护方面存在经费困难、有实际需求、且产出的知识产权为清华大学单独享有的科技成果。如有知识产权基金资助需求，可在校内信息门户师生办事流程检索平台搜索“知识产权基金”按照流程办理。</p>
        <div class="zTit">技术熟化</div>
        <p class="p">为推动学校科研成果进一步熟化，弥补基础研究成果与市场化之间空白，技术转移研究院可协助科研团队对接学校地方研究院/派出研究院，以及北京市等地方政府的概念验证相关资源，解决科技成果转化“第一公里”的问题。如果您有相关需求，欢迎与我们联系。</p>
    </div>
    </div>
  </template>
  
  <script>
  import MianBaoXue from './MianBaoXue.vue'
  export default {
    data() {
      return {
        parData:["面向研究人员","成果孵化"]
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
  }
  </style>