<template>
  <div id="app">
<!--    <img src="./assets/logo.png" class="imgClass">-->
<!--    <router-view/>-->
<!--    <Base/>-->
<!--    <Event/>-->
<!--    <Compute/>-->
<!--    <Style/>-->
<!--    <Form/>-->
    <router-link to="/base">基础指令</router-link>
    <router-link to="/event">事件</router-link>
    <router-link to="/compute">计算属性</router-link>
    <router-link to="/style">样式</router-link>
    <router-link to="/form">表单</router-link>
    <hr/>
    <router-view/>
  </div>
</template>

<script>
import Base from './components/base/Base'
import Event from "./components/base/Event";
import Compute from "./components/base/Compute";
import Style from "./components/base/Style";
import Form from "./components/base/Form";
export default {
  name: 'App',
  components: {Form, Style, Compute, Event, Base}
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
