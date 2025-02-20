<template>
  <div class="production_wrap">
    <MianBaoXue/>
    <div class="content">
      <p>您可以通过技术转移信息系统进行成果披露，我们将与您联系并就知识产权保护、成果转化等业务为您提供帮助。</p>
      <p>如果您认为某项科技成果有商业化的可能性，就可向技术转移研究院申报该项成果（联系方式）。点击联系方式跳转联系我们页面。</p>
      <p>借助如下三个问题可以帮助做出初步判断：</p>
      <div>
        <span class="el-icon-caret-right"></span> 科技成果是否满足服务国家重大需求及经济社会发展的目标？
      </div>
      <div><span class="el-icon-caret-right"></span>科技成果是否解决了重要的产业实际问题？</div>
      <div><span class="el-icon-caret-right"></span>科技成果是否解决了重要的产业实际问题？</div>
      <p>实现转化不是一蹴而就的事，通常需要数月乃至更久的时间。每项技术实现转化的时间都不尽相同，取决于技术的发展阶段，市场现状，甚至完成人的参与度等诸多因素。成果转化需要多方协作，层层推进。转化方案初步确定后，还需完成资产评估（仅入股及转让项目）、审批、公示、签订合同、备案等法定程序。</p>
    </div>
  </div>
</template>

<script>
import MianBaoXue from './MianBaoXue.vue'
export default {
  data() {
    return {
     
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
  p{
    text-indent: 2em;
    padding-bottom: 20px;
  }
  div{
    padding-bottom: 20px;
    padding-left: 150px;
  }
}
</style>