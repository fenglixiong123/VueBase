

//无命名空间的注册在全局命名空间中
//全部统一

const state = {
  age:20
};

const getters = {
  getStudentAge:function (state,getters,rootState) {
    return state.age + 10;
  }
};

const mutations = {
  yong:function (state,payload) {
    state.age = state.age - payload.step;
  }
};

const actions = {
  yongAction:function ({state, commit, rootState},payload) {
    commit("yong",payload)
  }
};

const studentModule = {
  state,
  getters,
  mutations,
  actions
};

export default studentModule;
