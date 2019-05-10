
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

//无命名空间的注册在全局命名空间中
//全部统一
const studentModule = {
  state: {
    age:20
  },
  getters:{
    getAge:function (state,getters,rootState) {
      return state.age + 10;
    }
  },
  mutations:{
    yong:function (state) {
      
    }
  },
  actions:{
    yongAction:function ({state, commit, rootState}) {

    }
  }
};

const store = new Vuex.Store({
  state:{
    count:23
  },
  getters:{
    getStateCount:function (state) {
      return state.count + 30;
    }
  },
  mutations:{
    add:function (state) {
      state.count = state.count +1;
    },
    reduction:function (state,payload) {
      state.count = state.count - payload.step;
    }
  },
  actions:{
    addFun:function ({dispatch,commit,state}) {
      commit("add");
    },
    reductionFun:function ({dispatch,commit,state},payload) {
      commit("reduction",payload);
    }
  },
  modules:{
    student:studentModule,
  }
});

export default store;
