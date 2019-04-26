<template>
    <div>
      <h1>{{msg}}</h1>
      <hr/>
      <input type="text" :value="inputBox"/>
      <input type="button" @click="clickMe('dont hit me',$event)" value="点击我"/>
    </div>
</template>

<script>
    export default {
      name: "Event",
      data(){
          return{
            msg:'事件处理',
            count:0,
            inputBox:''
          }
      },
      methods:{
          clickMe:function(message,e){
            this.count ++
            this.inputBox = '我被点击了'+this.count
            console.log(message,e.target.tagName)
            // alert("我被点击了")
          }
      }
    }
</script>

<style scoped>

</style>
