<template>
  <div id="app">
<!--    <img src="./assets/logo.png" class="imgClass">-->
<!--    <router-view/>-->
    <Base/>
    <Event/>
    <Compute/>
    <Style/>
  </div>
</template>

<script>
import Base from './components/Base'
import Event from "./components/Event";
import Compute from "./components/Compute";
import Style from "./components/Style";
export default {
  name: 'App',
  components: {Style, Compute, Event, Base}
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
