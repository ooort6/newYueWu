<template>
  <div class="cooperation">
    <div class="header1">
      <div class="nav">
        <Header />
      </div>
      <div class="title">
        <p class="p_1">合作共赢</p>
        <p class="p_2">—— Win-win cooperation ——</p>
      </div>
    </div>

    <div class="content1">
      <span class="span_1">
        <span class="span_3"></span> 合作伙伴/
        <span class="span_2">PARTNERS</span>
      </span>

      <div class="content_2">
        <span style="color:#08FCFF">成为销售合作伙伴：</span>
 智天渠道化市场战略以及全方位的渠道体系支持，期待与您携手
        <div class="btn_1" @click="$router.push({name:'Pspartners'})">立即申请</div>
      </div>

       <div class="content_2">
        <span style="color:#08FCFF">成为供应合作伙伴：</span>
 智天渠道化市场战略以及全方位的渠道体系支持，期待与您携手
        <div class="btn_1" @click="$router.push({name:'SupplyPartners'})">立即申请</div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
export default {
  name: "Wwcooper",
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
    background: url("../assets/image/hzgy.png") no-repeat;
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
    height: 430px;
    width: 68%;
    // background: red;
    margin: 0 auto;
    padding-top: 100px;
    .span_1 {
      display: block;
      width: 100%;
      text-align: left;
      font-size: 36px;
      font-family: PingFang SC;
      font-weight: 500;
      color: rgba(8, 252, 255, 1);
      border-bottom: 1px solid #a0a0a0;
      margin-bottom: 4.6%;
    }
    .span_2 {
      width: 100%;
      text-align: left;
      font-size: 24px;
      font-family: PingFang SC;
      font-weight: 500;
      color: rgba(8, 252, 255, 1);
    }
    .span_3 {
      width: 6px;
      height: 30px;
      display: block;
      background: rgba(8, 252, 255, 1);
      float: left;
      margin-top: 12px;
      margin-right: 1%;
    }
    .content_2 {
      height: 30px;
      width: 100%;
      // background: red;
      font-size: 16px;
      color: #fff;
      margin-bottom: 3%;
      .btn_1 {
        width: 120px;
        height: 24px;
        background: #181828;
        border: 1px solid #ececec;
        float: right;
        text-align: center;
        &:hover {
          background: #077cc7;
          cursor: pointer;
        }
      }
    }
  }
}
</style>