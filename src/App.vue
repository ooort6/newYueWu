<template>
  <div id="app">
    <router-view></router-view>
    <!-- <BackTop/> -->
    <Footer v-if="this.$route.name!='advertisement'"/>
  </div>
</template>


<script>
import Footer from "@/components/Footer.vue";
import BackTop from '@/components/backTop.vue'
export default {
  components: {
    Footer,
    BackTop
  },
  mounted(){
    console.log()
  }
};
</script>
<style lang="scss">
* {
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 30px 0 10px 0;
  // position: absolute;
  top: 0;
  width: 72.97%;
  // background: red;
  border-bottom: 1px solid #a6f7fe;
  margin: 0 auto;
  .logo {
    float: left;
    margin-left: 5%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
  .nav_r {
    margin-left: 21.98%;
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
      color: rgba(255, 255, 255, 1);
      margin-right: 7%;

      color: #2c3e50;
      text-decoration: none;
      &.router-link-exact-active {
        color: #00ecff;
      }
    }
  }
  // left: 30%;
}
</style>

