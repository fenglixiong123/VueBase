<template>
    <div>
      <hr/>
      <h1>{{msg}}</h1>
      <div :class="divClass">
        class1
      </div>
      <br/>
      <div :class="{class1:flag}">
        {class1:flag}
      </div>
      <br/>
      <div :class="{class1:flag,class2:flag}">
        {class1:flag,class2:flag}
      </div>
      <div :class="classObj">
        classObj:{
        class1:true,
        class2:true,
        class3:true,
        class4:true
        }
      </div>
      <button @click="changeCss">改变CSS</button>
      <br/>
      <div :style="{color:activeColor,fontSize:fontSize+'px'}">
        {color:activeColor,fontSize:fontSize+'px'}
      </div>
      <div :style="styleObj">
        styleObj:{
        fontSize:'18px',
        color:'blue'
        }
      </div>
    </div>
</template>

<script>
    export default {
      name: "Style",
      data(){
        return{
          msg:'Class与样式属性',
          divClass:'class1',
          flag:false,
          classObj:{
            class1:this.flag,
            class2:this.flag,
            class3:this.flag,
            class4:this.flag
          },
          activeColor:'red',
          fontSize: 18,
          styleObj:{
            fontSize:'18px',
            color:'blue'
          }
        }
      },
      methods:{
        changeCss:function () {
          console.log("flag changed:",this.flag);
          if(this.flag){
            this.flag = false
          }else {
            this.flag = true
          }
        }
      }
    }
</script>

<style scoped>
 .class1{
   margin: 0 auto;
   text-align: center;
   width: 200px;
   height: 100px;
   border: 2px solid black;
   color: blue;
   background-color: chocolate;
 }
</style>
