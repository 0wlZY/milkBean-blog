// import Vue from "vue";
// import Router from "vue-router";

// Vue.use(Router);

// export default new Router({
//   mode: "history",
//   base: process.env.BASE_URL,
//   routes: [
//     {
//       path: "/",
//       component: Home,
//       children: [
//         {
//           path: "",
//           component: () => import("@/views/home/index")
//         }
//       ]
//     }
//   ]
// });
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/layouts/Home.vue";
// import basicLayout from '@/layouts/BasicLayout'
// import $config from '@/config'

// // 子路由
// import risk from './risk'
// import batch from './batch'
// import safety from './safety'

Vue.use(VueRouter)

/**
 * 数据结构说明
 *
 * path  路由
 * name   路由标识
 * component    组件引用
 * meta   页面meta
 * hideMenu   菜单中，是否隐藏
 * icon    菜单icon
 * imgIcon    菜单图片类型icon
 * children     子菜单
 */
const routes = [
  {
    path: '*',
    redirect: '/frist',
    hideMenu: true
  },
  {
    path: "/frist",
    component: Home,
    meta: {
      title: '首页'
    },
    children: [
      {
        path: "",
        component: () => import("@/views/home/index")
      }
    ],
    // imgIcon: $config.menuIcons.iconRisk
  },
  {
    path: "/classify",
    component: Home,
    meta: {
      title: '分类'
    },
    children: [
      {
        path: "",
        component: () => import("@/views/classify/index")
      }
    ],
    // imgIcon: $config.menuIcons.iconRisk
  },
  {
    path: "/tag",
    component: Home,
    meta: {
      title: '标签'
    },
    children: [
      {
        path: "",
        component: () => import("@/views/tag/index")
      }
    ],
    // imgIcon: $config.menuIcons.iconRisk
  },
  // {
  //   path: '/login',
  //   name: 'login',
  //   component: () => import('@/views/login/index'),
  //   meta: {
  //     title: '登录'
  //   },
  //   hideMenu: true
  // },
  // {
  //   path: '/risk',
  //   component: basicLayout,
  //   meta: {
  //     title: '风险筛查报告'
  //   },
  //   children: [...risk],
  //   imgIcon: $config.menuIcons.iconRisk
  // },
]

const router = new VueRouter({
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (!to.meta.savePos) {
        return { x: 0, y: 0 }
      }
    }
  },
  routes
})

export default router
