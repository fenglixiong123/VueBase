<template>
    <div>
      组件B
      {{msg}}
      <button @click="changeWord">改变</button>
    </div>
</template>

<script>
    export default {
        name: "KeepB",
      data(){
          return{
            msg:'默认'
          }
      },
      methods:{
        changeWord:function () {
          this.msg = 'ChangeB'
        }
      }
    }
</script>

<style scoped>

</style>
