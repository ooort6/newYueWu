<template>
  <div class="inteldns">
    <div class="header1">
      <div class="nav">
        <Header />
      </div>
      <div class="title">
        <p class="p_1">智天智能DNS</p>
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
        <div class="content_4">
          <img src="../assets/image/1542tu.png" style="width:83%" alt />
        </div>

        <div class="content_4">
          <p class="p_1">
            <span>产品价值</span>
          </p>
          <p class="p_2">1、降低风险：通过对网内用户访问内容的管控，减少或屏比对不良内容、违法内容、高危网站的访问。</p>
          <p class="p_2">2、省费用：系统建设费用低。不需要硬件投资，部署简单。既可部署于内网内，供内部使用，也可部署于云平台，用于办公地理位置分散的全国或跨国企业。</p>
          <p class="p_2">3、上网快：为用户提供智能DNS解析，提供最佳域名解析。</p>
          <p class="p_2">4、易管理：提供灵活的策略设置功能，灵活设置黑白域名名单，用户访问权限分类等。</p>
        </div>
      </div>
    </div>

    <div class="content1">
      <div class="content_2">
        <div class="content_4" style="width:80%">
          <p class="p_1" style>
            <span style="height:150%">适用用户</span>
          </p>
          <p class="p_2" style="margin-bottom:1%">1、政府、大型企事业单位，对工作网内可访问内容有限制要求</p>
          <p class="p_2" style="margin-bottom:1%">
            2、生产或销售电脑及手机的智能设备，在全国或全球有大量体验门店，防范体验用户访问不良网站，避免给销售企业带来不利影响，
            或设备感染病毒等事件发生等。
          </p>
          <p class="p_2">3、提供全国性或全球性服务的超大型企业，为用户提供最佳的网上服务体验；</p>
        </div>
      </div>
    </div>

    <div class="content_3">
      <div class="content">
        <p class="p_1">—— 成功案例 ——</p>
        <div class="content_4">
          <img src="../assets/image/shbj.png" class="img1" alt />
          <p class="p_1">实施 背景</p>
          <p class="p_2">某国际知名高科技公司，在中国境内有近百个体验店以及业务分支机构。使用多家运营商网络接入Internet。</p>
          <p class="p_2">存在店内体验用户访问不良网站的情况，不利于产品体验式销售。</p>
        </div>
        <div class="content_4">
          <img src="../assets/image/mb.png" class="img1" alt />
          <p class="p_1">项目 目标</p>
          <p class="p_2">屏蔽对不良网站的访问。网内的体验用户和工作人员使用不同的管理策略。</p>
        </div>
        <div class="content_4">
          <img src="../assets/image/sx1.png" class="img1" alt />
          <p class="p_1">系统 上线</p>
          <p class="p_2">所有对域名黑名单的访问均被截获，跳转至指定网站。</p>
          <p class="p_2">根据访问者所处的物理位置给出最佳的目标IP地址解析。</p>
        </div>
        <div class="content_4">
          <img src="../assets/image/xg.png" class="img1" alt />
          <p class="p_1">运行 效果</p>
          <p class="p_2">系统部署简单。费用省，可扩展性强。使用运营商云服务器。轻松实现一次部署，全国所有门店使用。</p>
          <p class="p_2">操作简单方便。不需要增加额外人员进行系统的管理维护。</p>
        </div>
      </div>

      <div class="content_hz">
        <p class="p_1">目前已合作客户：运营商门店、智能设备销售门店
</p>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
export default {
  name: "inteldns",
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
.inteldns {
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
    height: 550px;
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
      background: url("../assets/image/dnsgn.png") no-repeat;
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