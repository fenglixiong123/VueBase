<template>
  <div id="app">
    <img src="./assets/logo.png">
<!--    <router-view/>-->
    <HelloWorld/>
    <Computer/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Computer from './components/Computer'
export default {
  name: 'App',
  components: {Computer, HelloWorld}
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
