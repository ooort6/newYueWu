<template>
  <div class="examine">
    <div class="header1">
      <div class="nav">
        <Header />
      </div>
      <div class="title">
        <p class="p_1">智天网络内容审核</p>
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
        <div class="content_4" style="align-items:center;width:50%">
          <p class="p_1">
            <span>产品价值</span>
          </p>
          <p class="p_2">1、防范信息泄露：防范网内用户向外网发送涉密文件。</p>
          <p class="p_2">2、保护企业形象：防范网内用户对外发布色情、反动、暴力内容等不良行为，导致企事业单位负面社会形象。</p>
        </div>
        <div class="content_4">
          <img src="../assets/image/cpjz1.png" style alt />
        </div>
      </div>
    </div>

    <div class="content1" style="height:300px;width:67%">
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
          <p class="p_2">上海某区事业单位。员工数量约8000人。网路出口带宽2000M</p>
          <p class="p_2">某内部员工在外网机房租用服务器空间并存储不良内容，被公安机关传唤。</p>
        </div>
        <div class="content_4">
          <img src="../assets/image/mb.png" class="img1" alt />
          <p class="p_1">项目 目标</p>
          <p class="p_2">能及时发现网络内上传违规内容的行为，发出告警信息，并提供相关证据辅助管理工作。</p>
        </div>
        <div class="content_4">
          <img src="../assets/image/sx1.png" class="img1" alt />
          <p class="p_1">系统 上线</p>
          <p class="p_2">上线1个月后，发现网内数个用户利用网络发送不良信息，及时通过短信预警管理人员。</p>
          <p class="p_2">管理人员通过相关管理措施，对相关人员进行劝诫。</p>
        </div>
        <div class="content_4">
          <img src="../assets/image/xg.png" class="img1" alt />
          <p class="p_1">运行 效果</p>
          <p class="p_2">本系统为管理人员提供了必要的技术管理手段，</p>
          <p class="p_2">通过行政管理与宣传相结合，网内传输不良内容的行为基本杜绝。</p>
        </div>
      </div>

      <div class="content_hz">
        <p class="p_1">目前已合作客户：政府政务网、事业单位业务网、运营商IDC
</p>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
export default {
  name: "examine",
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
.examine {
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
    width: 57%;
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
    height: 720px;
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
      background: url("../assets/image/nrsh.png") no-repeat;
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