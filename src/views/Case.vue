<template>
  <div class="case">
    <div class="header1">
      <div class="nav" style="padding-top:0">
        <Header />
      </div>
    </div>
    <div class="img_1">
      <img src="@/assets/images/z1.png" width="100%" alt />
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
        <p>无论在任何行业，只要您需要对您的产品进行展示，</p>
        <p>多点触摸产品永远都是您最好的选择：直观、互动。展会、商场、零售商店...都是多点触摸产品的用武之地。</p>
        <p>越梧通过使用带有网络连接的大型多点触摸屏幕（现在已经和普通LCD显示器一般大小）</p>
        <p>作为大型展牌，可以实现网络化、集成化的管理，从而极大降低整体运营成本。</p>
      </div>
      <div class="c_2">
        <div class="content_5">
          <div style="width:150%;height:350px;padding-top:3%">
            <img src="../assets/images/z4.png" style="width:100%;" alt />
          </div>
          <div class="content_6" style="padding-top:4%">
            <p class="p_1" style="margin-bottom:-20%;padding-top:10%;">
              可视化的商业数据展示
              <!-- <span class="span_1">Visual presentation of business data</span> -->
            </p>
            <p
              class="p_2"
              style="margin-bottom:70px"
            >将您的数据可视化，并通过互动的界面展示给用户， 通过多点触摸界面，用户可以轻松了解海量数据信息， 并且可以十分直观的对数据进行分析操作。</p>
          </div>
        </div>
      </div>

      <div class="c_3">
        <div class="c_4">
          <img src="../assets/images/z5.png" width="100%" alt />
          <span class="span_1">多媒体展示交互终端</span>
          <br />
          <span
            class="span_2"
          >它通过液晶显示屏幕或投影仪与交互传感器的双向整合， 利用各种网络，提供动画、视频、游戏等全方位的娱乐享受。是各品牌极佳的发布平台，受众只需轻触一块拥有触摸功能的显示屏，就可获取想关注的产品画面与信息。</span>
        </div>
        <div class="c_4">
          <img src="../assets/images/z6.png" width="100%" alt />

          <span class="span_1">虚拟试衣镜</span>
          <br />
          <span
            class="span_2"
          >基于最新虚拟现实技术和测控技术的高档时尚电子产品，虚拟试衣系统通过全高清摄像头实时捕捉现场影像，并结合体感探测装置将服装的2D图片或3D模型叠加到顾客的影像上，实现虚拟服装与真实顾客身形的完美融合。</span>
        </div>
        <div class="c_4">
          <img src="../assets/images/z7.png" width="100%" alt />

          <span class="span_1">互动魔镜</span>
          <br />
          <span
            class="span_2"
          >互动魔镜系统采用特殊材质镜面玻璃作为投影介质，投影机背投架设。参观者不仅可以照镜子，还可以用手触摸镜子表面，选择感兴趣的内容，镜面内的投影内容会被触发并与参观者形成互动。</span>
        </div>
      </div>

      <div class="c_3">
        <div class="c_4">
          <img src="../assets/images/z8.png" width="100%" alt />
          <span class="span_1">互动橱窗</span>
          <br />
          <span
            class="span_2"
          >互动橱窗系统是利用投影设备将图像投射到玻璃橱窗的普通玻璃上，顾客通过手指在橱窗外玻璃上触摸点击、拖动等控制图像，阅读文字、欣赏图片及观看视频，体验神秘和魔术般的感觉。</span>
        </div>
        <div class="c_4">
          <img src="../assets/images/z9.png" width="100%" alt />

          <span class="span_1">互动吧台</span>
          <br />
          <span
            class="span_2"
          >互动吧台系统是把互动投影与多点触控技术相结合，让普通桌面立刻变成一个多媒体互动娱乐游戏平台，图文并茂，形式新颖。参观者只需轻轻挥动手臂或触摸屏幕，就能观赏图像或参与游戏。</span>
        </div>
        <div class="c_4">
          <img src="../assets/images/z10.png" width="100%" alt />

          <span class="span_1">裸眼三维立体特效展示</span>
          <br />
          <span
            class="span_2"
          >互动魔镜系统采用特殊材质镜面玻璃作为投影介质，投影机背投架设。参观者不仅可以照镜子，还可以用手触摸镜子表面，选择感兴趣的内容，镜面内的投影内容会被触发并与参观者形成互动。</span>
        </div>
      </div>
    </div>

    <div class="content1" style="height:1500px" v-if="ins==1">
      <div class="c_1" style="height:220px;margin-bottom:5%">
        <p>互动投影系统是采用先进的计算机视觉技术和投影显示技术来营造一种奇幻动感的交互体验,系统可在你脚下产生各种特效影像</p>
        <p>让你进入一种虚实融合、亦真亦幻的奇妙世界。该项目包括水波纹、翻转、碰撞 、擦除、避让、跟随等表现形式。</p>
      </div>

      <div class="c_3">
        <div class="c_4">
          <img src="../assets/images/z11.png" width="100%" alt />
          <span class="span_1">雾幕系统</span>
          <br />
          <span class="span_2">主要由水雾构成成像介质,能够直接感触到且可以穿越的投影成像系统。人们可以从中穿过而不影响图像的展示。</span>
        </div>
        <div class="c_4">
          <img src="../assets/images/z12.png" width="100%" alt />

          <span class="span_1">纱幕</span>
          <br />
          <span class="span_2">整个展项由投影仪、双层纱幕和液晶屏组成。用投影机的画面投射到双层金属纱幕上,给人以多层次的视觉冲击。</span>
        </div>
        <div class="c_4">
          <img src="../assets/images/z13.png" width="100%" alt />

          <span class="span_1">桌面、墙面互动</span>
          <br />
          <span class="span_2">突破传统小屏幕触摸的局限,通过红外感应捕捉技术实现人机互动的展示方式,赋予了多媒体以崭新的面貌,是极富吸引力的全新多媒体展示手段。</span>
        </div>
      </div>

      <div class="c_3">
        <div class="c_4" style="width:47%">
          <img src="../assets/images/z14.png" width="100%" height="235px" alt />
          <span class="span_1">互动翻书</span>
          <br />
          <span
            class="span_2"
          >里面可以记载丰富的资料(包括动画、视频、图片)。参观者可以挥动手臂"翻阅"书籍, 自左向右或者自右向左,还可以选择章节,快速找到您想翻阅的内容,就像翻阅一本普通的杂·志一样,这就是虚拟翻书系统带来的惊喜!</span>
        </div>
        <div class="c_4" style="width:47%">
          <img src="../assets/images/z15.png" width="100%" height="235px" alt />

          <span class="span_1">互动签名台</span>
          <br />
          <span
            class="span_2"
          >互动签字台通过电子签字笔或者手指签字,让参观者可以留下文字纪念,并可以将签字内容进行美化。互动签字软件可以使用彩色打印、发送手机彩信、发动电子邮件、存储服务器硬盘等形式对签字信息做永久·性的保存。</span>
        </div>
      </div>
    </div>

    <div class="content1" style="height:900px" v-if="ins==2">
      <div class="c_1" style="height:220px;margin-bottom:5%">
        <p>传统的物理沙盘和现代化的电子设备相结合,将静态模型与多媒体触摸屏互动的结合起来。使用者通过手指点击触摸屏,通过投影</p>
        <p>或大屏幕浏览具体的多媒体介绍演示内容,得到文字、图片、视频、解说等信息的同时, 自动控制系统将同步控制模型内的灯光</p>
        <p>状态,全方位地将模型展示给参观者,赋予了模型更加生动的内涵,更好地诠释设计规划者的理念和模型这种艺术作品。</p>
      </div>

      <div class="c_3">
        <div class="c_4" style="width:47%">
          <img src="../assets/images/z2.png" width="100%" height="235px" alt />
          <span class="span_1">背光式数字沙盘</span>
          <br />
          <span
            class="span_2"
          >采用的是最新的高亮度液晶技术,数字内容精度更高,色彩饱和艳丽,亮度适应普通室内环境,无宜消耗品,·寿命超长,维护方便。由于具备以上的优势,我公司相信这种背光数字动态沙盘必将成为未来博物馆,科技馆的主要展示手段。</span>
        </div>
        <div class="c_4" style="width:47%">
          <img src="../assets/images/z3.png" width="100%" height="235px" alt />

          <span class="span_1">互动签名台</span>
          <br />
          <span
            class="span_2"
          >采用的是最新的高亮度液晶技术,数字内容精度更高,色彩饱和艳丽,亮度适应普通室内环境,无宜消耗品,·寿命超长,维护方便。由于具备以上的优势,我公司相信这种背光数字动态沙盘必将成为未来博物馆,科技馆的主要展示手段。</span>
        </div>
      </div>
    </div>

    <div class="content1" style="height:1500px" v-if="ins==3">
      <div class="c_1" style="height:220px;margin-bottom:5%">
        <p>投影拼接融合系统利用多块普通民用级显卡来进行融合,形成多通道显卡阵列,利用最新GPU计算技术对显存进行深度操作,在经</p>
        <p>过一系列运算后,输出到各个端口,并直接接投影机进行输出。在进行像素复制后,再通过后期的shader模型进行渲染优化,使得投</p>
        <p>影输出的图像可以在弧面等任意不规则曲面上显示光滑清晰的图像。能实现桌面机融合和视频融合。</p>
      </div>

      <div class="c_3">
        <div class="c_4" style="width:47%">
          <img src="../assets/images/z18.png" width="100%" height="235px" alt />
          <span class="span_1">球幕影院</span>
          <br />
          <span
            class="span_2"
          >银幕形如一个大半球,斜扣在观众厅之上,把观众包围在其中。其超大的天穹形银幕和六路立体还音系统,以超人眼视角的画面和逼真的环绕音响效果,让观众置身于电影的景观中,有着极为真实的临场效果。</span>
        </div>
        <div class="c_4" style="width:47%">
          <img src="../assets/images/z19.png" width="100%" height="235px" alt />

          <span class="span_1">球幕</span>
          <br />
          <span
            class="span_2"
          >当我们播放的视频在变化时,观众可以感觉到外投球在旋转,就好像地球在自转一样。经过曲边校正和无缝拼接技术,在外投球上形成一个完整的图像,播放内容根据客户要求订制。</span>
        </div>
      </div>

      <div class="c_3">
        <div class="c_4" style="width:47%">
          <img src="../assets/images/z20.png" width="100%" height="235px" alt />
          <span class="span_1">DLP大屏幕拼接</span>
          <br />
          <span class="span_2">DLP大屏幕投影显示系统作为当今最现代的视讯工具之一，已经被广泛地应用于国民经济生产的各个领域。</span>
        </div>
        <div class="c_4" style="width:47%">
          <img src="../assets/images/z15.png" width="100%" height="235px" alt />

          <span class="span_1">无缝等离子拼接大屏幕</span>
          <br />
          <span
            class="span_2"
          >具有良好的灵活性、兼容性、扩展性和可移植性。系统可直接接入计算机RGB信号、视频信号外,还可接入网络信号 ,通过对信号系统各种计算机图文及网络信息、视频图像信息的动态综合显示,操控自如。</span>
        </div>
      </div>
    </div>

    <div class="content1" v-if="ins==4" style="height:1400px">
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
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
export default {
  name: "case",
  components: {
    Header
  },
  data() {
    return {
      items: [
        { id: "多点触控软硬件解决方案" },
        { id: "互动投影" },
        { id: "电子沙盘系统" },
        { id: "投影拼接融合" },
        { id: "虚拟成像" },
        { id: "识别系统" },
        { id: "增强现实" }

        //  { id: "自助导览系统" }
      ],
      ins:0
    };
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
    height: 619px;
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
    height: 1920px;
    // width: 74%;
    // background: red;
    margin: 0 auto;
    // padding-top: 4.78%;
    .c_1 {
      height: 252px;
      background: #f0f0f0;
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
      height: 496px;
      // background: red;
      padding-top: 5%;
      border-bottom: 2px solid #e1e1e1;
      margin-bottom: 97px;
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
          // width: 800px;
          // background: #001d88;
          display: flex;
          justify-content: left;
          // align-items: center;
          flex-flow: wrap;
          .p_1 {
            font-size: 24px;
            font-family: "SourceHanSansCN";
            font-weight: 500;
            color: #262022;
            line-height: 20px;
            text-align: left;
            .span_1 {
              font-size: 18px;
              font-family: "SourceHanSansCN";
              font-weight: 500;
              color: #807e7e;
              line-height: 50px;
              text-align: left;
            }
          }
          .p_2 {
            font-size:18px;
            font-family: "SourceHanSansCN";

            font-weight: 500;
            color: #262022;
            line-height: 30px;
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
          font-size: 24px;
          font-family: PingFang SC;
          font-weight: 500;
          color: rgba(38, 32, 34, 1);
          margin: 1% 0 0% 3%;
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
    }
  }
}
</style>