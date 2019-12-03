<template>
  <div>
    <BackTop :height="0" :right="3" :bottom="704">
      <div class="top">
        <img
          src="@/assets/image/TOP.png"
          style=" position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);"
          alt
        >
        
      </div>
    </BackTop>
    
    <div id="dg" class="top" style=" bottom: 642px; z-index:2">
      <img
        src="../assets/image/TOP.png"
        style=" position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);"
        alt
      >

    </div>
    <!-- @click="$router.push({name: 'shouqian'})" -->
    <div id="dg" class="top" style=" bottom: 580px;"  @click="$router.push({name: 'Presale'})">
      <img
        src="../assets/image/售前咨询 (1).png"
        style=" position: absolute;top: 40%;left: 50%;transform: translate(-50%, -50%);"
        alt
      >
      <span style="color:#333333;display:block; margin-top:70%">
        售前咨询
      </span>
    </div>
    <div id="dg" class="top" style=" bottom: 518px;"  @click="$router.push({name: 'Aftersale'})"> 
      <img
        src="../assets/image/售后咨询.png"
        style=" position: absolute;top: 40%;left: 50%;transform: translate(-50%, -50%);"
        alt
      >
      <span style="color:#333333;display:block; margin-top:70%">
        售后咨询
      </span>
    </div>
    <div id="dg" class="top" style=" bottom: 456px;" @click="$router.push({name: 'Wwcooper'})">
      <img
        src="../assets/image/合作.png"
        style=" position: absolute;top: 40%;left: 50%;transform: translate(-50%, -50%);"
        alt
      >
      <span style="color:#333333;display:block; margin-top:70%">
        申请合作
      </span>
    </div>
    <div id="dg" class="top" style=" bottom: 394px;" @click="$router.push({name: 'download'})" >
      <img
        src="../assets/image/资料中心.png"
        style=" position: absolute;top: 40%;left: 50%;transform: translate(-50%, -50%);"
        alt
      >
      <span style="color:#333333;display:block; margin-top:70%">
        资料中心
      </span>
    </div>
   

  </div>
</template>
<script>
export default {
  name: "backTop",
  methods: {
            instance (type) {
                const title = '电话号码';
                const content = '<p>xxxxxxxxx</p>';
                switch (type) {
                    case 'success':
                        this.$Modal.success({
                            title: title,
                            content: content
                        });
                        break;
                }
            }
        }
};
</script>
<style lang="scss" scoped>
.top {
  z-index: 9999;
  text-align: center;
  position: fixed;
  right: 3px;
  background: #fff;
  // border-radious: 2px;
  border-radius: 2px;
  border: 1px solid #d7d7d7;
  border-bottom: none;

  width: 62px;
  height: 62px;
  cursor: pointer;
}
.top1 {
  z-index: 9999;
  text-align: center;
  position: fixed;
  right: 3px;
  background: #fff;
  // border-radious: 2px;
  border-radius: 2px;
  border: 1px solid #d7d7d7;
  // border-bottom: none;

  width: 62px;
  height: 62px;
  cursor: pointer;
}
</style>
