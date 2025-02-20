<template>
  <div class="data_brain_wrap">
    <div :class="item.class" v-for="(item,index) in cardList" :key="index">
      <div class="card_lb">
        <div class="title-lay">
          <div class="card-title">{{ item.title }}</div>
          <div class="card-btn">了解详情</div>
        </div>
        <div class="card-text">
          {{ item.desc }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cardList: [
        {
          class:"card one",
          title: '知识产权',
          desc: '您可以通过技术转移信息系统办理专利申请和软件著作权登记等业务（包括知识产权服务机构选择、办理代理委托、提交申请、缴费等）。对技术创新水平高、成果转化潜力大的科技成果，学校知识产权保护基金将给予资助。您也可以直接联系我们。',
        },
        {
          class:"card two",
          title: '成果发布',
          desc: '我们将定期发布清华大学科技成果，您可浏览成果库进行查询和了解，若有您感兴趣的项目，欢迎随时与我们联系。',
        },
        {
          class:"card three",
          title: '成果孵化',
          desc: '校内科研人员：如您有成果孵化需求，我们将为您提供孵化资源信息和帮助。',
        },
        {
          class:"card four",
          title: '成果转化',
          desc: '校内科研人员：技术转移研究院致力于将科研成果转化为实际应用，如果您有具有商业化潜力的科技成果，欢迎与我们联系，我们将协同学校相关部门在实现成果转化的全过程中竭诚为您提供服务和帮助。',
        }
      ],
    }
  },
  methods:{
    handleNavigate(){
      this.$router.push('/production/1').catch((v) => {})
    }
  }
}
</script>

<style lang="scss" scoped>
.data_brain_wrap {
  // padding: 50px 0;
  // background: #e8eef2;
  // text-align: center;
  background-image: url(../../assets/img/xinjian/part2_bg.jpg);
  background-size:cover; 
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding:80px 10%;
  .card{
    width: 49%;
    height: 400px;
    margin-bottom: 30px;
   position: relative;
    .card_lb{
      width: 80%;
      height: 300px;
      position: absolute;
      top: 100px;
      left: 0;
      padding: 25px;
      color: #fff;
      background: url(../../assets/img/xinjian/part2_con_bg.png);
      .title-lay{
        display: flex;
        align-items: center;
        justify-content: space-between;
        .card-title{
          font-size: 26px;
          font-weight: 700;
        }
        .card-btn{
          width: 100px;
          height: 30px;
          border-radius: 15px;
          line-height: 30px;
          text-align: center;
          border: 1px solid #fff;
        }
      }
      .card-text{
        padding-top: 20px;
      }
    }
  }
}
.one{
 background-image: url(../../assets/img/xinjian/part2_img3.jpg);
 background-size:cover; 
}
.two{
  background-image: url(../../assets/img/xinjian/part2_img2.jpg);
  background-size:cover; 
}
.three{
  background-image: url(../../assets/img/xinjian/part2_img4.jpg);
  background-size:cover; 
}
.four{
  background-image: url(../../assets/img/xinjian/part2_img1.jpg);
  background-size:cover; 
}
</style>