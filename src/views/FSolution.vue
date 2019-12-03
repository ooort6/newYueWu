<template>
  <div class="solution">
    <div class="header1">
      <div class="nav">
        <Header />
      </div>
         <div class="content">
        <!-- <img src="@/assets/images/lxwm.png" class="img_1"  alt="">
        <div class="lunbo_2">-->
        <!-- </div> -->
        <Row style="height:100%">
          <Col span="6" :offset="4" class="col_1" style="background:;height:100%">
           
          </Col>
          <Col span="11" class="col_2" style="background:;height:100%">
            <div class="lunbo_2">
              <div class="swiper-container">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <img src="@/assets/images/v13.png" width="100%" alt />
                  </div>
                  <div class="swiper-slide">
                    <img src="@/assets/images/v15.png" width="100%" alt />
                  </div>
                
                </div>
                <div class="swiper-pagination"></div>
              </div>
            </div>
          </Col>
          <Col span="3" class="col_3" style="background:;height:100%">
           
          </Col>
        </Row>
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
      <p class="p_1">智能视频分析系统</p>
      <p class="p_2">INTELLIGENT VIDEO ANALYSIS SYSTEM</p>

      <div class="content_1">
        <div class="c_1">
          <img src="../assets/images/v16.png" alt />
          <p class="p_2">视频分析能力</p>
          <span class="span_1">客流分析能力、行为能力、车辆识别、人脸识别</span>
        </div>

        <div class="c_1">
          <img src="../assets/images/v17.png" alt />
          <p class="p_2">安防监控能力</p>
          <span class="span_1">消防监控能力、防盗入侵监控能力、电梯告警能力、门禁管理能力、电子围栏、视频实时监控、视频回看、摄像头管理</span>
        </div>
        <div class="c_1">
          <img src="../assets/images/v18.png" alt />
          <p class="p_2">GIS地图能力</p>
          <span class="span_1">基于地图网络分析、电视墙展示</span>
        </div>
        <div class="c_1">
          <img src="../assets/images/v19.png" alt />
          <p class="p_2">数据分析能力</p>
          <span
            class="span_1"
          >告警统计分析、日常数据监控</span>
        </div>
      </div>
<div class="white" style="height:132px;background:#fff;">
      <p class="p_1">高精度定位系统</p>
      
      <p class="p_2">HIGH-PRECISION POSIOTIONING SYSTEM</p>
</div>

<div style="height:650px;background:#eaeaea;width:100%">
  <div class="content_1" >
        <div class="c_1">
          <img src="../assets/images/v20.png" alt />
          <p class="p_2">实时位置定位</p>
          <span class="span_1">使用者能关注重点区域的人员实时分布情况满足不同定位需求：存在性检测、1D、2D、3D</span>
        </div>

        <div class="c_1">
          <img src="../assets/images/v21.png" alt />
          <p class="p_2">电子栅栏功能</p>
          <span class="span_1">定位目标进入禁区，如危险区或涉密区等严控范围，系统报警，提供管理参考</span>
        </div>
        <div class="c_1">
          <img src="../assets/images/v22.png" alt />
          <p class="p_2">突发情况报警</p>
          <span class="span_1">定位目标遇突发情况按下标签设备的定位按钮，监控画面立即触发报警时间并纪录</span>
        </div>
        <div class="c_1">
          <img src="../assets/images/v23.png" alt />
          <p class="p_2">统计与查询</p>
          <span
            class="span_1"
          >管理者可查看任意区域、任何目标信息状况，支持历史数据查询、支持统计与报表打印</span>
        </div>
      </div>
</div>
    
       <div class="c_6">
        <span class="span_1">
          展览馆内通常需要对来访人员进行统计和贵重物品跟踪，为馆方提供可靠的人员行走分析及物品定位，可以提高展馆的有效性和科技含量。
          <br />展厅人员定位解决方案，采用超宽带（UWB）实时定位系统。通过在展馆内布设一定数量的基站Anchor），实时精确地定位人员佩戴的标签（Tag），准确实时地将人员的位置信息反馈到监控中心，方便管理人员监控、调度以及后期行为分析等，该系统精度最高可达到10cm。 
        </span>
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

       var swiper = new Swiper(".swiper-container", {
      loop: true,
      autoplay: true,
      //  preventInteractionOnTransition : true,
      pagination: {
        el: ".swiper-pagination"
      }
    });
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
    background: url("../assets/images/v14.png") no-repeat;
    background-size: 100%;
    // padding-top: 1rem;
     .content {
        height: 603px;
      .col_3 {
        display: flex;
        justify-content: center;
        align-items: center;
        .img_1{
          position: absolute;
          right: 0;
          top: 40%;
        }
      }
      .col_1 {
        display: flex;
        justify-content: center;
        align-items: center;
        .lunbo_1 {
          width: 100%;
          height: 100%;
          // padding-top: 30%;
          .swiper-container {
            width: 100%;
            height: 100%;
          }
          .swiper-slide {
            text-align: center;
            font-size: 18px;
            // background: #fff;

            /* Center slide text vertically */
            display: -webkit-box;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            -webkit-justify-content: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            -webkit-align-items: center;
            align-items: center;
          }
        }
      }
      .col_2 {
        .lunbo_2 {
          margin-top:16.9%;
          margin-left: 8.7%;

          width: 85%;
          height: 90%;
          // background: blue;

          .swiper-container {
            margin-left: 20%;
            width: 100%;
            height: 100%;
          }
          .swiper-slide {
            text-align: center;
            font-size: 18px;
            // background: #fff;

            /* Center slide text vertically */
            display: -webkit-box;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            -webkit-justify-content: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            -webkit-align-items: center;
            align-items: center;
          }
        }
      }
    }
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
    height: 1650px;
    text-align: center;
    .p_1 {
     font-size:30px;
font-family:PingFang SC;
font-weight:500;
color:rgba(9,30,51,1);
      margin-top: 6.5%;
      padding-top: 1%;
    }
    .p_2 {
    font-size:18px;
font-family:PingFang SC;
font-weight:500;
color:rgba(153,153,153,1);
  
    }
    
    .content_1 {
      // background: red;
      width: 80%;
      height: 550px;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: -5%;
      .c_1 {
        width: 22%;
        height: 410px;
        .p_2 {
          font-size: 24px;
          font-family: "SourceHanSansCN";
          font-weight: 500;
          color: #1f3245;
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
          color: rgba(31, 50, 69, 1);
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
        font-size: 26px;
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
            text-align: left;
            display: block;
            font-size: 24px;
            font-family: PingFang SC;
            font-weight: bold;
            color: #666;
            // width: 111%;
          }
        }
      }
    }
    .c_6 {
      height: 240px;
      background: #fff;
      padding-top: 77px;
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
          font-size: 32px;
          font-family: PingFang SC;
          font-weight: bold;
          color: rgba(51, 51, 51, 1);
          display: block;
          margin: 0 auto;
          margin-bottom: 3%;
        }
        .span_2 {
          font-size: 24px;
          font-family: PingFang SC;
          font-weight: 400;
          color: rgba(102, 102, 102, 1);
          display: block;
          text-align: left;
          margin-bottom: 4%;
        }
        .span_3 {
          font-size: 26px;
          font-family: PingFang SC;
          font-weight: bold;
          color: rgba(51, 51, 51, 1);
          text-align: left;
          display: block;
        }
        .span_4{
          display: block;
          text-align: left;
          line-height: 34px;
          font-size:20px;
font-family:PingFang SC;
font-weight:400;
color:rgba(102,102,102,1);
        }
      }
    }
  }
}
</style>