<template>
    <div>
      音乐实例
      <p ref="p1">倒计时2秒...</p>
      <div>
        <input type="text" ref="input1"/>
        <button @click="getInputValue">获取input框的值</button>
      </div>
    </div>
</template>

<script>
    export default {
      name: "Refer",
      data(){
        return{

        }
      },
      methods:{
        getInputValue:function () {
          alert(this.$refs.input1.value)
        }
      },
      mounted() {
        console.log(this.$refs.p1.innerHTML);
        setTimeout(()=>{
          this.$refs.p1.innerHTML = '我是新元素';
        },2000)
      }
    }
</script>

<style scoped>

</style>
