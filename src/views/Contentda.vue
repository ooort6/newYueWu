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
          <p class="p_1">内容数据分析</p>
          <p class="p_2" style="margin-bottom:122px">文本、图像以及视频分析，预警敏感文件或不良内容。</p>
          <div class="p_3" style="margin-bottom:6%">
            <img src="../assets/image/ywsjfx2.png" alt />
            <!-- <div class="p_5">
              <img class="img_1" src="../assets/image/bdfh.png" alt />
              <span class="span_1">病毒防护</span>
            </div>

            <div class="p_4">
              <img src="../assets/image/yhxwfx.png" alt />
              <span class="span_1">用户行为分析</span>
            </div>-->
          </div>
          <!-- <div class="p_3">
            <div class="p_5">
              <img class="img_1" src="../assets/image/bdfh.png" alt />
              <span class="span_1">病毒防护</span>
            </div>

            <div class="p_4">
              <img src="../assets/image/yhxwfx.png" alt />
              <span class="span_1">用户行为分析</span>
            </div>
          </div>-->
        </div>
        <div>
          <img src="../assets/image/ywsjfx1.png" style="width:82%;margin-left:10%" alt />
        </div>
      </div>

      <div class="content_5">
        <div style="width:42%">
          <img src="../assets/image/sjfx3.png" style="width:82%;" alt />
        </div>
        <div class="content_6">
          <p class="p_1">
            系统优势 /
            <span class="span_1">SYSTEM ADVANTAGE</span>
          </p>
          <p class="p_2" style="margin-bottom:70px">采用智天自有的文本快速匹配算法以及图形分析算法，实现文本、图片以及视频内容审核。</p>
        </div>
      </div>
      <!-- <img src="../assets/image/tutu1.png" style="width:100%;margin-bottom:6%" alt /> -->

      <div class="p_1">
        <p class="p_2">—— 相关产品 ——</p>
      </div>
      <div class="youshi">
        <div class="youshi_1">
          <div class="circle">
            <img src="../assets/image/sh.png" alt />
          </div>
        </div>
        <div class="youshi_2">
          <p class="p_4">网络传输内容审核系统</p>
          <p
            class="p_5"
            style="margin-bottom:3%"
          >结合网络数据分析的数据采集技术以及内容分析算法，可及时预警内部人员滥用网络，对外发送敏感文件或不良内容。</p>

          <p class="p_6">
            <span @click="$router.push({name:'examine'})">了解详情>></span>
          </p>
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
  background: url("../assets/image/fxbj.png") no-repeat;
  // background: #181828;
  background-size: 100% 100%;
  .header1 {
    // height: 640px;
    // background: url("../assets/image/zu1.png") no-repeat;
    // background-size: 100% 100%;
    // padding-top: 1rem;
  }

  .content1 {
    height: 30.8rem;
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
      // background: #46485c;
      width: 70%;
      margin: 0 auto;
      border-radius: 5px;
      display: flex;
      margin-bottom: 1%;
      .youshi_1 {
        width: 21%;
        // background: #001d88;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        //   .circle{
        //     width: 190px;
        // border-radius: 50%;
        //     border: 1px solid red;
        //   }
      }
      .youshi_2 {
        width: 79%;
        .p_4 {
          font-size: 28px;
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
          font-size: 22px;
          font-family: "SourceHanSansCN";
          font-weight: 500;
          color: #fff;
        }
        .p_6 {
          text-align: right;
          font-size: 24px;
          font-family: "SourceHanSansCN";

          font-weight: 500;
          color: rgba(255, 208, 45, 1);
          line-height: 50px;
          span {
            cursor: pointer;
          }
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