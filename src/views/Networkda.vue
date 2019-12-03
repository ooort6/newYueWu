<template>
  <div class="networkda">
    <div class="header1">
      <div class="nav">
        <Header />
      </div>
    </div>

    <div class="content1">
      <div class="content_5">
        <div class="content_1">
          <p class="p_1">网络数据分析</p>
          <p
            class="p_2"
            style="margin-bottom:70px"
          >高速网络，瞬息万亿级的数据比特流，千万级的应用层连接，数以万级的应用种类，这其中既有网络用户正常访问行为，也有大量的网络攻击行为隐匿其中</p>
          <div class="p_3">
            <div class="p_5">
              <img class="img_1" src="../assets/image/bdfh.png" alt />
              <span class="span_1">病毒防护</span>
            </div>

            <div class="p_4">
              <img src="../assets/image/yhxwfx.png" alt />
              <span class="span_1">用户行为分析</span>
            </div>
          </div>
        </div>
        <div>
          <img src="../assets/image/wlsjfx.png" style="width:82%;margin-left:10%" alt />
        </div>
      </div>

      <div class="content_5">
        <div style="width:42%">
          <img src="../assets/image/dongtu_3.gif" style="width:82%;" alt />
        </div>
        <div class="content_6">
          <p class="p_1">
            系统优势 /
            <span class="span_1">SYSTEM ADVANTAGE</span>
          </p>
          <p
            class="p_2"
            style="margin-bottom:70px"
          >采用DMA、PF_RING等技术实现高速网络（GBPS）下原始数据采集。通过网络协议分析，实现网络层、应用层数据提取。</p>
        </div>
      </div>
      <!-- <img src="../assets/image/tutu1.png" style="width:100%;margin-bottom:6%" alt /> -->

      <div class="p_1">
        <p class="p_2">—— 相关产品 ——</p>
      </div>
      <div class="youshi">
        <div class="youshi_1">
          <img src="../assets/image/eydmfh.png" alt />
        </div>
        <div class="youshi_2">
          <p class="p_4">恶意代码防护系统</p>
          <p class="p_5">采用领先的DGA以及智能学习算法，使APT检测能力达到业界领先水平。防止企业信息系统被植入木马病毒而成为</p>
          <p class="p_5">黑客不法工具，或者机密信息被窃取等。</p>
        </div>
      </div>
      <div class="youshi">
        <div class="youshi_1" style="background:#9156BF">
          <img src="../assets/image/dns1.png" alt />
        </div>
        <div class="youshi_2">
          <p class="p_4">智能DNS系统</p>
          <p class="p_5">采用云部署方案，通过设置解析策略，实现域名智能解析。通过应用层跳转服务，实现网站的无缝切换。</p>
        </div>
      </div>
      <div class="youshi">
        <div class="youshi_1" style="background:#00BCD4">
          <img src="../assets/image/wlllgl.png" alt />
        </div>
        <div class="youshi_2">
          <p class="p_4">网络流量分析及管理系统</p>
          <p class="p_5">通过应用层协议解析，实现网络应用分类统计，基于网站内容模型、流量模型，实现用户访问行为分析。</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
export default {
  name: "networkda",
  components: {
    Header
  },
  data() {
    return {};
  },
  watch: {
    //监听路由变化
    $route(to, from) {
      // to , from 分别表示从哪跳转到哪，都是一个对象
      // to.path  ( 表示的是要跳转到的路由的地址 eg: /home );
    }
  },
  mounted() {
    const _this = this;
  },
  methods: {
    // activeShow(index) {
    //   this.ins = index;
    // }
  }
};
</script>
<style lang="scss" scoped>
.networkda {
  min-width: 1500px;
  // background: url("../assets/image/fxbj.png") no-repeat;
  background: #181828;
  background-size: 100% 100%;
  .header1 {
    // height: 640px;
    // background: url("../assets/image/zu1.png") no-repeat;
    // background-size: 100% 100%;
    // padding-top: 1rem;
  }

  .content1 {
    height: 1890px;
    // width: 74%;
    // background: red;
    margin: 0 auto;
    padding-top: 7.78%;
    // text-align: center;
    .content_5 {
      height: 400px;
      // background: red;
      display: flex;
      width: 60%;
      margin: 0 auto;
      margin-bottom: 95px;
      .content_6 {
        padding-left: 8%;
        height: 100%;
        width: 46%;
        // background: #001d88;
        display: flex;
        justify-content: center;
        // align-items: center;
        flex-flow: column;
        .p_1 {
          font-size: 36px;
          font-family: "SourceHanSansCN";
          font-weight: bold;
          color: rgba(255, 255, 255, 1);
          line-height: 50px;
          text-align: left;
          .span_1 {
            font-size: 16px;
            font-family: "SourceHanSansCN";
            font-weight: bold;
            color: rgba(255, 255, 255, 1);
            line-height: 50px;
            text-align: left;
          }
        }
        .p_2 {
          font-size: 24px;
          font-family: "SourceHanSansCN";

          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          line-height: 50px;
        }
      }
      .content_1 {
        height: 100%;
        width: 46%;
        // background: #001d88;
        // display: flex;
        // justify-content: center;
        // align-items: center;

        .p_1 {
          font-size: 48px;
          font-family: "SourceHanSansCN";
          font-weight: bold;
          color: rgba(255, 255, 255, 1);
          line-height: 50px;
          text-align: left;
        }
        .p_2 {
          font-size: 24px;
          font-family: "SourceHanSansCN";
          font-weight: 400;
          color: rgba(240, 243, 242, 1);
          line-height: 36px;
        }
        .p_3 {
          height: 12%;
          // background: yellow;
          display: flex;
          align-items: center;
          .img_1 {
            // width: 20%;
          }
          .span_1 {
            font-size: 20px;
            font-family: "SourceHanSansCN";
            margin-left: 5%;
            font-weight: 400;
            color: rgba(240, 243, 242, 1);
            line-height: 30px;
          }
          .p_4 {
            width: 50%;
            align-items: center;
            display: flex;
          }
          .p_5 {
            width: 50%;
            align-items: center;
            display: flex;
          }
        }
      }
    }
    .p_1 {
      text-align: center;
      margin-bottom: 5%;
      .p_2 {
        font-size: 36px;
        font-family: "SourceHanSansCN";
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
      }
      .p_3 {
        font-size: 20px;
        font-family: "SourceHanSansCN";
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
      }
      .p_4 {
        margin-top: 1%;
        margin-bottom: 3.3%;
        font-size: 24px;
        font-family: "SourceHanSansCN";
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
      }
    }
    .youshi {
      height: 166px;
      background: #46485c;
      width: 70%;
      margin: 0 auto;
      border-radius: 5px;
      display: flex;
      margin-bottom: 1%;
      .youshi_1 {
        width: 21%;
        background: #001d88;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .youshi_2 {
        width: 79%;
        .p_4 {
          font-size: 24px;
          font-family: "SourceHanSansCN";
          font-weight: 500;
          color: #fff;
          margin-top: 18px;
          margin-left: 66px;
          margin-bottom: 2%;
        }
        .p_5 {
          width: 92%;
          margin-left: 66px;
          font-size: 17px;
          font-family: "SourceHanSansCN";
          font-weight: 500;
          color: #fff;
        }
      }
    }
    .content_3 {
      height: 420px;
      background-size: 100%;
      margin-bottom: -3%;
      .content {
        text-align: center;
        padding-top: 4.5%;
        //
        .p_1 {
          font-size: 36px;
          font-family: PingFang SC;
          font-weight: 500;
          color: rgba(255, 255, 255, 1);
          margin-bottom: 0.5%;
        }
        .p_2 {
          margin-top: 20%;
          // margin-bottom: 20%;
          font-size: 30px;
          font-family: PingFang SC;
          font-weight: 500;
          color: rgba(255, 255, 255, 1);
        }
        .p_3 {
          font-size: 18px;
          font-family: "SourceHanSansCN";
          font-weight: 500;
          color: rgba(255, 255, 255, 1);
          // margin-top: 55.5%;
        }

        .content_1 {
          // background: red;
          width: 60%;
          // height: 410px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          .case {
            width: 20%;
            .p_2 {
              font-size: 30px;
              font-family: PingFang SC;
              font-weight: 500;
              color: rgba(255, 255, 255, 1);
            }
            .p_3 {
              margin-top: 7%;
              font-size: 18px;
              font-family: "SourceHanSansCN";
              font-weight: 500;
              color: rgba(255, 255, 255, 1);
            }
          }
        }
      }
    }
  }
}
</style>