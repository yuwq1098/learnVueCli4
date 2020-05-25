import Vue from 'vue'
import App from './App.vue'
// import './registerServiceWorker' // 离线加载， 提高应用程序的访问速度
import router from './router' // vue-router
import store from './store' // vuex

// 已包含的
// 1. vuex
// 2. vue-router
// 3. stylus
// 4. eslint + prettier

// 一个项目还需要
// 1. 引入babel polyfill， 解决项目无法在ie9+ 以上版本的 ie浏览器打不开的问题
// 1. 结构优化
// 2. vue.config.js 的配置文件， 用来做项目的webpack工程化配置
// 3. 使用对应的（vue）UI 框架， 这里用Element UI
// 4. http请求插件， axios
// 5. css预编译器(stylus)的 工程化使用
// 6. Mock数据
// 7. 全局的js工具函数
// 8. Vue字段过滤器
// 9. 字体图标
// 10. Event Bus 以及 Mixin
// 11. 使项目支持jsx语法

// 将项目中频繁使用的函数赋值给Vue原型属性，便于使用
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app')
