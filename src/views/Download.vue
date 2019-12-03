<template>
  <div class="download">
    <div class="header1">
      <div class="nav">
        <Header />
      </div>
      <div class="content1">
          <span class="span_1">智天资料下载区：</span>
            <ul>
        <li v-for="item in items" v-bind:key="item.id">
          <!-- <span class="jiantou"></!--> 
          <span class="ztext">{{item.file_name}}</span>
          <a :href="url+item.file_url" style=" display:block;float:right; margin-top:-0.5%; margin-right:26% ;  z-index:999" ><span style="color:#00E2FF">下载>></span></a>
          <!-- <img class="zimg" src="@/static/image/下载.png" alt /> -->
          <span class="zdate">{{item.upload_date|formatDate}}</span>
        </li>
      </ul>
      <Row type="flex" justify="center">
        <Page class="page" :total="dataCount" @on-change="changepage" />
      </Row>
      </div>
    </div>

    <!-- <div class="content3">
  
    </div> -->
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
export default {
  name: "download",
  components: {
    Header
  },
  data() {
    return {
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
  watch: {
    //监听路由变化
    $route(to, from) {
      // to , from 分别表示从哪跳转到哪，都是一个对象
      // to.path  ( 表示的是要跳转到的路由的地址 eg: /home );
    }
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
  created(){
    this.action();
  },
  mounted() {
    const _this = this;
  },
  methods: {
    // activeShow(index) {
    //   this.ins = index;
    // }
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
.download {
  min-width: 1500px;
  background: #181828;
  .header1 {
    height: 1000px;
    background: url("../assets/image/bi1.png") no-repeat;
    background-size: 100% 110%;
    // padding-top: 1rem;
    .content1{
      // height: 200px;
      // background: red;
      .span_1{
font-size:24px;
font-family:"SourceHanSansCN";
font-weight:500;
color:rgba(255,255,255,1);
margin-left: 20%;
margin-top: 62px;
margin-bottom: 61px;
display: block;
      }
        ul {
    margin-top: 2%;
    margin-bottom: 2%;
    // width:
    margin-left: 8%;
    li {
      color: #fff;
      
list-style:none;
      height: 54px;
      width: 90%;
      // background: #f2f2f2;
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
        margin-left: 18%;
        margin-top: -0.5%;
          float: left;
          width: 20%;
      }
      .zdate {
        float: left;
        margin-top: -0.5%;
        margin-left: 10%;
      }
      .zimg {
        display:block;
        margin:25% auto;
z-index:-1

      }
    }
  }
    }
  }

  // .content3 {
  //   height: 2020px;
  //   // width: 74%;
  //   // background: red;
  //   margin: 0 auto;
  //   padding-top: 4.78%;
  //   // text-align: center;
    
  // }
}
</style>