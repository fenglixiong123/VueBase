
const state =  {
  age:50
};

const getters = {
  // 在这个模块的 getter 中，`getters` 被局部化了
  // 你可以使用 getter 的第四个参数来调用 `rootGetters`
  getTeacherAge:function (state,getters,rootState,rootGetters) {
    return state.age + 10;
  }
};

const mutations = {
  yong:function (state,payload) {
    state.age = state.age - payload.step;
  }
};

const actions = {
  // 在这个模块中， dispatch 和 commit 也被局部化了
  // 他们可以接受 `root` 属性以访问根 dispatch 或 commit
  yongAction:function ({dispatch, commit, getters , rootGetters},payload) {
    commit("yong",payload);
    // 访问局部action方法
    // dispatch("yongAction");
    // 下面两个是可以访问到全局方法的
    // commit("yong",payload,{root:true});
    // dispatch("yongAction",payload,{root:true});
  }
};

//命名空间模块需要带上命名空间
const teacherModule = {
  namespaced:true,
  state,
  getters,
  mutations,
  actions
};

export default teacherModule;
