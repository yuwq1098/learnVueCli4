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

// 5. 使用对应的（vue）UI 框架， 这里用Element UI
// 6. http请求插件， axios
// 7. css预编译器(stylus)的 工程化使用
// 8. Mock数据
// 9. 集中化管理api请求文件
// 9. 全局的js工具函数
// 10. Vue字段过滤器
// 11. 字体图标
// 12. Event Bus 以及 Mixin
// 13. 使项目支持jsx语法

// 将项目中频繁使用的函数赋值给Vue原型属性，便于使用
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app')
