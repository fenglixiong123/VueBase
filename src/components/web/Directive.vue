<template>
    <div>
      自定义指令

      <div>
<!--        <input type="text" v-focus/>-->
        <input type="text" v-point/>
        <p v-style>哈哈哈</p>
      </div>

    </div>
</template>

<script>
    export default {
      name: "Directive",
      data(){
        return{

        }
      },
      directives:{
        point:{
          inserted:function (el) {
            el.focus();
            console.log("元素插入父组价时候执行")
          }
        },
        style:{
          inserted:function (el) {
            el.style.color = 'red';
            el.style.fontSize = '40px';
          }
        }
      }
    }
</script>

<style scoped>

</style>
