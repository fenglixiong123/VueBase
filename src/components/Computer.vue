<template>
    <dev class="hello">
      <hr/>
      {{msg}}
      <br/>
      {{5+2}}
      <br/>
      {{5>2?'yes':'no'}}
      <br/>
      {{'hello'.split('').reverse().join('')}}
      <hr/>
    </dev>
</template>

<script>
    export default {
        name: "Computer",
        data(){
            return {
              msg:'基本指令一'
            }
        }
    }
</script>

<style scoped>

</style>
