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
import Refer from "../components/object/Refer";
import Slot from "../components/object/Slot";
import Directive from "../components/web/Directive";
import Filter from "../components/web/Filter";
import Axios from "../components/web/Axios";

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
    },
    {
      path: '/refer',
      name: 'Refer',
      component: Refer
    },
    {
      path: '/slot',
      name: 'Slot',
      component: Slot
    },
    {
      path: '/directive',
      name: 'Directive',
      component: Directive
    },
    {
      path: '/filter',
      name: 'Filter',
      component: Filter
    },
    {
      path: '/axios',
      name: 'Axios',
      component: Axios
    }
  ]
})
