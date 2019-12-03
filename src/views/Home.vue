<template>
  <div class="home">
    <div class="header1">
      <div class="nav">
        <Header />
      </div>
      <div class="content">
        <!-- <img src="@/assets/images/lxwm.png" class="img_1"  alt="">
        <div class="lunbo_2">-->
        <!-- </div> -->
       <a class="a_1" href="#miao" style="width:270px;height:220px;"></a> <img src="@/assets/images/lxwm.png" class="img_1" alt />
        <Row style="height:100%">
          <Col span="6" :offset="4" class="col_1" style="background:;height:100%">
            <div class="lunbo_1">
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
            </div>
          </Col>
          <Col span="11" class="col_2" style="background:;height:100%">
            <div class="lunbo_2">
              <div class="swiper-container">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <img src="@/assets/images/tu1.png" width="100%" alt />
                  </div>
                  <div class="swiper-slide">
                    <img src="@/assets/images/tu2.png" width="100%" alt />
                  </div>
                  <div class="swiper-slide">
                    <img src="@/assets/images/tu3.png" width="100%" alt />
                  </div>
                  <div class="swiper-slide">
                    <img src="@/assets/images/tu4.png" width="100%" alt />
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

    <div class="content">
      <span class="span_1">
        <img src="@/assets/images/222.png" alt />
      </span>
      <span class="span_2">
        我们不仅仅是一家展示技术公司，我们更是你的营销辅助专家。
        <br />我们构建的展厅，将使：
        <br />1、您的技术方案成为客户项目规划阶段的技术标准；
        <br />2、您的产品成为客户采购决策阶段的最佳选择。
        <br />因为，我们深知：
        <br />领先的核心技术，精锐的销售团队，强大的支撑团队。在今天的知识经济时代，这些都不是企业在激烈竞争中制胜的唯一法宝
      </span>
    </div>

    <div class="fenxi">
      <div class="fenxi_t">
        <img src="@/assets/images/223.png"  alt />
      </div>
      <div class="fenxi_b">
        <img src="@/assets/images/114.png" @click="$router.push({ path: '/successcase', query: { ins: 0 } })" alt />
        <img src="@/assets/images/113.png"  @click="$router.push({ path: '/successcase', query: { ins: 1 } })" alt />
        <img src="@/assets/images/112.png"  @click="$router.push({ path: '/successcase', query: { ins: 2 } })" alt />
        <img src="@/assets/images/111.png"  @click="$router.push({ path: '/successcase', query: { ins: 3 } })" alt />
      </div>
    </div>

    <div class="cp">
       <a name="miao"></a>
      <div class="c_2" style="margin-top:5%">
        <span class="span_2">联系我们</span>
        <span class="span_3">CONTACT</span>
        <span class="span_4">MORE</span>
        <span class="span_5">+</span>
      </div>
      <div class="c_3">
        <div class="span_1" style="height:30%;background:"></div>
        <div class="span_2" style="height:30%;background:">良好的服务从一次愉快的沟通开始</div>
        <div class="span_3" style="height:30%;">
          <div class="span_4">
            <img src="../assets/images/dh.png" width="3%" style="margin-right:2%" alt /> 电话：021-2281-9090
          </div>
          <div class="span_4">
            <a href="tencent://message/?uin=522272806" style="color:red">
              <img src="../assets/images/qq.png"  width="3%" style="margin-right:3%" alt />QQ:522272806
              <span
                style="font-size:16px;
font-family:Source Han Sans CN;
font-weight:400;
color:rgba(136,136,136,1);"
              >(点击QQ,即可在线咨询)</span>
            </a>
          </div>
          <div class="span_4">
            <img src="../assets/images/yx.png"  width="3%" style="margin-right:2%" alt />邮箱：xiaoshou@yuewu.info
          </div>
        </div>
      </div>

      <div class="fo_1" style="width:72.03%;margin:0 auto;padding:50px;height:500px">
       
        <Form
          ref="formValidate"
          :model="formValidate"
          :rules="ruleValidate"
          label-position="left"
          :label-width="0"
        >
          <Row style="margin-bottom:3%;display:flex; justify-content: space-between;">
            <Col span="7">
              <FormItem prop="phone">
                <Input
                  style="background-color:transparent"
                  placeholder="电话："
                  v-model="formValidate.phone"
                ></Input>
              </FormItem>
            </Col>
            <Col span="7">
              <FormItem prop="email">
                <Input
                  style="background-color:transparent"
                  placeholder="邮箱："
                  v-model="formValidate.email"
                ></Input>
              </FormItem>
            </Col>
            <Col span="7">
              <FormItem prop="company_address">
                <Input
                  style="background-color:transparent"
                  placeholder="地址："
                  v-model="formValidate.company_address"
                ></Input>
              </FormItem>
            </Col>
          </Row>

          <FormItem
            label
            :label-width="0"
            prop="cooperation_intention"
            style="margin-bottom:8%;margin:0 auto 8% auto;width:94%"
          >
            <Input
              v-model="formValidate.cooperation_intention"
              type="textarea"
              :autosize="{minRows: 5,maxRows:6}"
              placeholder="内容："
            ></Input>
          </FormItem>

          <Row>
            <Col span="3" offset="7">
              <div class="btn_1" @click="handleSubmit('formValidate')">提交留言</div>
            </Col>
            <!-- <Col span="6" offset="6">
              <div class="btn_1" @click="handleSubmit('formValidate')">提交</div>
            </Col>
            <Col span="1"></Col>
            <Col span="11">
              <div class="btn_2" @click="handleReset('formValidate')">重置</div>
            </Col>-->
          </Row>
        </Form>
      </div>
    </div>
    <div class="aboutus">
      <div class="ab_1">
        <img src="@/assets/images/aboutus.png" alt />
      </div>
      <!-- <div style="height:40%"></div> -->
      <span
        class="span_3"
      >上海越梧信息科技有限公司是一家专注于展览展示系统研发以及业务展示创意设计的高科技公司。公司核心团队成员均具备丰富的展览展示行业经验。
公司首创“以内容为核心”的展示理念。摒弃复杂的展示场景设计，采用直接简单的展示方式，聚焦客户最核心的优势和价值，助力客户事业发展。
公司以人工智能技术为核心，以各种高科技数字化展示技术手段如：全息投影、VR、AR、大数据可视化等为辅助，完成了诸多展示场馆及临展的设计及实施工作。客户范围跨越政府、电信运营商、大型制造企业、电力、能源等多个行业。</span>
      <!-- <span
        class="span_4"
      >公司现有员工50多人，其中研发及设计人员占比超过80%。公司以人工智能技术为核心，以各种高科技数字化展示技术手段如：全息投影、VR、AR、大数据可视化等为辅助，完成了诸多展示场馆及临展的设计及实施工作。客户范围跨越政府、电信运营商、大型制造企业、电力、能源等多个行业。</span> -->
    </div>
    <!-- <Modal v-model="visible" title="Welcome">Welcome to iView</Modal> -->
    <Modal v-model="modal3" class-name="vertical-center-modal" footer-hide>
      <img src="@/assets/image/tc.png" width="100%" style="margin:0 auto;display:block" alt />
      <!-- <div slot="footer" style="background:black"> -->
      <!-- <img src="@/assets/image/qx.png"  alt=""> -->
      <!-- </div> -->
    </Modal>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";

export default {
  name: "home",
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
      autoplay: true,
      // autoplayDisableOnInteraction:false,
      //  preventInteractionOnTransition : false,
      pagination: {
        el: ".swiper-pagination"
      }
    });
    var swiper = new Swiper(".swiper-container1", {
      loop: true,
      autoplay: true
    });
  },
  methods: {
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
  .a_1{
    z-index: 999;
     cursor: pointer;
    position: fixed;
    right: 0;
    top: 35%;
    // background: #fff;
  }
  .header1 {
    height: 780px;
    background: url("../assets/images/di.png") no-repeat;
    background-size: 100% 100%;
    // padding-top: 1rem;

    .nav {
    }
    .content {
      .col_3 {
        display: flex;
        justify-content: center;
        align-items: center;
        .img_1 {
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
          padding-top: 30%;
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
          margin-top: 16.9%;
          margin-left: 8.7%;

          width: 85%;
          height: 91%;
          // background: blue;

          .swiper-container {
            width: 100%;
            height: 100%;
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
          }
        }
      }
    }
  }
  .content {
    height: 420px;

    .span_1 {
      margin-top: 96px;
      text-align: center;
      font-size: 29px;
      display: block;
      font-family: PingFang SC;
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
      margin-bottom: 70px;
    }
    .span_2 {
      width: 72.03%;
      height: 260px;
      margin: 0 auto;
      // background: red;
      display: block;
      font-size: 18px;
      font-family: PingFang SC;
      font-weight: 500;
      line-height: 38px;
      color: rgba(102, 102, 102, 1);
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
      img{
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
