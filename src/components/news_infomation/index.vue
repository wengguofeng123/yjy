<template>
  <div class="bottom_circle">
    <div class="more">
      <div class="more-img"><img src="../../assets/img/xinjian/sy_tit_more.png" alt=""></div>
      <div class="look-more">查看更多</div>
    </div>
    <div class="new-dyn"><span>通知</span><span style="color: #642a81;">公告</span></div>
    <div class="new-line"></div>
    <div class="note">
      <div class="note-div" v-for="item in 6">
        <div class="note-img"><img src="../../assets/img/xinjian/part4_ly_bg.jpg" alt=""></div>
        <div class="note-cen">
          <div class="note-left">
            <div class="note-date">12/06</div>
            <div class="note-year">2024</div>
          </div>
          <div class="ver-line"></div>
          <div class="note-right">2024 专利展示（三十）</div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {

  },
}
</script>

<style lang="scss" scoped>
.bottom_circle {
  width: 100%;
  height: 600px;
  background-image: url(../../assets/img/xinjian/part4_bg.jpg) !important;
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
  .note{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 50px;
    .note-div{
      width: 30%;
      margin-bottom: 40px;
      // height: 90px;
      box-shadow: 0 0 0.2rem rgba(50, 53, 65, 0.15);
      .note-img{
        width: 25%;
        height: 30px;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .note-cen{
        width: 90%;
        margin: 0 auto;
        display: flex;
        padding-top: 20px;
        padding-bottom: 20px;
        .note-left{
          .note-date{
            font-size: 26px;
            color: #642a81;
            font-weight: 700;
          }
          .note-year{
            font-weight: 700;
            color: #999999;
            font-size: 16px;
          }
        }
        .ver-line{
          width: 1px;
          height: 68px;
          background: #ccc;
          margin-left: 20px;
          margin-right: 20px;
        }
        .note-right{
          font-size: 18px;
          color: #323232;
        }
      }
    }
  }

}
</style>