<template>
  <div class="footer" >
    <div class="span_1" v-if="this.bg==0" >
      <div>
        <img src="../assets/images/logo3.png" alt />
      </div>
      <div>
        <ul>
          <li>
            <span>
              <router-link to="/home">主页介绍</router-link>
            </span>
          </li>
          <li>
            <span>
              <router-link to="/solution">智慧展厅系统</router-link>
            </span>
          </li>
          <li>
            <span>
              <router-link to="/f_solution">辅助控制系统</router-link>
            </span>
          </li>
          <li>
            <span>
              <router-link to="/z_solution">展示宣传系统</router-link>
            </span>
          </li>
          <li>
            <span>
              <router-link to="/case">展示技术</router-link>
            </span>
          </li>
          <li>
            <span>
              <router-link to="/successcase">成功案例</router-link>
            </span>
          </li>
        </ul>
      </div>
    </div>

 <div class="span_1" v-if="this.bg==1" style="background:#999" >
      <div>
        <img src="../assets/images/logo3.png" alt />
      </div>
      <div>
        <ul>
          <li>
            <span>
              <router-link to="/home">主页介绍</router-link>
            </span>
          </li>
          <li>
            <span>
              <router-link to="/solution">智慧展厅系统</router-link>
            </span>
          </li>
          <li>
            <span>
              <router-link to="/f_solution">辅助控制系统</router-link>
            </span>
          </li>
          <li>
            <span>
              <router-link to="/z_solution">展示宣传系统</router-link>
            </span>
          </li>
          <li>
            <span>
              <router-link to="/case">展示技术</router-link>
            </span>
          </li>
          <li>
            <span>
              <router-link to="/successcase">成功案例</router-link>
            </span>
          </li>
        </ul>
      </div>
    </div>

    <div class="span_2">沪ICP备19022185号 上海越梧信息科技有限公司</div>
    <!-- <span class="span_1">
      沪ICP备18016391号上海智天信息科技有限公司
    </span>
    <ul>
      <li>
        
        <span><router-link to="/">首页</router-link></span> </li>
      <i>|</i>
       <li>
         <span> <router-link to="/solution">产品与解决方案</router-link></span> </li>
      <i>|</i>
        <li><span> <router-link to="/case">典型案例</router-link></span> </li>
     <i>|</i>
        <li><span> <router-link to="/cooperation">合作发展</router-link></span> </li>
    <i>|</i>
        <li><span> <router-link to="/aboutus">关于我们</router-link></span> </li>
      <i>|</i>
        <li><span> <router-link to="/download">资料下载</router-link></span> </li>
   
    </ul>-->
    <!-- <div class="sj">
<img src="../assets/image/sjj.png" alt="" style="width:100%;margin-right:1%">

    </div>
    <span class="span_2">
    ：021-80187116
    </span>-->
 
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
     bg:0
     
    };
  },
  props: {},
   watch: {
    //监听路由变化
    $route(to, from) {
      // console.log(to.name, from.name);
      if(to.name=="solution"){
        this.bg=1
      }else   if(to.name=="f_solution"){
        this.bg=1
      }else   if(to.name=="z_solution"){
        this.bg=1
      }else{
        this.bg=0
      }
      // to , from 分别表示从哪跳转到哪，都是一个对象
      // to.path  ( 表示的是要跳转到的路由的地址 eg: /home );
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footer {
  min-width: 1500px;
  background: #fff;
  height: 230px;
  width: 100%;
  // margin: 0 auto;
  // border-top: 1px solid #394050;
  // display: flex;
  // align-items: flex-start;
  // flex-wrap: nowrap;
  .span_1 {
    background: url("../assets/images/li.png") no-repeat;
    background-size: 100%;
    height: 150px;
    width: 100%;
    // display: block;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    //     margin-left: 19%;
    //     font-size:12px;
    // font-family:"SourceHanSansCN";
    // font-weight:300;
    // color:rgba(255,255,255,1);
    // line-height:63px;
    // margin-right: 5%
  }
  .span_2 {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
    width: 100%;
    font-size: 18px;
    font-family: PingFang SC;
    font-weight: bold;
    color: rgba(102, 102, 102, 1);
    line-height: 34px;
  }
  ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    align-items: center;
    width: 580px;
    justify-content: space-between;
    margin-right: 3%;
    i {
      color: rgba(176, 176, 176, 1);
    }
  }
  li {
    display: inline-block;
    margin: 0 10px;
    // margin-right: 5%;
    // width: 80px;
    span {
      cursor: pointer;
      font-size: 12px;
      font-family: "SourceHanSansCN";
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
    }
  }
  a {
    color: rgba(255, 255, 255, 1);

    text-decoration: none;
  }
}
</style>
