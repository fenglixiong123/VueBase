<template>
    <div>
      <p>编程导航路由</p>
      <div>
        <p>push方式</p>
        <button @click="gotoNews">直接跳转新闻页面</button>
        <button @click="gotoQuick">path跳转快讯页面</button>
        <button @click="nameGotoQuick">name跳转快讯页面</button>
        <p>replace方式</p>
        <button @click="replaceGotoNews">直接跳转新闻页面</button>
        <p>go方式</p>
        <button @click="back">后退一步</button>
        <button @click="forward">前进一步</button>
      </div>
    </div>
</template>

<script>
    export default {
        name: "CodeRouter",
      data(){
          return{
            
          }
      },
      methods:{
        gotoNews:function () {
          this.$router.push('/embedRouter/news');
        },
        gotoQuick:function () {
          this.$router.push({path:'/embedRouter/quick'});
        },
        nameGotoQuick:function(){
          this.$router.push({name:'Quick'});
        },
        replaceGotoNews:function () {
          this.$router.replace('/embedRouter/news');
        },
        back:function () {
          this.$router.go(-1);
        },
        forward:function () {
          this.$router.go(1);
        }
      }
    }
</script>

<style scoped>

</style>
