import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: "/home"
  }, {
    path: '/home',
    name: 'home',
    component: r => require(["@/components/Home/Home"], r)
  }, {
    path: '/search',
    name: 'search',
    component: r => require(["@/components/Search/Search"], r)
  }, {
    path: '/archives',
    name: 'archives',
    component: r => require(["@/components/Archives/Archives"], r)
  }, {
    path: '/layout',
    name: 'layout',
    component: r => require(["@/components/Layout/Layout"], r)
  }, {
    path: '/javascript',
    name: 'javascript',
    component: r => require(["@/components/Javascript/Javascript"], r)
  }, {
    path: '/utils',
    name: 'utils',
    component: r => require(["@/components/Utils/Utils"], r)
  }, {
    path: '/article/:id',
    name: 'article',
    component: r => require(["@/common/Article/Article"], r)
  }],
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})
