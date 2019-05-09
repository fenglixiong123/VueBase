<template>
    <div>
      Axios
      <br/>
      <button @click="getUserInfo">用户信息</button>
      <button @click="searchUser">搜索用户</button>
      <button @click="movieData">豆瓣电影</button>
      <div class="divClass" v-show="flag1">
        {{bodyText1}}
      </div>
      <div class="divClass" v-show="flag2">
        {{bodyText2}}
      </div>
      <div class="divClass" v-show="flag3">
        {{bodyText3}}
      </div>
    </div>
</template>

<script>
    export default {
        name: "Axios",
      data(){
          return{
            bodyText1:'',
            bodyText2:'',
            bodyText3:'',
            flag1:false,
            flag2:false,
            flag3:false
          }
      },
      methods:{
          getUserInfo:function () {
            const url = 'https://api.github.com/users/solomonxie';
            this.$axios.get(url,{
              params:{
                page:10
              }
            })
              .then(res=>{
                console.log(res.data);
                this.flag1 = true;
                this.bodyText1 = res.data;
            }).catch(err=>{
              console.log(err);
            });
          },
        searchUser:function () {
          const url = 'https://api.github.com/search/users';
          this.$axios.get(url,{
            params:{
              q:'fenglixiong'
            }
          }).then(res=>{
            console.log(res.data);
            this.flag2 = true;
            this.bodyText2 = res.data;
          }).catch(err=>{
            console.log(err)
          })
        },
        //这里涉及到处理跨域请求
        // /douban会被代理为http://api.douban.com
        movieData:function () {
          const url = '/douban/v2/movie/top250';
          this.$axios.get(url)
            .then(res=>{
              console.log(res.data);
              this.flag3 = true;
              this.bodyText3 = res.data;
            }).catch(err=>{
            console.log(err);
          });
        }
      },
      mounted() {
        //网络请求
      }
    }
</script>

<style scoped>
.divClass{
  margin: 0 auto;
  width: 600px;
  height: 400px;
  border: 1px solid blue;
  padding: 10px;

}
</style>
