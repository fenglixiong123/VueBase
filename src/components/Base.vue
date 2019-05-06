<template>
    <div class="hello">
      <h1>{{msg}}</h1>
      模板语法
      <br/>
      {{5+2}}
      <br/>
      {{5>2?'yes':'no'}}
      <br/>
      {{'hello'.split('').reverse().join('')}}
      <br/>
      <span v-once>{{message}}</span>
      <div :class="divClass">
        <p v-html="hello"></p>
      </div>
      <a :href="siteUrl" target="_blank">{{siteName}}</a>
      <div v-if="age>10 && age<20">
        年龄大于10岁
      </div>
      <div v-else-if="age>=20">
        年龄大于20岁
      </div>
      <div v-else>
        年龄小于10岁
      </div>
      <hr/>
      <div>
        <ul>
          <li v-for="name in names">{{name}}</li>
        </ul>
        <ul>
          <li v-for="user in users">{{user.name}}---{{user.age}}</li>
        </ul>
        <ul>
          <li v-for="(value,key,index) in user">{{key}}--{{value}}--{{index}}</li>
        </ul>
        <ul>
          <li v-for="(user,index) in users">{{index}}---{{user.name}}---{{user.age}}</li>
        </ul>
      </div>
      <hr/>
    </div>
</template>

<script>
    export default {
        name: "Base",
        data(){
            return {
              msg:'基本指令一',
              message:'我只渲染一次',
              hello:'<h3>Html指令</h3>',
              siteName:'百度一下你就知道',
              siteUrl:'http://www.baidu.com',
              divClass:'isActive',
              age:22,
              names:['jack','tom','jury','smith'],
              user:{
                name:'jack',
                age:23,
                hobby:'football'
              },
              users:[
                {name:'jack',age:22},
                {name:'tom',age:23},
                {name:'mary',age:18}
              ]
            }
        }
    }
</script>

<style scoped>

</style>
