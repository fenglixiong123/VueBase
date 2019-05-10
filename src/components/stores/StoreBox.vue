<template>
    <div>
      <p>状态管理器Vuex</p>
      <br/>
      CountState参数：{{stateCount}}
      CountMapState参数：{{mapStateCount}}
      <br/>
      <br/>
      CountGetter参数：{{getCount}}
      CountMapGetter参数：{{mapGetterCounter}}
      <br/>
      <br/>
      <button @click="addCountMutation">Count增加Mutations</button>
      <button @click="subCountMutation">Count减少Mutations</button>
      <br/>
      <br/>
      <button @click="addCountDispatch">Count增加Dispatch</button>
      <button @click="subCountDispatch">Count减少Dispatch</button>
      <br/>
      <br/>
      <button @click="add">Count增加mapMutations</button>
      <button @click="reduction({step:4})">Count减少mapMutations</button>
      <br/>
      <br/>
      <button @click="addFun">Count增加mapDispatch</button>
      <button @click="reductionFun({step:4})">Count减少mapDispatch</button>

    </div>
</template>

<script>
  import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
    export default {
        name: "StoreBox",
      data(){
          return{
            
          }
      },
      computed:{
        stateCount:function () {
          return this.$store.state.count;
        },
        getCount:function () {
          return this.$store.getters.getStateCount;
        },
        ...mapState({
          mapStateCount:state=>state.count,
        }),
        ...mapGetters({
          mapGetterCounter:'getStateCount'
        })
      },
      methods:{
        addCountMutation:function () {
          this.$store.commit("add");
        },
        subCountMutation:function () {
          this.$store.commit("reduction",{step:3})
        },
        addCountDispatch:function () {
            this.$store.dispatch("addFun");
        },
        subCountDispatch:function () {
          this.$store.dispatch("reductionFun",{step:4})
        },
        ...mapMutations([
          'add',
          'reduction'
        ]),
        ...mapActions([
          'addFun',
          'reductionFun'
        ])
      }
    }
</script>

<style scoped>

</style>
