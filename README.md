
# VueBase
Vue基础学习

1.基础指令

***组件computer.vue***

- v-once:只能渲染一次
- v-html:解析html结构
- v-bind:指令,解析属性中的对象
- v-bind:简写 :href :class
- v-if:条件渲染
- v-show:条件渲染
- v-for:列表渲染

```
1.遍历数组
  <li v-for="name in names">{{name}}</li>
  <li v-for="(name,index) in names">{{name}},{{index}}</li>
2.遍历对象
  <li v-for="(value,key,index) in user">{{key}}--{{value}}--{{index}}</li>
3.遍历数组对象
  <li v-for="user in users">{{user.name}}---{{user.age}}</li>
  <li v-for="(user,index) in users">{{index}}---{{user.name}}---{{user.age}}</li>
```
2.事件处理

- v-on:click 点击事件  
    this.xxx : 可以直接调用数据  
    传递参数 @click="clickMe('dont hit me',$event)"  
    其中$event是传递事件本身的
- @click :简写

3.计算属性

computed：可以返回计算过得属性值  
跟函数不同的是，此属性具有缓存功能除非依赖发生改变否则不会重新计算  
而函数是每次会重新执行重新计算

4.Class与Style绑定

class为对象的形式{a:true,b:false}  
数组也可以的[a,b,c,d,e,{f:true}]  

style

