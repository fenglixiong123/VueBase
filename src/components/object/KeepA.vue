<template>
    <div>
      组件A:
      {{msg}}
      <button @click="changeWord">改变</button>
    </div>
</template>

<script>
    export default {
      name: "KeepA",
      data(){
          return{
            msg:'默认'
          }
      },
      methods:{
          changeWord:function () {
            this.msg = 'ChangeA'
          }
      }
    }
</script>

<style scoped>

</style>
