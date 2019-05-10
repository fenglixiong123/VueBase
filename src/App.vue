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
    <router-link to="/parent">父子组件</router-link>
    <br/>
    <router-link to="/refer">Refer</router-link>
    <router-link to="/slot">Slot</router-link>
    <router-link to="/directive">Directive</router-link>
    <router-link to="/filter">Filter</router-link>
    <router-link to="/axios">Axios</router-link>
    <br/>
    <router-link to="/embedRouter">嵌套路由</router-link>
    <router-link to="/codeRouter">编程路由</router-link>
    <router-link :to="{name:'Stock',params:{hot:'蓝电霸王龙'}}">命名路由</router-link>
    <router-link :to="{name:'Query',query:{focus:'李嘉诚'}}">带参路由</router-link>
    <br/>
    <router-link to="/storeBox">全局状态管理器</router-link>
    <router-link to="/storeModule">模块状态管理器</router-link>
    <hr/>
    <div class="routeClass">
      <span style="float: left">视图一</span>
      <router-view/>
    </div>
<!--    <hr/>-->
<!--    <div class="routeClass">-->
<!--      <span style="float: left">视图二</span>-->
<!--      <router-view name="footer"/>-->
<!--    </div>-->
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
  margin-top: 30px;
}

ul li{
  list-style: none;
  display: inline-block;
  margin: 0 10px;
  text-decoration: underline;
  color: red;
}

.routeClass{
  width: 60%;
  height: 900px;
  border: 1px solid cadetblue;
  margin: 0 auto;
  padding: 20px;
}

.active{
  color: blue;
}
.currentActive{
  border: 1px solid green;
}
</style>
