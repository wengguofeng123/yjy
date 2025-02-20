<template>
  <div>
    <PCNavbar selectIndex="1" />
    <!-- <MobileNavBar :currentActive="0"/> -->
    <CarouselHome />
    <TodoShow />
    <div class="bottom_circle">
      <div class="more">
        <div class="more-img"><img src="../assets/img/xinjian/sy_tit_more.png" alt=""></div>
        <div class="look-more">查看更多</div>
      </div>
      <div class="new-dyn"><span>新闻</span><span style="color: #642a81;">动态</span></div>
      <div class="new-line"></div>
      <div class="new-swp">
        <div class="swp-div" v-for="item in 4">
          <div class="div-img"><img src="../assets/img/xinjian/news.jpg" alt=""></div>
          <div class="news-text">北京工研院技术转移院联合党支部与交叉信息院教工党支部举办...</div>
          <div class="news-date">
            <div class="fontS">11/12</div>
            <div class="qiu">
              <img src="../assets/img/xinjian/part3_con_dot.png" alt="">
            </div>
            <div class="lineDiv">

            </div>
          </div>
          
        </div>

      </div>

    </div>
    <!-- <CoreCompetence/> -->
    <!-- <CooperationCustomer/> -->
    <NewsInfomation />
    <CallMe />
    <MobileCallme />
  </div>
</template>

<script>
import PCNavbar from '@/components/navbar/index'
import MobileNavBar from '@/components/navbar/MobileNavBar.vue'
import CarouselHome from '@/components/carousel_home/index'
import TodoShow from '@/components/todo_show/index'
// import CoreCompetence from '@/components/core_competence/index'
// import CooperationCustomer from '@/components/cooperation_customer/index'
import NewsInfomation from '@/components/news_infomation/index'
import CallMe from '@/components/callme/index'
import MobileCallme from '@/components/callme/MobileCallme.vue'
export default {
  components: {
    PCNavbar,
    MobileNavBar,
    CarouselHome,
    TodoShow,
    // CoreCompetence,
    // CooperationCustomer,
    NewsInfomation,
    CallMe,
    MobileCallme
  },
}
</script>

<style lang="scss" scoped>
.bottom_circle {
  width: 100%;
  height: 600px;
  background-image: url(../assets/img/xinjian/part2_bg.jpg);
  background-size: cover;
  padding: 0 10%;

  .more {
    margin-top: 50px;
    width: 118px;
    display: flex;
    justify-content: center;
    float: right;
    font-size: 20px;
    color: #642a81;
    border-bottom: 1px solid #642a81;

    .look-more {
      padding-left: 8px;
    }
  }

  .new-dyn {
    font-size: 38px;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .new-line {
    width: 28px;
    height: 1px;
    background: #642a81;
    margin: 0 auto;
  }

  .new-swp {
    margin-top: 50px;
    display: flex;
    justify-content: space-between;

    .swp-div {
      width: 22%;
      box-shadow: 0 0 0.2rem rgba(50, 53, 65, 0.15);

      // height: 280px;
      .div-img {
        width: 100%;
        height: 155px;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .news-text {
        font-size: 16px;
        color: #323232;
        line-height: 28px;
        padding-top: 20px;
        padding-left: 20px;
        padding-right: 20px;
      }

      .news-date {      
        padding-left: 18px;
        padding-bottom: 20px;
        display: flex;
        align-items: center;
        .fontS{
          font-size: 28px;
          font-weight: 700;
          color: #642a81;
        }
        .qiu{
          display: flex;
          width: 12px;
          height: 12px;
          margin-left: 20px;
        }
        .lineDiv{
          width: 100%;
          height: 1px;
          background: #eee;
        }
      }
    }
  }

}

</style>