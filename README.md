
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
2.事件
