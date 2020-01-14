import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../views/home.vue'
// importAll(require.context('./views', true, /\.router\.js/));
Vue.use(Router)
let routers = require.context('../views', true, /\.vue$/i).keys()
/**
 * 正则 首先匹配./ ,然后一级目录，不包含components的二级目录，以.vue结尾的三级目录
 */
let indexRouterMap = {}  // 用来存储以index.vue结尾的文件，因为index.vue是列表文件，需要加入layout（我们的菜单）,需要keepAlive，需要做权限判断
let detailRouterArr = [] // 用来存储以非index.vue结尾的vue文件，此类目前不需要layout
routers.forEach(item => {
  const paths = item.match(/[a-zA-Z]+/g)  //paths中存储了一个目录，二级目录，文件名
  const routerChild = {  //定义路由对象
    path:'/' +  paths[0],     
    name: `${paths[0]}${paths[1]}`,   //upperFirst,lodash 首字母大写方法
    component(resolve) {
      require([`../views${item.slice(1)}`], resolve)
    },
  }
  if (/index\.vue$/.test(item)) {  //判断是否以index。vue结尾
    if (indexRouterMap[paths[0]]) {   //判断一级路由是否存在，存在push二级路由，不存在则新建
      indexRouterMap[paths[0]].children.push(routerChild)
    } else {
      indexRouterMap[paths[0]] = {
        path: '/' + paths[0],
        component: Layout,
        children: [routerChild]
      }
    }
  } else {     //不以index.vue结尾的，直接添加到路由中
    console.log()
    if (item.slice(1) === '/home.vue') {
        return false
    }
    detailRouterArr.push({
      path: item.slice(1, -4),   //渠道最前面的 . 和最后的.vue
      name: `${paths[0]}`,
      component(resolve) {
        require([`../views${item.slice(1)}`], resolve)
      },
      meta: {
        noCache: true,   //不keepAlive
        noVerify: true   //不做权限验证
      }
    })
  }
})

var object =  [
  ...Object.values(indexRouterMap),
  ...detailRouterArr,
  {
    path: '/',
    component: Layout,
    name: 'home',
    meta: { title: '首页', noCache: true, noVerify: true },
    children: [
     
    ]
  },
]
export default new Router({
  routes: object
})
