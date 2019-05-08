
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
:style="{color:activeColor,fontSize:fontSize+'px'}"  
其中activeColor，fontSize可以自定义

5.表单输入绑定

v-model:数据双向绑定  
也即是说双方数据一致

- .lazy 懒加载，回车和失去焦点之后才会同步变化数据
- .trim 去掉前后空格
- .number 转换为数字类型

watch 监听字段作用，可以用于预警处理数据  
实时监听数据变化，比如数据>100可以弹出警告

6.组件

组件传递数据props  
props:['name','master','address']

- 父传子：props  
简单，只需要在组件中定义prop传递的参数名称即可
- 子传父：emit
复杂，需要在子组件中定义发送消息的事件，父组件用自定义事件进行接受数据

7.keep-alive

保持组件切换状态
可以保存组件状态防止重复渲染

8.prop属性验证

- String
- Number
- Boolean
- Array
- Object
- Date
- Function
- Symbol  
```
props:{  
  title:{  
    type:String,  
    required:true,  
    default:'小目标'  
  }  
} 
``` 

9.获取属性方式

- 获取跟元素：this.$root.msg
- 获取父级属性：this.$parent.msg
- 获取原生dom属性：this.$refs.input1

10.插槽

效果：内容展示由父级组件传递

内容分发  
也即是将在组件内的内容展示在组件内slot的地方  
<//Student>我很好<//Student>  
这句话会显示在Student组件里面的template里面的  
<//slot><//slot>  

具名插槽：带名字的插槽  
可以插入制定位置  
</template v-slot:footer>

作用域插槽：带有作用域  
父组件用来定义格式框架  
子组件用来传递数据血肉  
父组件：slot-scope="entity"  
{{entity.message}}  
子组件：message="hello"  

11.生命周期

- beforeCreate----------创建之前
- create-------------------创建之后
- beforeMount----------渲染之前
- mounted----------------渲染之后
- beforeUpdate---------更新之前
- updated----------------更新之后
- beforeDestroy--------销毁之前
- destroyed--------------销毁之后

比如网络请求可以放在mounted中

12.自定义指令

必须在main中来自定义指令
```
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
```
局部指令  
在data同级directives{}
