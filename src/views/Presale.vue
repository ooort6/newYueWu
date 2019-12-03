<template>
  <div class="cooperation">
    <div class="header1">
      <div class="nav">
        <Header />
      </div>
      <div class="title">
        <!-- <p class="p_1">如何购买</p>
        <p class="p_3"></p>
        <p class="p_2">智天科技售前客服代表与资深销售顾问联手为您提供专业的购买咨询服务</p> -->
      </div>
    </div>

    <div class="content1">
      <span class="span_1">
        本页面仅受理售前的购买咨询，如需售后帮助，请点击
        <a href style="color:#1EF0FE" @click="$router.push({name:'Aftersale'})">链接</a>
      </span>
      <div class="content_2">
        <div class="content_3">
          <p class="p_1"><img src="@/assets/image/jt.png" alt=""></p>
          <p class="p_2">工作日 9:00-12:00 13:00-18:00</p>
          <p class="p_2" style="margin-bottom:70px">客服代表一对一即时消息沟通</p>

          <p class="p_3">QQ: 3175964995</p>
        </div>
        <div class="content_3">
          <p class="p_1"><img src="@/assets/image/zx.png" alt=""></p>

          <p class="p_2" style="margin-bottom:70px">
            就你感兴趣的产品或解决方案提交咨询
            问题，我们将安排专人在一个工作日内
            给您答复
          </p>

          <span class="content_4" @click="$router.push({name:'Consultation'})">填写咨询表单</span>
        </div>
        <div class="content_3">
          <p class="p_1"><img src="@/assets/image/dh1.png" alt=""></p>
          <p class="p_2" style="margin-bottom:70px">
            全国统一售前服务热线，若遇线路
            繁忙，请选择 在线交谈 进行产品
            和服务咨询
          </p>

          <p class="p_3" style="color:#fff">021-22819090</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
export default {
  name: "Presale",
  components: {
    Header
  },
  data() {
    return {};
  },
  watch: {
    //监听路由变化
  },
  mounted() {},
  methods: {}
};
</script>
<style lang="scss" scoped>
.cooperation {
  min-width: 1500px;
  background: #181828;
  .header1 {
    height: 520px;
    background: url("../assets/image/rhgm.png") no-repeat;
    background-size: 100% 100%;
    // padding-top: 1rem;

    .title {
      display: flex;
      height: 80%;
      justify-content: center;
      align-items: center;
      flex-flow: column;
      .p_1 {
        // width: 100%;
        display: block;
        font-size: 60px;
        font-family: Source Han Sans CN;
        font-weight: 500;
        color: #08fcff;
        line-height: 109px;
      }
      .p_2 {
        text-align: center;
        width: 100%;
        font-size: 18px;
        font-family: "SourceHanSansCN";
        font-weight: 400;
        color: #08fcff;
        line-height: 29px;
        display: block;
      }
      .p_3 {
        text-align: center;
        display: block;
        width: 3%;
        height: 4px;
        background: #08fcff;
        margin-bottom: 20px;
      }
    }
  }

  .content1 {
    height: 700px;
    width: 74%;
    // background: red;
    margin: 0 auto;
    padding-top: 100px;
    .span_1 {
      display: block;
      width: 100%;
      text-align: center;
      font-size: 14px;
      color: #fff;
    }
    .content_2 {
      width: 100%;
      height: 500px;
      // background: red;
      display: flex;
      justify-content: space-around;
      .content_3 {
        width: 20%;
        display: flex;
        justify-content: center;
        // align-items: center;
        flex-flow: column;
        .p_1 {
          font-size: 18px;
          color: #fff;
          font-weight: bold;
          margin-bottom: 40px;
        }
        .p_2 {
          font-size: 16px;
          color: #fff;
          text-align: left;
        }
        .p_3 {
          font-size: 24px;
          font-family: Impact;
          font-weight: 400;
          color: rgba(32, 240, 255, 1);
        }
        .content_4 {
          display: block;
          border: 1px solid #20f0ff;
          width: 155px;
          height: 36px;
          text-align: center;
          color: #20f0ff;
          font-size: 16px;
          line-height: 36px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>