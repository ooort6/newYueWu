<template>
  <div class="formDemo">
    <div class="content">
      <Row>
        <i-col span="6" offset="2">
          <div class="i-col" :class="{active:shows==1}" @click="oneshow()">
            <span>资料下载</span>
          </div>
        </i-col>
        <i-col span="6" offset="1" style="display:none">
          <div class="i-col" :class="{active:shows==2}" @click="twoshow()">
            <span>解决方案</span>
          </div>
        </i-col>
        <i-col span="6" offset="1" style="display:none">
          <div class="i-col" :class="{active:shows==3}" @click="threeshow()">
            <span>第三方报告</span>
          </div>
        </i-col>
      </Row>
      <br />
      <ul>
        <li v-for="item in items" v-bind:key="item.id">
          <span class="jiantou"></span>
          <span class="ztext">{{item.file_name}}</span>
          <a :href="url+item.file_url" style=" display:block;float:right; margin-top:0%; margin-right:3% ;  z-index:999" ><span style="color:#2d8cf0">下载</span></a>
          <!-- <img class="zimg" src="@/static/image/下载.png" alt /> -->
          <span class="zdate">{{item.upload_date|formatDate}}</span>
        </li>
      </ul>
      <Row type="flex" justify="center">
        <Page class="page" :total="dataCount" @on-change="changepage" />
      </Row>
    </div>
  </div>
</template>

<script>
export default {
  name: "formDemo",
  data() {
    return {
      color1: "#D8D8D8",
      color2: "#F2F2F2",
      shows: 1,
      date: "2019-6-4",
      items: [],
      dataCount: 0,
      pageSize: 8,
      showList: [],
      totalProblemList: [],
      pageNum: 1,
      type: 1,
      company: 1,
      url:this.$common.getFileUrl()
    };
  },
  filters: {
    formatDate: function(value) {
      let date = new Date(value);
      let y = date.getFullYear();
      let MM = date.getMonth() + 1;
      MM = MM < 10 ? "0" + MM : MM;
      let d = date.getDate();
      d = d < 10 ? "0" + d : d;
      let h = date.getHours();
      h = h < 10 ? "0" + h : h;
      let m = date.getMinutes();
      m = m < 10 ? "0" + m : m;
      let s = date.getSeconds();
      s = s < 10 ? "0" + s : s;
      return y + "-" + MM + "-" + d;
    }
  },
  created() {
    // let aa=[{id:1,class:2},{id:2,class:3},{id:3,class:4}];
    // this.items=aa;
    this.action();
    console.log(this.url)
  },
  methods: {
    oneshow() {
      this.shows = 1;
    },
    twoshow() {
      this.shows = 2;
    },
    threeshow() {
      this.shows = 3;
    },
    action() {
      const _this = this;
      let params = new URLSearchParams();
      params.append("pageNum", _this.pageNum);
      params.append("pageSize", _this.pageSize);
      params.append("type", _this.type);
      params.append("company", _this.company);

      const api = this.$common.getUrl() + "webFile/findByPage.do";
      // this.$axios.post('http://192.168.1.31:8080/controlManager/bsVenue/getVenueList.do')
      this.$axios({
        method: "post",
        url: api,
        data: params,
        //headers: {'Access-Control-Allow-Origin': '*'}
      })
        .then(function(res) {
          _this.dataCount = res.data.data.totalNum;
          _this.items = res.data.data.items;
          // res=this.items;
        
          console.log(_this.dataCount);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    changepage(index) {
      this.pageNum = index;
      this.action();
      // this.$options.methods.action()
      // var _start=(index-1)*this.pageSize;
      // var _end=index*this.pageSize;
      // this.showList=this.totalProblemList.slice(_start,_end)
    }
  }
};
</script>

<style lang="scss" scoped>
.formDemo {
  // position: absolute;
  padding-top: 5%;
  width: 100%;
  height: 100%;
  background: #f6f6f6;
  .content {
    width: 60%;
    height: 100%;
    padding: 30px;
    margin: 0 auto;
    background: #fff;
  }
  ul {
    margin-top: 2%;
    margin-bottom: 2%;
    // width:
    margin-left: 8%;
    li {
      height: 54px;
      width: 90%;
      background: #f2f2f2;
      margin-bottom: 1%;
      .jiantou {
        width: 7px;
        height: 7px;
        border-top: 2px solid #828282;
        border-right: 2px solid #828282;
        transform: rotate(45deg);
        margin-left: 20px;
      }
      .ztext {
        margin-left: 8%;
        margin-top: -0.5%;
      }
      .zdate {
        float: right;
        margin-top: -3%;
        margin-right: 10%;
      }
      .zimg {
        display:block;
        margin:25% auto;
z-index:-1

      }
    }
  }
  .i-col {
    text-align: center;

    margin-right: 1%;
    background: #f2f2f2;
    width: 254px;
    height: 54px;
  }
  span {
    display: block;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    font-family: "PingFang-SC-Medium";
    font-size: 18px;
    color: #7e7e7e;
    cursor: pointer;
  }
  .active {
    background: #d8d8d8;
  }
  .page {
  }
}
</style>

