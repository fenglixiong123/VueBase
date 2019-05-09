<template>
   <div>
     外层路由
     <br/>
     <br/>
     <div>
<!--       接收到参数：{{this.$route.params.id}}-->
       <router-link to="/embedRouter/quick">快讯</router-link>
       <router-link to="/embedRouter/news">新闻</router-link>
       <router-link :to="{name:'Stock',params:{hot:'蓝电霸王龙'}}">股票</router-link>
       <router-link :to="{name:'Query',query:{focus:'李嘉诚'}}">问答</router-link>
     </div>
     <br/>
     <div class="routeClass">
      <router-view/>
     </div>
   </div>
</template>

<script>
    export default {
        name: "EmbedRouter"
    }
</script>

<style scoped>
  .routeClass{
    width: 70%;
    height: 300px;
    border: 1px solid #8aa010;
    margin: 0 auto;
    padding: 10px;
  }

  .active{
    color: red;
  }

  .currentActive{
     border: 1px solid green;
   }

</style>
