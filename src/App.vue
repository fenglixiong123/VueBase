<template>
  <div id="app">
    <img src="./assets/logo.png" class="imgClass">
<!--    <router-view/>-->
    <HelloWorld/>
    <Base/>
    <Event/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Base from './components/Base'
import Event from "./components/Event";
export default {
  name: 'App',
  components: {Event, Base, HelloWorld}
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

.imgClass{
  width: 200px;
  height: 200px;
}

</style>
