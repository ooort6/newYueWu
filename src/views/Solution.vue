<template>
  <div class="solution">
    <div class="header1">
      <div class="nav">
        <Header />
      </div>
    </div>
    <!-- <div class="banner">
      <ul>
        <li @click="sx()">网络数据分析</li>
        <li @click="nx()">内容数据分析</li>
        <li @click="yw()">业务内容分析</li>
        <li @click="$router.push({name:'others'})">其他</li>
      </ul>
    </div>-->
    <div class="content">
      <!-- <p class="p_1">—— 智天大数据处理架构 ——</p> -->
      <div class="content_1">
        <div class="c_1">
          <img src="../assets/images/v2.png" alt />
          <p class="p_2">资源统一管理</p>
          <span class="span_1">对馆内环境资源、设备资源、网络资源、应用资源、内容资源、电力资源六大类资源进行统一管理；提供资源统一视图快速检索资源</span>
        </div>

        <div class="c_1">
          <img src="../assets/images/v3.png" alt />
          <p class="p_2">智能调度控制</p>
          <span class="span_1">通过移动终端或PC完成多终端内容快速智能调度，实现针对展示设备的展示内容可视化推送；对馆内设备、网络、电力等各类资源统一控制</span>
        </div>
        <div class="c_1">
          <img src="../assets/images/v4.png" alt />
          <p class="p_2">状态实时监控</p>
          <span class="span_1">基于对展馆内的资源统一管理实时获取资源运行数据及状态，并提供可视化监控视图；异常监控数据实时告警并结合设备控制及时处理故障</span>
        </div>
        <div class="c_1">
          <img src="../assets/images/v5.png" alt />
          <p class="p_2">快速灵活布展</p>
          <span
            class="span_1"
          >提供展示主题策略配置，多类展示主线预先配置，灵活切换；基于云计算技术构建平台，满足外出快速灵活布展需求 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span>
        </div>
      </div>

      <div class="c_2">
        <span class="span_2">系统特征</span>
        <span class="span_3">The system features </span>
        <span class="span_4">MORE</span>
        <span class="span_5">+</span>
      </div>
      <div class="c_3">
        <div class="c_4">
          <div class="c_5" style="background:">
            <img src="../assets/images/v6.png" class="img_1" width="13%" alt />
            <span class="span_1">
              <span style="color:#D7361A">实用性：</span>系统能满足各种现实和潜在的需求，且达到满意的效果。
            </span>
          </div>
          <div class="c_5">
            <img src="../assets/images/v7.png" class="img_1" width="13%" alt />
            <span class="span_1">
              <span style="color:#D7361A">可靠性：</span>
              能提供长时间的连续运行，且稳定可靠。
            </span>
          </div>
        </div>

        <div class="c_4">
          <div class="c_5" style="background:">
            <img src="../assets/images/v8.png" class="img_1" width="13%" alt />
            <span class="span_1">
              <span style="color:#D7361A">先进性：</span>
              系统的功能和性能达到系统的先进水平。
            </span>
          </div>
          <div class="c_5">
            <img src="../assets/images/v9.png" class="img_1" width="13%" alt />
            <span class="span_1">
              <span style="color:#D7361A">经济性：</span>
              在满足需求的情况下，使系统建设和使用投入的成本尽量小。
            </span>
          </div>
        </div>

        <div class="c_4">
          <div class="c_5" style="background:">
            <img src="../assets/images/v10.png" class="img_1" width="13%" alt />
            <span class="span_1">
              <span style="color:#D7361A">方便性：</span>
              系统的调整、使用简单易行，用户操作界面友好，操作过程简捷，经短时间培训即可操作使用。
            </span>
          </div>
          <div class="c_5">
            <img src="../assets/images/v11.png" class="img_1" width="13%" alt />
            <span class="span_1" style="width:112%">
              <span style="color:#D7361A">灵活性：</span>
              具有灵活的再配置能力，可根据需要随时替换部分设备而无需更换设备，可根据需求的变化随时对系统进行扩展而不需要浪费原有资源。
            </span>
          </div>
        </div>
      </div>

      <div class="c_2" style="margin-top:5%">
        <span class="span_2">系统优势</span>
        <span class="span_3">System advantage</span>
        <span class="span_4">MORE</span>
        <span class="span_5">+</span>
      </div>

      <div class="c_6">
        <span class="span_1">
          1.信息发布系统和iPad前端操作无缝对接；
          <br />2.可以展示全部格式的数字资源、活动图片、集体荣誉等；
          <br />3.软件标准封装，操作简洁，可以极大的降低展厅工作人员的工作量，提高工作效率；
          <br />4.结合美学知识，系统可以从软、硬件上全面配合展厅的整体风格要求，使得展厅呈现出最好的展示效果；
          <br />5.系统平台基于windows，可以跟随展厅业务的发展做新功能扩展，减少重复建设。
        </span>
      </div>

      <div class="c_7">
        <div class="c_8">
          <span class="span_1">集中控制系统</span>
          <span
            class="span_2"
          >集中控制系统是指对声、光、电等各种硬件设备进行集中控制的完整解决方案， 将一特定环境中需要控制的设备通过一定的网络连接到一起，开发集中控制软件， 来对各个设备进行统一的管理。它应用于各种展厅、多媒体教室、多功能会议厅、指挥控制中心、智能化家庭等， 用户可使用显示设备，通过集中控制系统软件控制投影机、展示台、液晶电视、计算机、笔记本、灯光等设备的开关， 还可以对可调灯光进行灯光亮度的调节。</span>
          <span class="span_3">系统特点：</span>
          <span class="span_4" style="width:102%">
            1. 提供多种控制接口，开发者可以开发运行于各种显示终端的控制界面来作为交互界面。
            <br />2. 使用Ipad进行控制，交互体验效果好。
            <br />3. 能同时对多路设备进行控制。在控制投影机进行演播同时，能对灯光进行调光控制，达到更好的观影效果。
            <br />
4. 集成度高，设备控制方式齐全，系统扩展功能强，可靠性高等特点。低成本，高性能，高集成度，全数字化控制。
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
export default {
  name: "solution",
  components: {
    Header
  },
  watch: {
    //监听路由变化
    $route(to, from) {
      console.log(to, from);
      // to , from 分别表示从哪跳转到哪，都是一个对象
      // to.path  ( 表示的是要跳转到的路由的地址 eg: /home );
    }
  },
  mounted() {
    const _this = this;
    console.log(_this.$route.path);
  },
  methods: {
    sx() {
      this.$router.push({ path: "/networkda" });
    },
    nx() {
      this.$router.push({ path: "/contentda" });
    },
    yw() {
      this.$router.push({ path: "/businessda" });
    }
  }
};
</script>
<style lang="scss" scoped>
.solution {
  min-width: 1500px;
  background: #f8f8f8;
  .header1 {
    height: 950px;
    background: url("../assets/images/v1.png") no-repeat;
    background-size: 100%;
    // padding-top: 1rem;
  }
  .banner {
    height: 68px;
    background: #00bcd4;
    ul {
      list-style-type: none;
      padding: 0;
      display: flex;
      align-items: center;
      width: 80%;
      margin: 0 auto;
      justify-content: space-between;
      height: 100%;
    }
    li {
      display: flex;
      margin: 0 10px;
      justify-content: center;
      align-items: center;
      width: 100%;
      font-size: 24px;
      height: 100%;
      font-family: "SourceHanSansCN";
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      line-height: 40px;
      &:hover {
        background: rgba(159, 215, 252, 1);
        color: #174db0;
        cursor: pointer;
      }
    }
  }
  .content {
    height: 2300px;
    text-align: center;
    .p_1 {
      font-size: 36px;
      font-family: "SourceHanSansCN";
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      line-height: 12px;
      margin-top: 6.5%;
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
      width: 80%;
      height: 580px;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      .c_1 {
        width: 22%;
        .p_2 {
          font-size: 24px;
          font-family: "SourceHanSansCN";
          font-weight: 500;
          color: #666;
          display: block;
          margin-top: 5%;
          margin-bottom: 8%;
        }
        .span_1 {
          display: block;
          width: 82%;
          margin: 0 auto;
          // height:144px;
          font-size: 18px;
          font-family: PingFang SC;
          font-weight: 500;
          color: #666;
          text-align: left;
        }
      }
    }
    .c_2 {
      width: 67%;
      margin: 0 auto;
      // background: red;
      height: 50px;
      display: flex;
      align-items: flex-end;
      padding-bottom: 1%;
      .span_2 {
        display: block;
        float: left;
        font-size: 24px;
        font-family: Source Han Sans CN;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
        margin-right: 1%;
      }
      .span_3 {
        display: block;
        float: left;
        font-size: 18px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: rgba(153, 153, 153, 1);
        margin-right: 68%;
      }
      .span_4 {
        display: block;
        float: left;
        // width: 100%;
        justify-items: flex-end;
        font-size: 18px;
        font-family: Source Han Sans CN;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
        cursor: pointer;
      }
      .span_5 {
        display: block;
        width: 29px;
        float: right;
        font-size: 18px;
        font-family: Source Han Sans CN;
        font-weight: 500;
        height: 26px;
        margin-left: 0.5%;
        background: rgba(33, 34, 38, 1);
        border-radius: 10px;
        color: #fff;
        cursor: pointer;
      }
    }
    .c_3 {
      height: 573px;
      background: #fff;
      padding-top: 4.5%;
      .c_4 {
        width: 67%;
        // background: red;
        margin: 0 auto;
        margin-bottom: 5%;
        height: 80px;
        display: flex;
        justify-content: space-between;
        .c_5 {
          width: 47%;
          // background: blue;
          .img_1 {
            display: block;
            float: left;
            margin-right: 2%;
          }
          .span_1 {
            padding-top:2%;
            text-align: left;
            display: block;
            font-size:18px;
            font-family: PingFang SC;
            font-weight: 500;
            color: #666;
            // width: 111%;
          }
        }
      }
    }
    .c_6 {
      height: 280px;
      background: #fff;
      padding-top: 36px;
      .span_1 {
        display: block;
        margin: 0 auto;
        width: 67%;
        font-size: 18px;
        font-family: PingFang SC;
        font-weight: 500;
        color: #666666;
        text-align: left;
        line-height: 34px;
      }
    }
    .c_7 {
      height: 687px;
      background: url("../assets/images/v12.png") no-repeat;
      background-size: 100%;
      .c_8 {
        width: 780px;
        // background: red;
        height: 100%;
        margin-left: 42%;
        padding-top: 4%;
        .span_1 {
          font-size: 30px;
          font-family: PingFang SC;
          font-weight: 500;
          color: rgba(51, 51, 51, 1);
          display: block;
          margin: 0 auto;
          margin-bottom: 3%;
        }
        .span_2 {
          font-size: 18px;
          font-family: PingFang SC;
          font-weight: 500;
          color: rgba(102, 102, 102, 1);
          display: block;
          text-align: left;
          margin-bottom: 4%;
        }
        .span_3 {
          font-size: 24px;
          font-family: PingFang SC;
          font-weight: 500;
          color: rgba(51, 51, 51, 1);
          text-align: left;
          display: block;
        }
        .span_4{
          display: block;
          text-align: left;
          line-height: 34px;
          font-size:18px;
font-family:PingFang SC;
font-weight:500;
color:rgba(102,102,102,1);
        }
      }
    }
  }
}
</style>