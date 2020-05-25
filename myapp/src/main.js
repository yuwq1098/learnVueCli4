/**
 *  @description: 项目运行所使用的入口js文件
 *  @author: 则丸
 *  @weChat: yuwq1098
 *  @producer: 海康威视 & 易立德
 **/
// 引入 polyfill，解决部分es6 babel转译问题, 一般用来为旧浏览器提供它没有原生支持的较新的功能
import '@babel/polyfill/dist/polyfill.min.js'
import Vue from 'vue'
import App from './App.vue'
import router from './router' // vue-router
import store from './store' // vuex
// 引入 按需引入的element-ui组件库
import ElementVue from '@/utils/element-vue'
// 引入二次封装的axios
import http from '@/utils/http'
// 全局引入字段过滤器的安装文件
import textFilters from '@/utils/filters'
// 中央事件总线Event Bus,实现兄弟组件通信
import EventBus from '@/utils/bus'
// 提供本网站所使用工具函数
import * as utils from '@/utils/util'

// 引入网站使用的主要样式文件
import '@/assets/css/main.styl'

// 将项目中频繁使用的函数赋值给Vue原型属性，便于使用
Vue.config.productionTip = false

Vue.use(ElementVue)
Vue.use(http)
Vue.use(textFilters)
Vue.use(EventBus)

Vue.prototype.$util = utils

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app')

// 已包含的
// 1. vuex
// 2. vue-router
// 3. stylus
// 4. eslint + prettier

// 一个项目还需要
// 1. 引入babel polyfill， 解决项目无法在ie9+ 以上版本的 ie浏览器打不开的问题
// ---- yarn add @babel/polyfill
// ---- npm install @babel/polyfill

// 2. 具备eslint自动格式化功能
// ---- 丰富 .eslintrc.js 文件， 约束指定的风格
// ---- 在vscode 编辑器中， 下载 eslint 及 prettier 插件
// -------- ESLint @2.1.5 - 支持es6语法的代码检测工具
// -------- Prettier - Code formatter @4.7.0 - 用来替代lint中的一些场景，比如说分号/tab缩进/空格/引号，这些在lint工具检查出问题之后还需要手动修改, 相当于eslint 的增强
// -------- Vetur @2.1.5 - 强大的vue开发工具， 支持vue各种语法
// ---- 安装eslint 相关的依赖
// -------- yarn add babel-eslint eslint eslint-plugin-prettier eslint-plugin-vue --dev
// "babel-eslint": "^10.1.0",
// "eslint": "^6.7.2",
// "eslint-plugin-prettier": "^3.1.1",
// "eslint-plugin-vue": "^6.2.2",

// 3. 结构优化
// api -- 数据请求相关的文件
// assets -- 资源文件（字体图标、css样式、图片、图标、第三方js插件库（vendor是供应商的意思） ）
// components -- vue组件
// pages -- vue页面， 一个页面可以由很多个组件组成
// router -- vue路由
// store -- vuex 数据状态管理
// utils -- js工具

// 4. vue.config.js 的配置文件， 用来做项目的webpack工程化配置

// 5. 使用对应的（vue）UI 框架， 这里用Element UI， 并按需加载 element-ui
// ---- 安装element ui 的依赖
// -------- yarn add element ui
// ---- 使用按需element ui， https://element.eleme.cn/#/zh-CN/component/quickstart
// -------- yarn add babel-plugin-component --dev
// -------- 修改bebal.config.js
// ---- 按需引入element ui， 在utils文件夹下 添加 element-vue.js（用vue插件的写法） 文件
// ---- 在 main.js 中引入 element-vue.js 文件, 并使用它（vue插件）

// 6. http请求插件， axios
// ---- 安装element ui 的依赖
// -------- yarn add axios
// ---- 二次封装axios（用vue插件的写法）, 并在main.js 通过全局方法 Vue.use() 使用插件，就相当于调用install方法

// 7. 字体图标
// ---- https://www.iconfont.cn, 找到自己需要的图标， 添加购物车， 然后创建一个新的项目
// ---- 生成字体图标文件， 并下载到本地
// ---- 放在项目中， 等待使用

// 8. css预编译器(stylus)的 工程化使用
// ---- 创建 base.styl -全局注入的stylus文件
// ---- 创建 main.styl -项目使用的主要样式文件
// ---- 创建 mixin.styl -项目依赖的stylus样式混合方法
// ---- 创建 normalize.styl -修改浏览器的默认样式，使浏览器默认样式达到一个通用、普适的水平
// ---- 创建 tool.styl -项目依赖的stylus样式工具类
// ---- 创建 variable.styl -项目依赖的stylus样式变量
// ---- 在main.js 引入main.styl
// ---- 在vue.config.js 全局引入base.styl

// 10. Vue字段过滤器
// ---- 创建 filters.js 并在 main.js 中使用 （写成vue插件）

// 11. Event Bus
// ---- 创建 bus.js 并在 main.js 中使用 （写成vue插件）

// 12. 全局的js工具函数
// ---- 创建 utils.js 并在 main.js 中使用

// 13. Mock数据
// 9. 集中化管理api请求文件
// 14. 使项目支持jsx语法
