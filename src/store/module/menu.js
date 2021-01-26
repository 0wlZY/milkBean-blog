/**
 * 引用vue-router中的路由作为菜单
 */
import routerDeploy from '@/router'
const { routes } = routerDeploy.options

export default {
  namespaced: true,
  /**
   * [state 状态]
   * @param {Array} menuList            菜单列表
   */
  state: {
    menuList: routes
  }
}
