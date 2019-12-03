<template>
  <div class="header">
    <div id="nav">
      <div class="logo">
        <img src="../assets/images/logo.png" width="70%" alt />
      </div>
      <div class="nav_r">
        <router-link to="/home">主页介绍</router-link>
        <router-link to="/solution">智慧展厅系统</router-link>
        <router-link to="/f_solution">辅助控制系统</router-link>
        <router-link to="/z_solution">展示宣传系统</router-link>
        <router-link to="/case">展示技术</router-link>
        <router-link to="/successcase">成功案例</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#nav {
  padding: 30px 0 10px 0;
  // position: absolute;
  top: 0;
  width: 72.97%;
  // background: red;
  border-bottom: none;
  margin: 0 auto;
  padding-top: 3%;
  .logo {
    float: left;
    margin-left: 0;
    height: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .nav_r {
    height: 30px;
    margin-left: 26.98%;
    // float: right;
    // display: flex;
    // display: flex;
    // justify-content: center;
    // align-items: center;
    // flex-flow: nowrap;

    a {
      font-size: 18px;
      font-family: Source Han Sans CN;
      font-weight: 500;
      color: #262022;
      margin-right: 7%;
      text-decoration: none;
      position: relative;
      &.router-link-exact-active {
        color: #d83819;
        &:after {
          content: "";
          position: absolute;
          top: -5px;
          left: 0;
          height: 3px;
          width: 22px;
          background-color: #e4262d;
        }
      }
    }
  }
  // left: 30%;
}
</style>
