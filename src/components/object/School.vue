<template>
  <div class="schoolDiv">
    <h3>学校组件</h3>
    <div :style="divStyle">
      学校：{{name}}<br/>
      校长：{{master}}<br/>
      地址：{{address}}<br/>
    </div>
    <br/>
    <div>
      <button @click="sendSchoolMsg">发送数据</button>
    </div>
  </div>
</template>

<script>
    export default {
      name: "School",
      data(){
          return{
            msg:'希望小学',
            divStyle:{
              width:'300px',
              height:'100px',
              backgroundColor:'#4ba40c',
              fontSize:'18px',
              color:'red',
              margin:'0 auto',
              textAlign:'center'
            }
          }
      },
      props:['name','master','address'],
      methods:{
        sendSchoolMsg:function () {
          this.$emit('schoolEvent',"学校即将举行60周年庆，希望大家给能抽空回来参加！");
        }
      }
    }
</script>

<style scoped>
  .schoolDiv{
    margin: 0 auto;
    padding: 20px;
    width: 500px;
    height: 200px;
    border: 1px solid red;
  }
</style>
