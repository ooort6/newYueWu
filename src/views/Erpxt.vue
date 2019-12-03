<template>
  <div class="erpxt">
    <div class="header1">
      <div class="nav">
        <Header />
      </div>
      <div class="title">
        <p class="p_1">网络流量分析及管理系统</p>
      </div>
    </div>
    <div class="gn">
      <p class="p_1">
        <!-- —— 产品功能 —— -->
      </p>
      <div class="jc"></div>
    </div>
    <div class="content3">
      <div class="content_2">
        <div class="content_4" style="align-items:center">
          <img src="../assets/image/tu48754.png" style alt />
        </div>

        <div class="content_4">
          <p class="p_1">
            <span>产品价值</span>
          </p>
          <p class="p_2">1、把握网络状况：多维度分析网络流量，总体把握网络运行状况。</p>
          <p class="p_2">2、掌握舆情动向：多维度分析数据内容，把握用户关注热点及舆情动向。</p>
          <p class="p_2">3、统一网络管理：采用统一控制中心与各分支街斗AGENT节点模式，实现分布式网络的统一管理。</p>
        </div>
      </div>
    </div>

    <div class="content1"  style="height:350px">
      <div class="content_2">
        <div class="content_4" style="width:80%;padding-left:8%;">
          <p class="p_1" style>
            <span style="height:150%">适用用户</span>
          </p>
          <p class="p_2" style="margin-bottom:1%">1、大型网络，多个分散中心，多个网络出口。有统一管理需求。</p>
          <p class="p_2" style="margin-bottom:1%">2、网络内用户以学生群体为主</p>
        </div>
      </div>
    </div>

    <div class="content_3">
      <div class="content">
        <p class="p_1">—— 成功案例 ——</p>
        <div class="content_4">
          <img src="../assets/image/shbj.png" class="img1" alt />
          <p class="p_1">实施 背景</p>
          <p class="p_2">某运营商的客户：某市教委。下属区县教育局10几家，高等院校10多所。各单位多出口，带宽需求增长快。</p>
          <p class="p_2">市教委考虑统一网络出口方案。运营商为VIP客户提供网络管理增值服务。</p>
        </div>
        <div class="content_4">
          <img src="../assets/image/mb.png" class="img1" alt />
          <p class="p_1">项目 目标</p>
          <p class="p_2">掌握各下属单位带宽实际使用情况。网络应用占用带宽的分布情况。网络用户行为特征统计。</p>
          <p class="p_2">实现紧急情况下对各下属单位的网络应急管理。</p>
        </div>
        <div class="content_4">
          <img src="../assets/image/sx1.png" class="img1" alt />
          <p class="p_1">系统 上线</p>
          <p class="p_2">实现对全部下属单位带宽使用情况（流量、应用分布、关注热点）的分析。</p>
          <p class="p_2">基于服务器访问情况，评估各院校学术影响力。实现所有下属单位网络带宽的统一管理。</p>
        </div>
        <div class="content_4">
          <img src="../assets/image/xg.png" class="img1" alt />
          <p class="p_1">运行 效果</p>
          <p class="p_2">运营商在不调整网络物理结构的情况下实现网络出口统一管理。</p>
          <p class="p_2">运营商提供增值服务，增强客户粘性。</p>
        </div>
      </div>

      <div class="content_hz">
        <p class="p_1">目前已合作客户：运营商</p>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
export default {
  name: "erpxt",
  components: {
    Header
  },
  data() {
    return {
      display7: 0
    };
  },
  watch: {
    //监听路由变化
  },
  mounted() {
    const _this = this;
    //console.log(_this.$route.path);
    // if(_this.$route.path=='/'){
    // alert(1)
    $(window).scroll(function() {
      if ($(window).scrollTop() > 1250) {
        //code........

        _this.$data.display7 = 1;
        // debugger;
      }
      // else{
      //   _this.$data.isShow = true;
      //   console.log(_this.$data.isShow);

      // }
    });
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.erpxt {
  min-width: 1500px;
  background: #181828;
  .header1 {
    height: 520px;
    background: url("../assets/image/bj456.png") no-repeat;
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
        text-align: left;
        font-size: 60px;
        font-family: "SourceHanSansCN";
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

  .content3 {
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
        align-items: flex-end;
        flex-flow: column;
        .p_1 {
          width: 100%;

          display: flex;
          // text-decoration: underline;
          // align-items: flex-end;
          // justify-content: start;
          font-size: 36px;
          font-family: "SourceHanSansCN";
          font-weight: 500;
          // text-decoration: underline;
          // padding-bottom:5px;
          color: rgba(254, 254, 254, 1);
          margin-bottom: 5%;
          // border-bottom: 1px solid #fff;
          height: 10%;
          // width: 30%;
          span {
            border-bottom: 2px solid #fefefe;
          }
        }
        .p_2 {
          width: 100%;

          display: flex;
        }
      }
    }
  }
  .gn {
    height: 500px;
    width: 74%;
    // background: red;
    margin: 0 auto;
    text-align: center;
    .p_1 {
      padding-top: 80px;
      font-size: 36px;
      font-family: "SourceHanSansCN";
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      margin-bottom: 20px;
    }
    .jc {
      background: url("../assets/image/wlll.png") no-repeat;
      background-size: 100%;
      height: 100%;
    }
  }
  .content1 {
    height: 350px;
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
      height: 350px;
      // background: red;
      display: flex;
      justify-content: space-between;
      .content_4 {
        width: 48%;
        // background: greenyellow;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-flow: column;

        .p_1 {
          width: 100%;

          display: flex;
          // text-decoration: underline;
          // align-items: flex-end;
          // justify-content: start;
          font-size: 36px;
          font-family: "SourceHanSansCN";
          font-weight: 500;
          // text-decoration: underline;
          // padding-bottom:5px;
          color: rgba(254, 254, 254, 1);
          margin-bottom: 5%;
          // border-bottom: 1px solid #fff;
          height: 10%;
          // width: 30%;
          span {
            border-bottom: 2px solid #fefefe;
          }
        }
        .p_2 {
          .span_1 {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background: #00f7dd;
            display: block;
            float: left;
            text-align: center;
            margin-right: 12px;
          }
        }
        .xz {
          animation: rotateArround 3.5s linear alternate;
          -webkit-animation: rotateArround 3.5s linear alternate;
          -moz-animation: rotateArround 3.5s linear;
          -ms-animation: rotateArround 3.5s linear;
          -o-animation: rotateArround 3.5s linear;
          @keyframes rotateArround {
            from {
              transform: rotateZ(0deg);
            }
            to {
              transform: rotateZ(360deg);
            }
          }

          @-webkit-keyframes rotateArround {
            from {
              -webkit-transform: rotate(0deg);
            }
            to {
              -webkit-transform: rotate(360deg);
            }
          }

          @-moz-keyframes rotateArround {
            from {
              -moz-transform: rotate(0deg);
            }
            to {
              -moz-transform: rotate(360deg);
            }
          }

          @-ms-keyframes rotateArround {
            from {
              -ms-transform: rotate(0deg);
            }
            to {
              -ms-transform: rotate(360deg);
            }
          }

          @-o-keyframes rotateArround {
            from {
              -o-transform: rotate(0deg);
            }
            to {
              -o-transform: rotate(360deg);
            }
          }
        }
      }
    }
  }
  .content_3 {
    height: 930px;
    // background: url("../assets/image/tutus.png") no-repeat;
    background-size: 100%;
    .content {
      text-align: center;
      margin-bottom: 7%;
      .p_1 {
        font-size: 36px;
        font-family: PingFang SC;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        margin-bottom: 5.5%;
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
    .content_4 {
      width: 74%;
      margin: 0 auto;
      text-align: left;
      margin-bottom: 64px;
      .img1 {
        float: left;
        margin-right: 2%;
        padding-top: 0.5%;
      }
      .p_1 {
        width: 80px;
        font-size: 30px;
        font-family: "SourceHanSansCN";
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        line-height: 36px;
        margin-right: 4%;
        margin-bottom: 0;
        display: block;
        float: left;
      }
      .p_2 {
        font-size: 22px;
        font-family: "SourceHanSansCN";
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
      }
    }
    .content_hz {
      width: 74%;
      margin: 0 auto;
      height: 120px;
      background: red;
      background: url("../assets/image/hzkh.png") no-repeat;
      background-size: 100% 100%;
      display: flex;
      align-items: center;
      text-align: center;

      .p_1 {
        width: 100%;
        font-size: 30px;
        font-family: "SourceHanSansCN";
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
      }
    }
  }
}
</style>