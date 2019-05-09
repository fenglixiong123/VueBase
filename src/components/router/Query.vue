<template>
    <div>
      <p>问答</p>
      <p>Focus:{{this.$route.query.focus}}</p>
      <div>
        <p>问：嘉城实业老板是谁？</p>
        <p>答：李嘉诚</p>
      </div>
      <p>当前访问地址：{{this.$route.path}}</p>
    </div>
</template>

<script>
    export default {
        name: "Query"
    }
</script>

<style scoped>

</style>
