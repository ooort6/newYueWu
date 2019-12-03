<template>
  <div class="aboutus">
    <div class="header1">
      <div class="nav">
        <Header />
      </div>
    </div>

    <div class="content1">
      <div class="p_1">
        <p class="p_2">—— 发展历程 ——</p>
        <p class="p_3">Development history</p>
      </div>
      <img src="../assets/image/tutu1.png" style="width:100%;margin-bottom:6%" alt />
      <div class="p_1">
        <p class="p_2">—— 企业文化 ——</p>
        <p class="p_3">enterprise culture</p>

        <div class="content_3">
          <div class="content">
            <div class="content_1">
              <div class="case">
                <img src="../assets/image/yj.png" alt />
                <p class="p_2" style="color:#60F067;">愿景</p>
                <p class="p_3">做一流的数据分析</p>
                <p class="p_3">及应用提供商</p>
              </div>
              <div class="case">
                <img src="../assets/image/sm.png" alt />
                <p class="p_2" style="color:#8781BD;">使命</p>
                <p class="p_3">分析数据背后的本质</p>
                <p class="p_3">提供解决问题的应用！</p>
              </div>
              <div class="case">
                <img src="../assets/image/jzg.png" alt />
                <p class="p_2" style="color:#FF9955;">价值观</p>
                <p class="p_3">创新、实践、合作、共享</p>
              </div>
              <div class="case">
                <img src="../assets/image/yl2.png" alt />
                <p class="p_2" style="color:#00BCD4;">运营理念</p>
                <p class="p_3">科技服务民生</p>
                <p class="p_3">数据创造价值</p>
                <p class="p_3">合作实现共赢</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="p_1">
        <p class="p_2">—— 智天优势 ——</p>
        <p class="p_3">Zhitian advantage</p>
        <p class="p_4">快速响应&nbsp;&nbsp;&nbsp; 创新模式&nbsp;&nbsp;&nbsp; 科学运营 &nbsp;&nbsp;&nbsp; 降本增效</p>
      </div>
      <div class="youshi">
        <div class="youshi_1">
          <img src="../assets/image/sjcj1.png" alt />
        </div>
        <div class="youshi_2">
          <p class="p_4">数据采集</p>
          <p class="p_5">采用DMA、PF_RING等技术实现高速网络（GBPS）下原始数据采集。通过网络协议分析，实现网络层、应用层数据提取。</p>
          <p class="p_5">采用物联网技术、设备数据接口、移动APP、软件系统集成等技术实现广泛的业务数据采集</p>
        </div>
      </div>
      <div class="youshi">
        <div class="youshi_1" style="background:#9156BF">
          <img src="../assets/image/sjfx1.png" alt />
        </div>
        <div class="youshi_2">
          <p class="p_4">数据分析</p>
          <p class="p_5">智天自有图形分析算法，实现图片以及视频内容分析。</p>
          <p class="p_5">自建3大数据模型：网络数据模型、内容数据模型以及业务数据模型</p>
        </div>
      </div>
      <div class="youshi">
        <div class="youshi_1" style="background:#00BCD4">
          <img src="../assets/image/jjcs1.png" alt />
        </div>
        <div class="youshi_2">
          <p class="p_4">解决措施</p>
          <p class="p_5">引入人工智能技术，采用数据分析结果形成智能判断规则的持续优化能力。</p>
          <p class="p_5">引入工作流引擎，实现业务事件处理的闭环跟踪处理。</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
export default {
  name: "aboutus",
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
.aboutus {
  min-width: 1500px;
  background: #181828;
  .header1 {
    height: 640px;
    background: url("../assets/image/zu1.png") no-repeat;
    background-size: 100% 100%;
    // padding-top: 1rem;
  }

  .content1 {
    height: 2080px;
    // width: 74%;
    // background: red;
    margin: 0 auto;
    padding-top: 4.78%;
    // text-align: center;
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
          margin-left: 66px;
          font-size: 18px;
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