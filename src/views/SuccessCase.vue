<template>
  <div class="case">
    <div class="header1">
      <div class="nav" style="padding-top:0">
        <Header />
      </div>
    </div>
    <div class="img_1" v-if="ins==0">
      <img src="@/assets/images/dx1.png" width="100%" alt />
    </div>
    <div class="img_1" v-if="ins==1">
      <img src="@/assets/images/x82.png" width="100%" alt />
    </div>
    <div class="img_1" v-if="ins==2">
      <img src="@/assets/images/dj1.png" width="100%" alt />
    </div>
    <div class="img_1" v-if="ins==3">
      <img src="@/assets/images/q2.png" width="100%" alt />
    </div>
    <div class="banner">
      <ul>
        <li
          v-for="(item,index) in items"
          :key="item.id"
          @click="activeShow(index)"
          :class="{active:index==ins}"
        >{{item.id}}</li>
        <!-- <li>企业</li>
        <li>运营商</li>
        <li>教育</li>-->
      </ul>
    </div>
    <div class="content1" v-if="ins==0">
      <div class="c_1">
        <p>接待区（参观接待功能）、行业区（智慧民生）、智慧城市（政府监管、产业应用）</p>
        <p>网真会议区、十二五规划区、企业区（高效协调办公）、个人区（移动个人生活）</p>
        <p>视讯区（网络综合实力）、结束区（参观功能区）</p>
      </div>
      <div class="c_2">
        <div class="content_5">
          <span class="span_1">目标定位</span>
          <br />
          <span class="span_2">
            展示馆目标: 超过国内同行业的展示馆，向国外优秀的展示馆看齐
            以转型业务和增值业务为主，突出融合业务和综合服务概念
            体现未来2~3年的技术和业务发展趋势
            中国电信新的业务模式和服务模式
            展现中国电信实力和能力，同时能体现电信的价值，并带来效益。
          </span>
          <img src="../assets/images/123456.png" width="100%" alt="">
        </div>
      </div>
    </div>

    <div class="content1" style="height:1000px" v-if="ins==1">
      <div class="c_1" style="height:220px;margin-bottom:5%">
        <p>展厅包括视频监控、人员识别、人数统计、物联网机械运动、机械损伤探测、大型拼接屏、</p>
        <p>3D模型、动态展示、工业智能化</p>
      </div>

      <div class="c_3" style="display:block">
        <img src="../assets/images/x7.png" style="margin-bottom:3%" width="100%" height="373px" alt />
        <div class="c_5">
          <span class="span_1">
          <span style="margin-bottom:-2%;display:block">
            目标定位：
            </span>  
            <br /><span style="font-size:18px;"> 展示本单位在大型机械制造领域内的新技术、新思路。</span>
            <br /><span style="font-size:18px">接待兄弟单位以及客户单位进行业务体验及交流，促进新技术的应用及推广。</span>
          </span>
        </div>
      </div>
    </div>

    <div class="content1" style="height:1300px" v-if="ins==2">
      <div class="c_1" style="height:220px;margin-bottom:5%">
        <p>党建服务中心使用面积为2345平方米，将成为全区党员教育活动的阵地、服务党组织和党员的平台、基层党建成果</p>
        <p>展示的窗口、党建项目研发的中心、统筹协调区域化党建资源的枢纽。</p>
      </div>

      <div class="c_3" style="display:block">
        <img src="../assets/images/q4.png" width="100%" height="770px" alt />
      </div>
    </div>

    <div class="content1" style="height:1500px" v-if="ins==3">
      <div class="c_1" style="height:220px;margin-bottom:5%">
        <p>于1984年由原国家科委批准成立，是国家863软件专业孵化器(上海)基地、</p>
        <p>上海市软件行业协会和上海软件园管理办公室的技术支撑单位。</p>
      </div>

      <div class="c_3" style="display:block">
        <img src="../assets/images/q1.png" style="margin-bottom:3%" width="100%" height="773px" alt />
        <div class="c_5">
          <span class="span_1" style="font-size:18px">
           <span style="font-size:24px">目标定位：
             </span> <br>
            展示上海市大数据建模与存储、大数据挖掘、大数据融合、数据可视化等关键技术及产业化情况，为政府提供决策数据支撑。
            <br />结合互动技术等领先的科技让展馆科技感与未来感十足，并充分调动参观者能动性，实现良好的参与和互动。
            <br />
在丰富内涵的基础上，辅以多媒体展览展示手段，以最直观的方式进行大数据观测体验。
          </span>
        </div>
      </div>
    </div>

    <!-- <div class="content1" v-if="ins==4" style="height:1400px">
      <div class="c_1" style="height:200px;margin-bottom:5%">
        <p>虚拟成像是由国内开发商创造的名词,是一种在三维空间中投射三维立体影像(影像为物理上的“立体"而非单纯视觉上的“立体")</p>
        <p>的次世代显示技术。</p>
      </div>

      <div class="c_3">
        <div class="c_4">
          <img src="../assets/images/z22.png" width="100%" alt />
          <span class="span_1">360°全息成像</span>
          <br />
          <span
            class="span_2"
          >将三维画面悬浮在实景的半空中成像，营造了亦幻亦真的氛围，效果奇特，具有强烈的纵深感，真假难辩。柜体时尚美观，有科技感 。顶端四面透明，真正的空间成像色彩鲜艳，对比度，清晰度高；有空间感，透视感。</span>
        </div>
        <div class="c_4">
          <img src="../assets/images/z23.png" width="100%" alt />

          <span class="span_1">3D空中投影</span>
          <br />
          <span
            class="span_2"
          >无需昂贵的设备以及眼镜等配套设施，通过透光薄膜，展示立体影象。该系统在舞台中融合了高度视觉刺激的幻像技术，可根据舞台节目进度进行幻影光效配合，另外加上一些实物或真人的配合能够做到以假乱真的光学特效。</span>
        </div>
        <div class="c_4">
          <img src="../assets/images/z24.png" width="100%" alt />

          <span class="span_1">空气立体成像系统</span>
          <br />
          <span class="span_2">是结合了国外最新技术生产的一套完整的方案，投影机将画面投射在上面，由于空气与雾墙的分子震动不均衡，可以形成层次感和立体感很强的图像。</span>
        </div>
      </div>

      <div class="c_3">
        <div class="c_4" style="width:47%">
          <img src="../assets/images/z25.png" width="100%" height="235px" alt />
          <span class="span_1">幻影成像</span>
          <br />
          <span
            class="span_2"
          >幻影成像系统是基于“实景造型”和“幻影”的光学成像结合，将所拍摄的影像（人、物）投射到布景箱中的主体模型景观中，演示故事的发展过程。绘声绘色，虚幻莫测，非常直观，给人留下较深的印象。</span>
        </div>
        <div class="c_4" style="width:47%">
          <img src="../assets/images/z26.png" width="100%" height="235px" alt />

          <span class="span_1">虚拟导览</span>
          <br />
          <span class="span_2">我们将导览员形象投射在特种玻璃屏幕上，形成科幻电影般的空间形象，在参观的起始阶段为观众指明参观方向。</span>
        </div>
      </div>
    </div>

    <div class="content1" style="height:900px" v-if="ins==5">
      <div class="c_1" style="height:0px;background:#F8F8F8;margin-bottom:5%"></div>
      <div class="c_3">
        <div class="c_4" style="width:47%">
          <img src="../assets/images/z16.png" width="100%" height="235px" alt />
          <span class="span_1">人脸识别</span>
          <br />
          <span
            class="span_2"
          >将照片中的人脸信息提取出来，可通过专用的网络业务平台进行传输，在服务器端将照片中的人脸信息与特定人员数据库中的人脸信息进行比对，进而鉴别出照片中的人员“相似”的人员身份，并获取其详细信息。</span>
        </div>
        <div class="c_4" style="width:47%">
          <img src="../assets/images/z17.png" width="100%" height="235px" alt />

          <span class="span_1">动作识别</span>
          <br />
          <span
            class="span_2"
          >用户只需要将检测端贴于被测物体表面或内部即可检测，操作简便。同时本产品支持多个检测端的组合连接，可通过不同的连接方式实现多关节物体的姿态检测以及数据手套等功能。</span>
        </div>
      </div>
    </div>

    <div class="content1" style="height:900px" v-if="ins==6">
      <div class="c_1" style="height:0px;background:#F8F8F8;margin-bottom:5%"></div>
      <div class="c_3">
        <div class="c_4" style="width:47%">
          <img src="../assets/images/z27.png" width="100%" height="235px" alt />
          <span class="span_1">虚拟现实</span>
          <br />
          <span
            class="span_2"
          >在计算机中模拟建成开发中或招商中的楼盘，用数字化的方式，直观在计算机中进行表现。同时，用户可以利用鼠标、键盘、方向杆、遥控器等操控设备，在虚拟的楼盘中进行360度全方位漫游浏览。</span>
        </div>
        <div class="c_4" style="width:47%">
          <img src="../assets/images/z28.png" width="100%" height="235px" alt />

          <span class="span_1">增强现实</span>
          <br />
          <span
            class="span_2"
          >可以模拟真实的现场景观 ,它是以交互性和构想为 基本特征的计算机高级人机界面。使用者不仅能够通过虚拟现实系统感受到在客观物理世界中所经历的“身临其境”的逼真性 ,而且能够突破空间、时间以及其它客观限制 ,感受到在真实世界中无法亲身经历的体验。</span>
        </div>
      </div>
    </div> -->
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
export default {
  name: "successcase",
  components: {
    Header
  },
  data() {
    return {
      items: [
        { id: "信息行业" },
        { id: "制造行业" },
        { id: "政府单位" },
        { id: "事业单位" }

        //  { id: "自助导览系统" }
      ],
      ins: 0
    };
  },
  watch: {
    //监听路由变化
    $route(to, from) {
      console.log(to,from)
      // if(to.path="successcase"){
      //  console.log(this.$route.query.ins) 
      // }
      // to , from 分别表示从哪跳转到哪，都是一个对象
      // to.path  ( 表示的是要跳转到的路由的地址 eg: /home );
    }
  },
  mounted() {
    const _this = this;
      // console.log(_this.$route.query.ins);
      if(_this.$route.query.ins){
     this.ins=_this.$route.query.ins

      }else{
        this.ins=0
      }
  },
  methods: {
    activeShow(index) {
      this.ins = index;
    }
  }
};
</script>
<style lang="scss" scoped>
.case {
  min-width: 1500px;
  background: #f8f8f8;
  .header1 {
    height: 95px;
    // padding-top: 0;
    // background: url("../assets/image/anli1.png") no-repeat;
    // background-size: 100% 100%;
    background: #fff;
    // padding-top: 1rem;
  }
  .img_1 {
    height: 675px;
  }
  .banner {
    height: 80px;
    background: #d83819;
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
      margin: 0 5px;
      justify-content: center;
      align-items: center;
      width: 100%;
      font-size: 16px;
      height: 100%;
      font-family: "SourceHanSansCN";
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      line-height: 40px;
      cursor: pointer;
      // &:hover {
      //   background: rgba(159, 215, 252, 1);
      //   color: #174db0;
      //   cursor: pointer;
      // }
    }
    .active {
      background: #ff401b;
      cursor: pointer;
    }
  }
  .content1 {
    height: 1220px;
    // width: 74%;
    // background: red;
    margin: 0 auto;
    // padding-top: 4.78%;
    .c_1 {
      height: 222px;
      background: #fff;
      width: 100%;
      text-align: center;
      padding-top: 4%;
      p {
        font-size: 18px;
        line-height: 30px;
        font-family: PingFang SC;
        font-weight: 500;
        color: rgba(38, 32, 34, 1);
      }
    }
    .c_2 {
      height: 896px;
      // background: red;
      padding-top:3%;
      margin-bottom: 97px;
      .content_5 {
        height: 650px;
        // background: url("../assets/images/x5.png");
        display: block;
        width: 73%;
        margin: 0 auto;
        margin-bottom: 95px;
        .span_1 {
          font-size: 24px;
          font-family: PingFang SC;
          font-weight: 500;
          color: rgba(13, 21, 35, 1);
          display: block;
          width: 100%;
        }
        .span_2 {
          font-size:18px;
          font-family: PingFang SC;
          color: rgba(13, 21, 35, 1);
          display: block;
          width: 100%;
          margin-bottom: 5%;
        }
      }
    }

    .c_3 {
      height: 420px;
      width: 72%;
      margin: 0 auto;
      // background: red;
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-bottom: 4%;
      .c_4 {
        width: 29.92%;
        height: 100%;
        background: #fff;
        .span_1 {
          font-size: 18px;
          font-family: PingFang SC;
          font-weight: bold;
          color: rgba(38, 32, 34, 1);
          margin: 1% 0 3% 3%;
          display: block;
        }
        .span_2 {
          font-size: 16px;
          font-family: PingFang SC;
          font-weight: 400;
          color: rgba(38, 32, 34, 1);
          display: block;
          width: 94%;
          margin: 0 auto;
        }
      }
      .c_5 {
        .span_1 {
          font-size: 24px;
          font-family: PingFang SC;
          font-weight: 500;
          color: rgba(51, 51, 51, 1);
          line-height: 30px;
          display: block;
          // margin-bottom: 130px;
        }
      }
    }
  }
}
</style>