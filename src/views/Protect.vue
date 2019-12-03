<template>
  <div class="protect">
    <div class="header1">
      <div class="nav">
        <Header />
      </div>
      <div class="title">
        <p class="p_1">智天恶意代码防护</p>
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
          <img src="../assets/image/cpjz.png" alt />
        </div>

        <div class="content_4">
          <p class="p_1">
            <span>产品价值</span>
          </p>
          <p class="p_2">1、高安全：网络管理员可实时掌握网络安全状况。及时发现网络入侵行为，快速采取行动，清除蠕虫病毒。</p>
          <p class="p_2">2、省费用：系统部署简单，易于管理，节省人力。一套系统实现全网监控。</p>
          <p class="p_2">3、智能预测：智能学习算法，可预测未知僵尸病毒。</p>
        </div>
      </div>
    </div>

    <div class="content1">
      <div class="content_2">
        <div class="content_4" style="width:70%">
          <p class="p_1" style>
            <span style="height:150%">适用用户</span>
          </p>
          <p class="p_2" style="margin-bottom:2%">
            <span class="span_1">1</span>
            拥有大型网络，网络中主机数量较多。易被黑客操纵为网络攻击的傀儡机群。
          </p>
          <p class="p_2">
            <span class="span_1" style="background:#4F60FF">2</span>
            拥网络主机或服务器中保存有敏感信息。有较高技术、商业或军事价值。
          </p>
        </div>
        <div class="content_4" v-if="display7==1">
          <img class="xz" src="../assets/image/shiy.png" alt />
        </div>
      </div>
    </div>

    <div class="content_3">
      <div class="content">
        <p class="p_1">—— 成功案例 ——</p>
        <div class="content_4">
          <img src="../assets/image/shbj.png" class="img1" alt />
          <p class="p_1">实施 背景</p>
          <p class="p_2">上海某区政务网。拥有主机约2000台，20多台服务器。</p>
          <p class="p_2">由国内知名安全公司的专业维护团队进行网络安全及运行维护</p>
        </div>
        <div class="content_4">
          <img src="../assets/image/mb.png" class="img1" alt />
          <p class="p_1">项目 目标</p>
          <p class="p_2">验证网络是否安全。是否存在僵尸网络病毒。如果存在病毒，提供相关杀毒软件进行查杀。</p>
        </div>
        <div class="content_4">
          <img src="../assets/image/sx1.png" class="img1" alt />
          <p class="p_1">系统 上线</p>
          <p class="p_2">上线当月即检测出约6%主机及1台DNS服务器已被木马/僵尸网络控制。证明网络存在安全风险。</p>
          <p class="p_2">提供病毒验证及查杀工具，培训专业维护团队进行应急处置。快速消除木马/僵尸网络。</p>
        </div>
        <div class="content_4">
          <img src="../assets/image/xg.png" class="img1" alt />
          <p class="p_1">运行 效果</p>
          <p class="p_2">本系统为维护团队提供了必要的技术手段，及时发现中毒机器，减少网络安全风险。</p>
          <p class="p_2">系统一处部署，全网防护。操作简单，安全可靠，成本降低，效率提升优势明显。</p>
        </div>
      </div>

      <div class="content_hz">
        <p class="p_1">目前已合作客户：政府政务网、事业单位业务网、运营商IDC、科研院所</p>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
export default {
  name: "protect",
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
.protect {
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
      background: url("../assets/image/gn.png") no-repeat;
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
        font-size: 24px;
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