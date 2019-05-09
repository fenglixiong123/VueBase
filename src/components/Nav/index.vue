<template>
    <div class="nav">
      <div class="content">
        <router-link to="/home">
          <span class="iconfont .icon-shouye">&#xe64f;</span>首页
        </router-link>
        <router-link to="/order">
          <span class="iconfont .icon-wodedingdan">&#xe655;</span>订单
        </router-link>
        <router-link to="/shopCard">
          <span class="iconfont .icon-gouwuche">&#xe63f;</span>购物车
        </router-link>
        <router-link to="/mine">
          <span class="iconfont .icon-wodejuhuasuan">&#xe659;</span>我的
        </router-link>
      </div>
    </div>
</template>

<script>
  import '../../assets/iconfont.css'
    export default {
        name: "index",
      data(){
          return{

          }
      }
    }
</script>

<style scoped>
.content{
  width: 100%;
  /*border: 1px solid red;*/
}
  .nav{
    position: fixed;
    float: left;
    margin-bottom: 0;
    bottom: 0;
    height: 30px;
  }
</style>
