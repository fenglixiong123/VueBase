<template>
  <div id="app">
    <router-link to="/base">基础指令</router-link>
    <router-link to="/event">事件</router-link>
    <router-link to="/compute">计算属性</router-link>
    <router-link to="/style">样式</router-link>
    <router-link to="/form">表单</router-link>
    <br/>
    <router-link to="/student">组件数据传递</router-link>
    <router-link to="/keep">KeepAlive</router-link>
    <hr/>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
