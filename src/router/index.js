import Vue from 'vue'
import Router from 'vue-router'
import Base from "../components/base/Base";
import Form from "../components/base/Form";
import Event from "../components/base/Event";
import Style from "../components/base/Style";
import Compute from "../components/base/Compute";
import Student from "../components/object/Student";
import Keep from "../components/object/Keep";
import Parent from "../components/object/Parent";

Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/base',
      name: 'Base',
      component: Base
    },
    {
      path: '/form',
      name: 'Form',
      component: Form
    },
    {
      path: '/event',
      name: 'Event',
      component: Event
    },
    {
      path: '/style',
      name: 'Style',
      component: Style
    },
    {
      path: '/compute',
      name: 'Compute',
      component: Compute
    },
    {
      path: '/student',
      name: 'Student',
      component: Student
    },
    {
      path: '/keep',
      name: 'Keep',
      component: Keep
    },
    {
      path: '/parent',
      name: 'Parent',
      component: Parent
    }
  ]
})
