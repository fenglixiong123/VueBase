<template>
   <div>
     嵌套路由
     <br/>
     <br/>
     <div>
<!--       接收到参数：{{this.$route.params.id}}-->
       <router-link to="/routerBox/quick">快讯</router-link>
       <router-link to="/routerBox/news">新闻</router-link>
     </div>
     <br/>
     <div class="routeClass">
      <router-view/>
     </div>
   </div>
</template>

<script>
    export default {
        name: "RouterBox"
    }
</script>

<style scoped>
  .routeClass{
    width: 550px;
    height: 400px;
    border: 1px solid #8aa010;
    margin: 0 auto;
    padding: 20px;
  }
</style>
