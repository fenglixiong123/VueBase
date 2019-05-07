<template>
    <div class="childDiv">
      子组件:{{age}},{{nick}},{{sex}},{{hobby}}
      <div>
        接收父组件消息：{{title}}
      </div>
      <button @click="sendMoney">发送消息</button>
    </div>
</template>

<script>
    export default {
        name: "Child",
      data(){
          return{

          }
      },
      computed:{
          hobby:function () {
            return this.$parent.hobby;
          }
      },
      props:{
        title:String,
        age:Number,
        nick:{
          type:String,
          required:true,
          default:'国民老公'
        },
        sex:{
          type: String,
          default: '男'
        }
      },
      methods:{
        sendMoney:function () {
          this.$emit('moneyEvent','爸爸我真的赚了五个亿')
        }
      }
    }
</script>

<style scoped>
  .childDiv{
    margin: 0 auto;
    margin-top: 10px;
    padding: 10px;
    width: 320px;
    height: 100px;
    border: 1px solid red;
  }
</style>
