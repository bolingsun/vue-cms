// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

//导入路由包
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//导入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

//导入MUI的样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
//按需引入Mint-UI中的组件
import { Header,Swipe, SwipeItem } from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

//导入自己的router.js路由模块
import routerObj from './router.js'




// var routerObj = new VueRouter({
//   routes: [
//     {path: '/home', component: HomeContainer},
//     {path: '/member', component: MemberContainer},
//     {path: '/shopcar', component: ShopcarContainer},
//     {path: '/search', component: SearchContainer}
//   ],
//   linkActiveClass:'mui-active',//覆盖默认的路由的高亮的类，默认是router-link-active,这里是用了MUI库的样式类来替换。也可以自定义。
//   mode:'history'
// })

//完整引入mint-ui
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.use(MintUI)

import app from './App.vue'

//Vue.config.productionTip = false

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   components: { App },
//   template: '<App/>'
// })
var vm = new Vue({
  el:'#app',
  render: c => c(app),
  router:routerObj
})
