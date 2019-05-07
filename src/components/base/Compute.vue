<template>
    <div>
      <h1>{{msg}}</h1>
      原始：{{message}}<br/>
      反转：{{c_message}}<br/>
      函数：{{reverseMsg()}}
    </div>
</template>

<script>
    export default {
      name: "Compute",
      data(){
          return{
            msg:"计算属性",
            message:"I'am compute component"
          }
      },
      computed:{
        //带有缓存的效果
        c_message:function () {
          return this.message.split('').reverse().join('');
        }
      },
      methods:{
        reverseMsg:function () {
          return this.message.split('').reverse().join('');
        }
      }
    }
</script>

<style scoped>

</style>
