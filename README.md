
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

13.过滤器

filter：将数据转化成另一种形式  
{text|filter}  
```
filters:{
          rmb:function (value) {
            if(!value)return;
            value = value.toString();
            return '$'+value;
          },
        author:function (value) {
          if(!value) return;
          return value+"————来自：Feng";
        }
      }
```

14.网络请求

首先在main.js中引用axios  
import Axios from 'axios'  
Vue.prototype.$axios = Axios;  
```
this.$axios.get(url,{
  param:{
    id:1
  }
})
.then(res=>{
  console.log(res.data)
})
.catch(err=>{
  console.log(err)
})
```

15.处理跨域请求

位置：build下面webpack.dev.conf.js  
位置：config下面index.js  

proxyTable: {}
```
proxyTable: {
      '/douban':{
        target:'http://api.douban.com',
        changeOrigin:true,
        pathRewrite:{
          '^/douban':''
        },
      }
    },
```
原接口：http://api.douban.com/v2/movie/top250  
接口调用：/douban/v2/movie/top250  
解释：接口只要是'/douban'开头的才用代理,会把localhost:8080替换为：http://api.douban.com/douban
但是因为/douban是我们不需要的需要替换掉此时需要
pathRewrite，会把/douban替换为空，这样就得到我们想要的结果了

16.路由

(1)安装路由  
cnpm install vue-router --save

(2)声明路由  
import VueRouter from 'vue-router'
Vue.use(VueRouter)

(3)创建路由  

@为根目录
```
const router = new VueRouter({
  mode:'history',
  routes:[
    {
        path:'/',
        name:'Hello',
        component:Hello
    }
  ]
})
```
(4)路由显示位置
<router-view/>

(5)路由注入实例  
new Vue({  
  router  
})

(6)路由跳转  
<router-link to="/hello">问候一下</router-link>

- 动态路由  
path: '/routerBox/:id'  
获取路径值：this.$route.params.id     
获取参数：this.$route.query.name  
获取路径：this.$route.path   
<router-link :to="{name:'Stock',params:{hot:'蓝电霸王龙'}}">股票</router-link>  
<router-link :to="{name:'Query',query:{focus:'李嘉诚'}}">问答</router-link>  
       
- 嵌套路由  
```
{
      path: '/routerBox',
      name: 'RouterBox',
      component: RouterBox,
      children:[
        {
          path: 'news',
          name:'News',
          component:News
        },
        {
          path: 'quick',
          name:'Quick',
          component:Quick
        }
      ]
    }
```
<router-link to="/routerBox/quick">快讯</router-link>  
<router-link to="/routerBox/news">新闻</router-link>

- 编程式路由导航  

// 字符串
router.push('home')  
// 对象  
router.push({ path: 'home' })  
// 命名的路由  
router.push({ name: 'user', params: { userId: '123' }})  
// 带查询参数，变成 /register?plan=private  
router.push({ path: 'register', query: { plan: 'private' }})  
       
- 重定向和别名

路由最开头  
path: '/',  
redirect: "/home"

- 更改超链接

子父级匹配：  
.router-link-active{
  color: red;
}  
linkActiveClass:'active',

精准匹配
.router-link-exact-active{
    border: 1px solid green;
  }

- 命名视图
```
<router-view name="footer"/>
{
      path: '/home',
      name: 'Home',
      components: {footer:Home}
}
```

17.Vuex状态管理器

集中管理vue的各种状态数据，适合大型应用开发  
- state
- getter
- mutations  必须是同步函数
- actions   可以是异步函数
```
store.js中做如下声明
state:{
    count:23
  },
  getters:{
    getStateCount:function (state) {
      return state.count + 1;
    }
  },
  mutations:{
    reduction:function (state,payload) {
      state.count = state.count - payload.step;
    }
  },
  actions:{
    reductionFun:function ({dispatch,commit,state},payload) {
      commit("reduction",payload);
    }
  }
用法：
computed:{
  newCount:function () {
    return this.$store.state.count;
  },
  getCount:function () {
    return this.$store.getters.getStateCount;
  },
  ...mapState({
    newCount1:state=>state.count,
  }),
  ...mapGetters([
    'getStateCount'
  ])
},
methods:{
  subCountMutation:function () {
    this.$store.commit("reduction",{step:3})
  },
  subCountDispatch:function () {
    this.$store.dispatch("reductionFun",{step:4})
  }
  ...mapMutations([
    'reduction'
  ]),
  ...mapActions([
    'reductionFun'
  ])
}  
```
