import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = r => require.ensure([], () => r(require('@/components/Home/Home')), 'Home')
const Search = r => require.ensure([], () => r(require('@/components/Search/Search')), 'Search')
const Archives = r => require.ensure([], () => r(require('@/components/Archives/Archives')), 'Archives')
const Layout = r => require.ensure([], () => r(require('@/components/Layout/Layout')), 'Layout')
const Javascript = r => require.ensure([], () => r(require('@/components/Javascript/Javascript')), 'Javascript')
const Utils = r => require.ensure([], () => r(require('@/components/Utils/Utils')), 'Utils')
const Article = r => require.ensure([], () => r(require('@/common/Article/Article')), 'Article')

export default new Router({
  routes: [{
    path: '/',
    redirect: "/home"
  }, {
    path: '/home',
    name: 'home',
    component: Home
  }, {
    path: '/search',
    name: 'search',
    component: Search
  }, {
    path: '/archives',
    name: 'archives',
    component: Archives
  }, {
    path: '/layout',
    name: 'layout',
    component: Layout
  }, {
    path: '/javascript',
    name: 'javascript',
    component: Javascript
  }, {
    path: '/utils',
    name: 'utils',
    component: Utils
  }, {
    path: '/article/:id',
    name: 'article',
    component: Article
  }],
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})
