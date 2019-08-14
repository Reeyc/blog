Vue.use(VueRouter)

const Home = r => require.ensure([], () => r(require('@/components/Home/Home')), 'Home')
const Diary = r => require.ensure([], () => r(require('@/components/Diary/Diary')), 'Diary')
const Archives = r => require.ensure([], () => r(require('@/components/Archives/Archives')), 'Archives')
const About = r => require.ensure([], () => r(require('@/components/About/About')), 'About')
const Search = r => require.ensure([], () => r(require('@/components/Search/Search')), 'Search')
const Article = r => require.ensure([], () => r(require('@/common/Article/Article')), 'Article')
const NotFound = r => require.ensure([], () => r(require('@/common/NotFound/NotFound')), 'NotFound')


export default new VueRouter({
  routes: [{
    path: '/',
    redirect: "/home"
  }, {
    path: '/home',
    name: 'home',
    component: Home
  }, {
    path: '/diary',
    name: 'diary',
    component: Diary
  }, {
    path: '/archives',
    name: 'archives',
    component: Archives
  }, {
    path: '/about',
    name: 'about',
    component: About
  }, {
    path: '/search',
    name: 'search',
    component: Search
  }, {
    path: '/article/:id',
    name: 'article',
    component: Article
  }, {
    path: '*',
    name: 'notfount',
    component: NotFound
  }],
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})
