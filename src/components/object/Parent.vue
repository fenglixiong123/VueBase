<template>
    <div>
      <div class="parentDiv">
        父组件
        <div>
          接收子组件消息：{{moneyMsg}}
        </div>
        <div>
          <Child @moneyEvent="getMoney" title="先定一个一个亿的小目标" :age="age" nick="王思聪"/>
        </div>
      </div>
      <br/>
      <div>
        访问根元素：{{globalMsg}}
      </div>
    </div>
</template>

<script>
    import Child from "./Child";
    export default {
      name: "Parent",
      components: {Child},
      data(){
          return{
            moneyMsg:'',
            age:30,
            hobby:'泡妹子'
          }
      },
      computed:{
        globalMsg:function () {
          return this.$root.globalMsg;
        }
      },
      methods:{
        getMoney:function (data) {
          this.moneyMsg = data;
        }
      }
    }
</script>

<style scoped>
  .parentDiv{
    margin: 0 auto;
    padding: 20px;
    width: 500px;
    height: 200px;
    border: 1px solid red;
  }
</style>
