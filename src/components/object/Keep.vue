<template>
  <div>
    <div>
      <p>keepalive</p>
      <br/>
      <br/>
    </div>
    <div>
      <keep-alive>
        <component v-bind:is="currentComponent"></component>
      </keep-alive>
    </div>
    <button @click="changeComponent">切换组件</button>
  </div>
</template>

<script>
  import KeepA from "./KeepA";
  import KeepB from "./KeepB";
    export default {
        name: "Keep",
      components:{KeepB, KeepA,},
      data(){
          return{
            currentComponent:KeepA,
            flag:false
          }
      },
      methods:{
        changeComponent:function () {
          if(this.flag){
            this.currentComponent = KeepA;
            this.flag = false;
          }else{
            this.currentComponent = KeepB;
            this.flag = true;
          }
        }
      }
    }
</script>

<style scoped>

</style>
