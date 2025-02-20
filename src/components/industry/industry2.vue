<template>
  <div class="production_wrap">
    <MianBaoXue :parData="parData"></MianBaoXue>
    <div class="content">
      <p class="p">专利开放许可是我国专利法2020年10月修订后新施行的制度，作为一种标准化的快速许可机制，通过事先制定交易条件并公开发布的形式来降低买方双方的技术搜寻和谈判成本。</p>
      <p class="p">专利开放许可的基本程序为：专利权人提前明确专利许可费用、期限等许可条件，向国家知识产权局系统相关机构提出开放许可声明；国家知识产权局系统相关机构审核后对声明进行公告，并组织信息发布等技术推广活动；相关企业有意愿实施开放许可专利的，可以书面通知专利权人并按照声明的许可条件支付费用。</p>
      <p class="p">参与开放许可的专利应当已经获得授权，具有较广泛的市场应用范围和较高的专利保护质量。</p>
      <p class="p">
        专利开放许可的许可形式为普通许可，不包括排他许可或独占许可；许可期限应提前确定，可以短期（至少一年）或长期许可；许可费用应提前确定，可以采取固定收费、入门费加提成或入门费加里程碑付款等形式。
      </p>
      <p class="p">专利开放许可属于专利权人的自愿行为，可以根据情况变化撤回开放许可声明。</p>
      <p class="p">开放许可专利可通过以下链接查看：https://patentol.ctex.cn/</p>
    </div>
  </div>
</template>

<script>
import MianBaoXue from '@/components/production/MianBaoXue.vue'
export default {
  data() {
    return {
      parData: ["面向产业界", "许可流程"],
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

.content {
  font-size: 18px;
  color: #323232;

  .p {
    text-indent: 2em;
    padding-bottom: 20px;
  }

  .div {
    padding-bottom: 20px;
    padding-left: 150px;
  }

  .span {
    text-indent: 2em;
    font-size: 16px;
    color: #622983;
    padding-bottom: 20px;
  }

  .tit {
    font-weight: 700;
    font-size: 24px;
    padding-bottom: 20px;
  }
}

.fw {
  font-weight: 700;
}

::v-deep .el-tabs__nav-wrap::after {
  background: #622983 !important;
}

::v-deep .el-tabs__item.is-active {
  color: #622983 !important;
  font-weight: 700;
  background: #fff;
}

::v-deep .el-tabs__item:hover {
  color: #622983 !important;
}

::v-deep .el-tabs__active-bar {
  background-color: #622983;
  height: 3px;
}

::v-deep .el-tabs--top .el-tabs__item.is-top {
  font-size: 18px;
}

::v-deep .el-tabs--top .el-tabs__header.is-top {
  margin-bottom: 30px;
}
</style>