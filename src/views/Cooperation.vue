<template>
  <div class="cooperation">
    <div class="header1">
      <div class="nav">
        <Header />
      </div>
      <div class="title">
        <p class="p_1">合作与发展</p>
        <p class="p_2">—— Cooperation and development ——</p>
      </div>
    </div>

    <div class="content1">
      <div class="content_2">
        <div class="content_4">
          <p class="p_1">智天渠道化市场战略</p>
          <img src="../assets/image/zuuio.png" style="width:100%" alt />
        </div>
        <div class="content_4" style="padding-top:4.6%;  ">
          <img src="../assets/image/sdd.png" alt />
        </div>
      </div>
    </div>

    <div class="content_3">
      <div class="content">
        <p class="p_1">—— 智天大数据处理架构 ——</p>
        <p class="p_2">资源全方位开放、商机来源更多更广</p>
        <div class="content_1">
          <div>
            <img src="../assets/image/pp.png" alt />
            <p class="p_2" style="color:rgba(241,191,56,1);">品牌认可</p>
            <p class="p_3">媒体广告</p>
            <p class="p_3">宣传资料</p>
          </div>
          <div>
            <img src="../assets/image/rk.png" alt />
            <p class="p_2" style="color:#94D93A;">产品认可</p>
            <p class="p_3">产品评测</p>
            <p class="p_3">第三方报告</p>
          </div>
          <div>
            <img src="../assets/image/ghg.png" alt />
            <p class="p_2" style="color:#FF9C54;">客户公关</p>
            <p class="p_3">客户答谢会</p>
            <p class="p_3">总部参观</p>
          </div>
          <div>
            <img src="../assets/image/jszc.png" alt />
            <p class="p_2" style="color:#00BCD4;">技术支持</p>
            <p class="p_3">产品技术培训</p>
            <p class="p_3">项目方案编制</p>
          </div>
        </div>
      </div>
    </div>

    <div class="content3">
      <div class="content_2">
        <div class="content_4">
          <img src="../assets/image/tutu.png" alt />
        </div>

        <div class="content_4">
          <p class="p_1">各场景的全面解决方案</p>
          <img src="../assets/image/fn.png"  alt />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
export default {
  name: "cooperation",
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
    background: url("../assets/image/zuu.png") no-repeat;
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
        color: rgba(255, 255, 255, 1);
        line-height: 109px;
      }
      .p_2 {
        text-align: center;
        width: 100%;
        font-size: 18px;
        font-family: "SourceHanSansCN";
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 29px;
        display: block;
      }
    }
  }

.content3{
   height: 580px;
    width: 74%;
    // background: red;
    margin: 0 auto;
    .p_1 {
      font-size: 30px;
      font-family: PingFang SC;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      display: block;
      // margin-bottom: 4%;
    }
    .p_2 {
      font-size: 18px;
      font-family: "SourceHanSansCN";
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      line-height: 29px;
      display: block;
    }

    .content_3 {
      display: flex;
      align-items: center;
      .span_1 {
        display: flex;
        width: 87px;
        height: 28px;
        background: #00bcd4;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-size: 18px;
        font-family: PingFang SC;
        float: left;
        margin-right: 1%;

        // font-weight:500;
        // color:rgba(255,255,255,1);
      }
      .span_2 {
        font-size: 20px;
        font-family: "SourceHanSansCN";
        font-weight: bold;
        color: rgba(255, 255, 255, 1);
      }
    }

    .content_2 {
      height: 580px;
      // background: red;
      display: flex;
      justify-content: space-between;
      .content_4 {
        width: 48%;
        // background: greenyellow;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: column;

        .p_1 {
          display: flex;
          align-items: flex-end;
          font-size: 36px;
          font-family: PingFang SC;
          font-weight: 500;
          color: rgba(255, 255, 255, 1);
          margin-bottom: 5%;
          height: 10%;
        }
      }
    }
}
  .content1 {
    height: 500px;
    width: 74%;
    // background: red;
    margin: 0 auto;
    .p_1 {
      font-size: 30px;
      font-family: PingFang SC;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      display: block;
      // margin-bottom: 4%;
    }
    .p_2 {
      font-size: 18px;
      font-family: "SourceHanSansCN";
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      line-height: 29px;
      display: block;
    }

    .content_3 {
      display: flex;
      align-items: center;
      .span_1 {
        display: flex;
        width: 87px;
        height: 28px;
        background: #00bcd4;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-size: 18px;
        font-family: PingFang SC;
        float: left;
        margin-right: 1%;

        // font-weight:500;
        // color:rgba(255,255,255,1);
      }
      .span_2 {
        font-size: 20px;
        font-family: "SourceHanSansCN";
        font-weight: bold;
        color: rgba(255, 255, 255, 1);
      }
    }

    .content_2 {
      height: 500px;
      // background: red;
      display: flex;
      justify-content: space-between;
      .content_4 {
        width: 48%;
        // background: greenyellow;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: column;

        .p_1 {
          display: flex;
          align-items: flex-end;
          font-size: 36px;
          font-family: PingFang SC;
          font-weight: 500;
          color: rgba(255, 255, 255, 1);
          margin-bottom: 9%;
          height: 30%;
        }
      }
    }
  }
  .content_3 {
    height: 420px;
    background: url("../assets/image/tutus.png") no-repeat;
    background-size: 100%;
    .content {
      text-align: center;
      padding-top: 2.5%;
      .p_1 {
        font-size: 36px;
        font-family: PingFang SC;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        margin-bottom: 0.5%;
      }
      .p_2 {
        font-size: 16px;
        font-family: PingFang SC;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        margin-bottom: 4%;
      }
      .p_3 {
        font-size: 36px;
        font-family: "SourceHanSansCN";
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        line-height: 12px;
        margin-top: 4.5%;
        margin-bottom: 2%;
      }
      .p_4 {
        font-size: 24px;
        font-family: "SourceHanSansCN";
        font-weight: 400;
        color: rgba(221, 221, 221, 1);
        margin-bottom: 3.5%;
      }
      .p_5 {
        font-size: 36px;
        font-family: "SourceHanSansCN";
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        line-height: 12px;
        margin-top: 8%;
        margin-bottom: 2%;
      }
      .content_1 {
        // background: red;
        width: 60%;
        // height: 410px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        .p_2 {
          font-size: 24px;
          font-family: "SourceHanSansCN";
          font-weight: 500;
        }
        .p_3 {
          margin-top: 12%;
          font-size: 18px;
          font-family: "SourceHanSansCN";
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
        }
      }
    }
  }
}
</style>