// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import "css/reset.css"
import "css/border.css"
import "css/iconfont.css"

//#################################

import http from 'api'
Vue.prototype.$http = http

//#################################

import fastClick from 'fastclick'
fastClick.attach(document.body);

//#################################

import hljs from "highlight.js";
import 'highlight.js/styles/An-Old-Hope.css' //代码块选择 An-Old-Hope 主题颜色

//自定义指令 
Vue.directive('highlight', function (el) {
  let blocks = el.querySelectorAll('pre');
  blocks.forEach((block) => {
    hljs.highlightBlock(block)
  })
})

//#################################

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
NProgress.configure({
  easing: 'ease', //动画方式    
  speed: 500, //递增进度条的速度    
  showSpinner: false, //是否显示加载ico    
  trickleSpeed: 200, //自动递增间隔    
  minimum: 0.3 //初始化时的最小百分比
})

router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});
router.afterEach(() => NProgress.done())

//#################################

import {
  Pagination,
  Autocomplete,
  Input,
  Button,
  Timeline,
  TimelineItem,
  Row,
  Col,
  Card,
  Divider,
  MessageBox,
  Message,
  Loading
} from 'element-ui';


Vue.use(Pagination);
Vue.use(Autocomplete);
Vue.use(Input);
Vue.use(Button);
Vue.use(Timeline);
Vue.use(TimelineItem);
Vue.use(Row);
Vue.use(Col);
Vue.use(Card);
Vue.use(Divider);

import 'element-ui/lib/theme-chalk/base.css';
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
Vue.component(CollapseTransition.name, CollapseTransition)

Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$message = Message;
Vue.prototype.$loading = Loading.service;

//#################################

Vue.prototype.$bus = new Vue();
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
