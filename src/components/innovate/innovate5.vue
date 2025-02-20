<template>
    <div class="production_wrap">
      <MianBaoXue :parData="parData"></MianBaoXue>
      <div class="content">
        <p class="p"> 1.基于区块链的信息价值图谱构建方法：2021112498821 李志男 龚䶮 张微 张晓静 赵桂芬 吕华侨</p>
        <p class="p">2.一种基于区块链的数据资产价值评估方法：2021112519334 李志男 龚䶮 张微 张晓静 赵桂芬 林少伟</p>
        <p class="p">3.基于区块链的信息价值标记方法、装置、设备及介质：2021111971165 龚䶮 李志男 张微 卢旭
        </p>
        <p class="p">
          4.基于区块链的信息价值数据库构建方法：2021112479286 张微 李志男 龚䶮 张晓静 赵桂芬 吕华侨
        </p>
        <p class="p">5.一种基于区块链的数据资产配置交易方法及装置：2021112519315 龚䶮 李志男 张微 赵桂芬 张晓静吕华侨</p>
        <p class="p">6.一种基于区块链数据挖掘的数据资源采集和标注方法及装置：202111251932X 龚䶮 张微 李志男 张源 张晓静 林少伟</p>
        <p class="p">7.一种产业链数据价值评估分析系统：2023109432480 刘平平 张士运 肖雯 李志男 赵桂芬 胥彦玲 杨海丽 陈曦 孟潇 刘洪彰</p>
        <p class="p">8.一种面向大规模政策文本的实体关系抽取方法和装置：202410007888.5 赵桂芬;廖金花;李瑛;李志男;刘平平;杜丽萍</p>
        <div class="tit">2024年度</div>
        <p class="fw">一、专利名称 </p>
        <p class="p">1.一种科技成果精准推荐方法，申请号：CN202410695981X
        </p>
        <p class="p">2.一种面向大规模政策文本的试题关系抽取方法和装置，授权号：CN117829146B</p>
        <p class="fw">二、调研报告名称 </p>
        <p class="p">1.高水平开放背景下山西煤机装备企业走出去的优势、现状及对策建议
        </p>
        <p class="p">2.《京津冀区域间成果转化存在的问题、成因及对策研究》报告
        </p>
        <p class="fw">三、2024年度主持的科研项目 </p>
        <p class="p">1.北京高水平创业孵化载体建设思路和举措
        </p>
        <p class="p">2.人工智能类科技成果智能评估系统及其数据资产储备实施
        </p>
        <p class="p">获北京市科协优秀决策咨询成果优秀奖；</p>
        <div class="tit">2023年度</div>
        <p class="fw">一、发明专利 </p>
        <p class="p">1.一种产业链数据价值评估分析系统，授权号：CN202310943248.0
        </p>
        <p class="p">2.一种基于未来产业企业的三网产业图谱构建方法及系统，申请号：CN202310943317.8
        </p>
        <p class="p">3.一种基于区块链技术的未来产业数据知识产权管理系统，申请号：CN202310962195.7
        </p>
        <p class="fw">二、调研报告</p>
        <p class="p">北京创新性城市建设进程中科技进步贡献率的现状及建议分析
        </p>
        <p class="p">北京等超大城市疫情防控宣传情况跟踪与策略研究之二：基于不同传播主体数据的分析与建议
        </p>
        <p class="p">北京等超大城市疫情防控宣传情况跟踪与策略研究
        </p>
        <p class="p">从中关村和硅谷发展动向和趋势作比较研究
        </p>
        <p class="p">提升中关村论坛国际影响力的对策与建议
        </p>
        <p class="p">欧盟CBMA机制下北京高精尖产业发展建议
        </p>
        <p class="fw">三、科研项目</p>
        <p class="p">1.北京高水平创业孵化载体建设思路和举措
        </p>
        <p class="p">2.北京未来产业培育机制和数字价值评估的研究
        </p>
        <a href="https://www.mittrchina.com/news/detail/13883" target="_blank">《麻省理工科技评论》发布“值得关注的15家气候技术公司”榜单，比亚迪连续两年上榜</a><br>
        <a href="https://www.mittrchina.com/news/detail/14332" target="_blank">2024 ACM Fellow公布，10位华人学者入选 </a><br>
        <a href="https://www.iyiou.com/news/202410071079369" target="_blank">首例石墨烯基脑机接口植入成功；华为申请鸿蒙甄选等系列商标</a><br>
        <a href="https://news.sciencenet.cn/htmlnews/2025/2/538892.shtm" target="_blank">全球最大数字微生物数据库建成</a><br>
        <a href="https://www.mittrchina.com/news/detail/14427" target="_blank">DeepSeek真的冲击英伟达了吗？摩根士丹利最新报告：英伟达仍将保持主导地位</a>
      </div>
    </div>
  </template>
  
  <script>
  import MianBaoXue from '@/components/production/MianBaoXue.vue'
  export default {
    data() {
      return {
        parData:["科技创新","创新成果"],
        activeName: 'first'
      }
    },
    components: {
      MianBaoXue
    },
  }
  </script>
  
  <style lang="scss" scoped>
  a{
    line-height: 35px;
    text-decoration:underline;
  }
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