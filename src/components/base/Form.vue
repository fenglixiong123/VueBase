<template>
    <div>
      <h1>{{msg}}</h1>
      <div>
        <div>
          {{textMsg}}
        </div>
        <br/>
        TextMsg:<input type="text" v-model="textMsg"/>
        <div>
          {{areaMsg}}
        </div>
        <br/>
        AreaMsg:<textarea rows="4" cols="40" v-model="areaMsg"></textarea>
        <br/>
        <p>{{radioBox}}</p>
        <input type="radio" id="radioOne" value="one" v-model="radioBox"/>
        <label for="radioOne">radioOne</label>
        <input type="radio" id="radioTwo" value="two" v-model="radioBox"/>
        <label for="radioTwo">radioTwo</label>
        <br/>
        <p>{{selectBox}}</p>
        <select v-model="selectBox">
          <option value="全部">全部</option>
          <option value="上海">上海</option>
          <option value="北京">北京</option>
          <option value="西安">西安</option>
        </select>
        <br/>
        <p>Checked:{{checkBox}}</p>
        <input type="checkbox" id="checked1" value="Jack" v-model="checkBox"/>
        <label for="checked1">Jack</label>
        <input type="checkbox" id="checked2" value="Mary" v-model="checkBox"/>
        <label for="checked2">Mary</label>
        <input type="checkbox" id="checked3" value="Tomi" v-model="checkBox"/>
        <label for="checked3">Tomi</label>
      </div>
      <div>
        <p>{{lazyMsg}}</p>
        Lazy:<input type="text" v-model.lazy="lazyMsg"/>
        <p>{{trimMsg}}</p>
        Trim:<input type="text" v-model.trim="trimMsg"/>
        <p>{{numberMsg}}</p>
        Number:<input type="number" v-model.number="numberMsg"/>
      </div>
    </div>
</template>

<script>
    export default {
      name: "Form",
      data(){
        return{
          msg:'Form表单',
          textMsg:'',
          areaMsg:'',
          radioBox:'one',
          checkBox:[],
          selectBox:'全部',
          lazyMsg:'',
          trimMsg:'',
          numberMsg:''
        }
      },
      methods:{

      },
      watch:{
        textMsg:function (value) {
          console.log("textMsg:"+value)
          if(value==='习近平'){
            console.log("非法字符！！！")
          }
        }
      }
    }
</script>

<style scoped>

</style>
