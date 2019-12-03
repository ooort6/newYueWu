<template>
  <div class="home">
    <div class="header1">
      <!-- <div class="nav">
        <Header />
      </div>-->

      <div class="content">
        <!-- <img src="@/assets/images/lxwm.png" class="img_1"  alt="">
        <div class="lunbo_2">-->
        <!-- </div> -->
        <!-- <div class="lunbo_1">
              <div class="swiper-container">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <img src="@/assets/images/wn1.png" width="100%" alt />
                  </div>
                  <div class="swiper-slide">
                    <img src="@/assets/images/wn2.png" width="100%" alt />
                  </div>
                  <div class="swiper-slide">
                    <img src="@/assets/images/wn3.png" width="100%" alt />
                  </div>
                  <div class="swiper-slide">
                    <img src="@/assets/images/wn4.png" width="100%" alt />
                  </div>
                </div>
              </div>
        </div>-->
        <div class="lunbo_2">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="btn_1" @click="$router.push({name:'home'})">
                  <span class="span_1">点击了解更多</span>
                </div>
                <img src="@/assets/images/11111111.png" width="100%" alt />
              </div>
              <div class="swiper-slide">
                <div class="btn_1" @click="$router.push({name:'home'})">
                  <span class="span_1">点击了解更多</span>
                </div>
                <img src="@/assets/images/3333333.jpg" width="100%" alt />
                <div class="posi">
                  <a
                    href="http://www.ztist.com/M01/file/002dbadc-5912-4e54-859e-e3e0c3cf4b9c.pdf"
                    style="color:#fff"
                  >文档下载</a>
                </div>
                <div class="posi1" @click="info">软件演示</div>
              </div>

              <div class="swiper-slide">
                <div class="btn_1" @click="$router.push({name:'home'})">
                  <span class="span_1">点击了解更多</span>
                </div>
                <img src="@/assets/images/22222222.jpg" width="100%" alt />
                <div class="posi">
                  <a
                    href="http://www.ztist.com/M01/file/002dbadc-5912-4e54-859e-e3e0c3cf4b9c.pdf"
                    style="color:#fff"
                  >文档下载</a>
                </div>

                <div class="posi1" @click="info">软件演示</div>
              </div>
              <div class="swiper-slide">
                <div class="btn_1" @click="$router.push({name:'home'})">
                  <span class="span_1">点击了解更多</span>
                </div>
                <img src="@/assets/images/4444444.jpg" width="100%" alt />
                <div class="posi">
                  <a
                    href="http://www.ztist.com/M01/file/002dbadc-5912-4e54-859e-e3e0c3cf4b9c.pdf"
                    style="color:#fff"
                  >文档下载</a>
                </div>

                <div class="posi1" @click="info">软件演示</div>
              </div>
            </div>
              <div class="swiper-button-prev"></div><!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
    <div class="swiper-button-next"></div><!--右箭头。如果放置在swiper-container外面，需要自定义样式。-->
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="content">
      <span class="span_1">产品功能特点</span>
      <span class="span_3"></span>
      <span class="span_2">
        <div class="box_1">
          <img src="../assets/images/nr.png" width="30%" alt />
          <span class="span_4">
            所有业务资料、媒体内容上传服务器端。
            保证展示内容快速更新及版本一致性。
          </span>
        </div>
        <div class="box_1">
          <img src="../assets/images/sx.png" width="30%" alt />
          <span class="span_4">
            移动终端轻松操控演示内容，提升展示内容针对性，
            提升展位空间利用率。降低展会布展费用。
          </span>
        </div>
        <div class="box_1">
          <img src="../assets/images/jj.png" width="30%" alt />
          <span class="span_4">
            降低业务讲解人员技术背景需求，
            减少展会期间专业技术支撑人员，降低人力成本。
          </span>
        </div>
      </span>

      <span class="span_2">
        <div class="box_2">
          <div style="width:100%">
            <img src="../assets/images/gx.png" width="17%" alt />
          </div>
          <span class="span_4">可实现一键开关设备以及设备状态实时监控功能，提升运维人员工作效率。</span>
        </div>
        <div class="box_2" style="float:right;width:38%">
          <div style="width:100%">
            <img src="../assets/images/fw.png" width="22%" height alt />
          </div>
          <span class="span_4">会展以及客户接待期间，快速接待氛围营造，增强客户接待仪式感。</span>
        </div>
      </span>
    </div>

    <!-- <Modal v-model="visible" title="Welcome">Welcome to iView</Modal> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";

export default {
  name: "advertisement",
  components: {
    Header
  },
  data() {
    return {
      isShow: false,
      modal3: false,
      formValidate: {
        email: "",
        phone: "",
        our_company_type: 2,
        cooperation_intention: "",
        company_address: ""
      },
      ruleValidate: {
        phone: [
          //   { required: true, message: "手机号码不能为空", trigger: "blur" },
          { required: true, message: "手机号不能为空", trigger: "blur" }
        ],
        email: [
          { required: true, message: "邮箱不能为空", trigger: "blur" }
          // { type: "email", message: "请填写正确的邮箱", trigger: "blur" },
          // { message: "请填写正确的邮箱", trigger: "blur" }
        ],
        company_address: [
          { required: true, message: "地址不能为空", trigger: "blur" }
          // { type: "email", message: "请填写正确的邮箱", trigger: "blur" },
        ],
        cooperation_intention: [
          { required: true, message: "内容不能为空", trigger: "blur" }
          // { type: "email", message: "请填写正确的邮箱", trigger: "blur" },
        ]
      }
    };
  },
  watch: {
    //监听路由变化
    $route(to, from) {
      // console.log(to.path, from.path);
      // to , from 分别表示从哪跳转到哪，都是一个对象
      // to.path  ( 表示的是要跳转到的路由的地址 eg: /home );
    }
  },
  mounted() {
    var swiper = new Swiper(".swiper-container", {
      loop: true,
      autoplay: {
        delay: 4000
      },
      // autoplayDisableOnInteraction:false,
      //  preventInteractionOnTransition : false,
        navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
      pagination: {
        el: ".swiper-pagination"
      }
    });
    // var swiper = new Swiper(".swiper-container1", {
    //   loop: true,
    //   autoplay: {
    //     delay: 4000
    //   }
    // });
  },
  methods: {
    info() {
      this.$Message.info("敬请期待！");
    },
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        console.log(valid);
        if (valid) {
          const _this = this;
          let params = new URLSearchParams();
          const api = this.$common.getUrl() + "/webForm/add";
          params.append("phone", _this.formValidate.phone);
          params.append("email", _this.formValidate.email);
          params.append("company_address", _this.formValidate.company_address);
          params.append(
            "our_company_type",
            _this.formValidate.our_company_type
          );
          params.append(
            "cooperation_intention",
            _this.formValidate.cooperation_intention
          );
          this.$axios({
            method: "post",
            url: api,
            data: params
          }).then(function(res) {
            if (res.data.status == "000") {
              // _this.$Message.info(res.data.message);
              _this.modal3 = true;
              _this.$refs[name].resetFields();
            } else {
              _this.$Message.info(res.data.message);
            }
            console.log(res);
          });

          console.log(_this.formValidate);
        } else {
          _this.$Message.info(res.data.message);
        }
      });
    },

    show() {
      alert(1);
    },
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
.home {
  min-width: 1500px;
  // background: url("../assets/image/bj.png") no-repeat;
  background-size: 100%;
  .img_1 {
    cursor: pointer;
    position: fixed;
    right: 0;
    top: 35%;
  }
  .a_1 {
    z-index: 999;
    cursor: pointer;
    position: fixed;
    right: 0;
    top: 35%;
    // background: #fff;
  }
  .nav {
    height: 90px;
    width: 100%;
    padding-left: 80%;
    display: flex;
    align-items: center;
    float: right;
    // margin-right: 2%;
    .btn_1 {
      width: 218px;
      cursor: pointer;
      height: 70px;
      background: rgba(40, 84, 245, 1);
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;

      .span_1 {
        font-size: 24px;
        font-family: PingFang SC;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        line-height: 30px;
      }
    }
  }
  .header1 {
    height: 1080px;
    // padding-top: 1rem;

    .content {
      .lunbo_2 {
        width: 100%;
        height: 100%;
        // background: blue;
        .swiper-container {
          width: 100%;
          // height: 100%;
        }
        .swiper-slide {
          text-align: center;
          font-size: 18px;
          background: #fff;

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
          .btn_1 {
            width: 218px;
            cursor: pointer;
            height: 70px;
            background: rgba(40, 84, 245, 1);
            border-radius: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            top: 5%;
            right: 5%;
            .span_1 {
              font-size: 24px;
              font-family: PingFang SC;
              font-weight: 500;
              color: rgba(255, 255, 255, 1);
              line-height: 30px;
              height: 93px;
            }
          }
          .posi {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 115px;
            height: 43px;
            background: rgba(71, 174, 253, 1);
            border-radius: 22px;
            position: absolute;
            top: 610px;
            left: 110px;
            font-size: 18px;
            color: #fff;
            cursor: pointer;
          }
          .posi1 {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 115px;
            height: 43px;
            background: rgba(71, 174, 253, 1);
            border-radius: 22px;
            position: absolute;
            top: 610px;
            left: 250px;
            font-size: 18px;
            color: #fff;
            cursor: pointer;
          }
        }
      }
    }
  }
  .content {
    height: 620px;

    .span_1 {
      margin-top: 70px;
      text-align: center;
      display: block;
      font-weight: bold;
      margin-bottom: 10px;
      font-size: 36px;
      font-family: PingFang SC;
      font-weight: 500;
      color: rgba(48, 48, 48, 1);
    }
    .span_3 {
      display: block;
      margin: 0 auto;
      width: 78px;
      height: 2px;
      background: rgba(39, 116, 243, 1);
      border-radius: 1px;
      margin-bottom: 100px;
    }
    .span_2 {
      width: 72.03%;
      height: 160px;
      margin: 0 auto;
      margin-bottom: 5%;
      // background: red;
      display: flex;
      justify-content: space-between;
      font-size: 18px;
      font-family: PingFang SC;
      font-weight: 500;
      line-height: 38px;
      color: rgba(102, 102, 102, 1);
      .box_1 {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        width: 27%;
        .span_4 {
          font-size: 16px;
        }
      }
      .box_2 {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        width: 50%;
        .span_4 {
          font-size: 16px;
        }
      }
    }
  }
  .content_r {
    display: block;
    float: right;
    margin-top: 7%;
  }
  .fenxi {
    // display: flex;
    height: 695px;
    background: url("../assets/images/bijing1.png");
    background-size: 100%;
    // cursor: pointer;
    .fenxi_t {
      height: 170px;
      margin: 0 auto;
      // background: red;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
    }
    .fenxi_b {
      width: 75.03%;
      display: flex;
      justify-content: space-around;
      margin: 0 auto;

      align-items: center;
      height: 385px;
      img {
        cursor: pointer;
      }
    }
  }

  .cp {
    height: 920px;
    text-align: center;
    /deep/.ivu-input {
      background-color: transparent;
      color: #999;
      height: 40px;
      font-size: 18px;
    }
    .vertical-center-modal {
      display: flex;
      align-items: center;
      justify-content: center;

      .ivu-modal {
        top: 0;
      }
    }
    // padding-top: 94px;
    .c_2 {
      width: 75.03%;
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
        margin-right: 75%;
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
      width: 75.03%;
      margin: 0 auto;
      height: 270px;
      // background: red;
      border-bottom: 1px solid #212226;
      .span_2 {
        font-size: 30px;
        font-family: Source Han Sans CN;
        font-weight: 500;
        color: rgba(33, 34, 38, 1);
        margin-bottom: 2%;
      }
      .span_3 {
        display: flex;
        justify-content: center;
        .span_4 {
          font-size: 18px;
          font-family: Source Han Sans CN;
          font-weight: 500;
          color: rgba(33, 34, 38, 1);
          width: 30%;
        }
      }
    }
    .fo_1 {
      .btn_1 {
        width: 421px;
        height: 59px;
        background: linear-gradient(
          -90deg,
          rgba(230, 50, 41, 1),
          rgba(195, 13, 35, 1)
        );
        border-radius: 10px;

        font-size: 24px;
        font-family: Source Han Sans CN;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        line-height: 59px;
        cursor: pointer;
      }
    }
  }
  .aboutus {
    height: 675px;
    background: url("../assets/images/bj33.png") no-repeat;
    background-size: 100%;
    // background: red;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    .ab_1 {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 34%;
    }
    .span_3 {
      text-indent: 2em;
      display: block;
      width: 63.75%;
      line-height: 44px;
      height: 65%;
      font-size: 24px;
      font-family: PingFang SC;
      font-weight: 100;
      color: rgba(249, 244, 244, 1);
    }
    // .span_4 {
    //   text-indent: 2em;
    //   display: block;
    //   line-height: 44px;

    //   width: 63.75%;
    //   height: 25%;
    //   font-size: 18px;
    //   font-family: PingFang SC;
    //   font-weight: 500;
    //   color: rgba(249, 244, 244, 1);
    // }
  }
}
</style>
