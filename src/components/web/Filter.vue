<template>
    <div>
      过滤器
      <br/>
      <p>原始数据：{{money}}</p>
      <p>过滤数据：{{money|rmb}}</p>
      <div>
        {{article|author}}
      </div>
    </div>
</template>

<script>
    export default {
        name: "Filter",
      data(){
          return{
            money:20,
            article:'时间如白驹过隙'
          }
      },
      filters:{
          rmb:function (value) {
            if(!value)return;
            value = value.toString();
            return '$'+value;
          },
        author:function (value) {
          if(!value) return;
          return value+"————来自：Feng";
        }
      }
    }
</script>

<style scoped>

</style>
