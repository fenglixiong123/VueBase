
import Vue from 'vue'
import Vuex from 'vuex'

import student from './modules/student.js'
import teacher from './modules/teacher.js'

Vue.use(Vuex);

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
    student,
    teacher
  }
});

export default store;
