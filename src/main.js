// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false;

//定义全局自定义指令
Vue.directive("focus",{
  //常用
  //指令第一次绑定到元素时候调用
  bind:function(){
    console.log("Bing只执行一次")
  },
  //常用
  //el代表指令所在的元素本身
  inserted:function (el,binding,) {
    console.log("Insert元素插入父组件时候执行",el,binding);
    el.focus();
  },
  update:function () {
    console.log("Update元素更新时候执行");
  },
  componentUpdated:function () {
    console.log("ComponentUpdated发生在元素以及其子组件全部更新之后执行");
  },
  unbind:function () {
    console.log("Unbind指令与元素解除绑定时候执行")
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data:{
    globalMsg:'我是根元素'
  },
  router,
  components: { App },
  template: '<App/>'
});
