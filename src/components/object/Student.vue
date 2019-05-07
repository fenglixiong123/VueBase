<template>
    <div>
      <h1>{{msg}}</h1>
      <div>
        <School @schoolEvent="getSchoolMsg" :name="name" :master="master" :address="address"/>
      </div>
      <div>
        <p>公告栏：</p>
        {{schoolMsg}}
      </div>

    </div>
</template>

<script>

    import School from "./School";
    export default {
      name: "Student",
      components: { School},
      data(){
          return{
            msg:'我是学生小明',
            name:'希望小学',
            master:'王晓晨',
            address:'上海市松江区江川二村',
            schoolMsg:'',
          }
      },
      methods:{
        getSchoolMsg:function (data) {
          this.schoolMsg = data;
        }
      }
    }
</script>

<style scoped>

</style>
