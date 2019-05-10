<template>
    <div>
      模块管理器
      <br/>

      <hr/>
      全局状态
      <br/>
      全局数量：{{globalCount}}
      <br/>
      全局getter数量：{{getterGlobalCount}}
      <br/>
      全局action减少：<button @click="globalSubCount">减少</button>
      <hr/>

      <br/>
      局部非命名学生模块
      <br/>
      学生年龄：{{studentAge}}
      <br/>
      学生getter年龄：{{getterStudentAge}}
      <br/>
      学生age减少：<button @click="studentSubAge">减少</button>
      <hr/>

      局部命名老师模块
      <br/>
      老师年龄：{{teacherAge}}
      <br/>
      老师getter年龄：{{getterTeacherAge}}
      <br/>
      老师age减少：<button @click="teacherSubAge">减少</button>
    </div>
</template>

<script>
    export default {
        name: "StoreModule",
      data(){
          return{

          }
      },
      computed:{
          globalCount:function(){
            return this.$store.state.count;
          },
          getterGlobalCount:function () {
            return this.$store.getters.getStateCount;
          },
          //这里只有state是局部状态需要加上模块名
          studentAge:function () {
            return this.$store.state.student.age;
          },
          //这里因为学生是非命名模块，所以getter也被注册为全局getter了
          getterStudentAge:function () {
            return this.$store.getters['getStudentAge'];
          },
          teacherAge:function () {
            return this.$store.state.teacher.age;
          },
          getterTeacherAge:function () {
            return this.$store.getters['teacher/getTeacherAge'];
          }
      },
      methods:{
          //这里可以直接调用全局的action方法
          globalSubCount:function () {
            this.$store.dispatch("reductionFun",{step:3});
          },
          //这里因为student是非命名模块会action会被注册为全局action所以直接调用
          studentSubAge:function () {
            this.$store.dispatch("yongAction",{step:3});
          },
          teacherSubAge:function () {
            this.$store.dispatch("teacher/yongAction",{step:3});
          }
      }
    }
</script>

<style scoped>

</style>
