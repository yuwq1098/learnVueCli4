import Vue from 'vue'
import VueRouter from 'vue-router'

// 首页
const Home = () => import('pages/home.vue')
// 示例1代码
const Example01 = () => import('pages/example/example01')
// 示例2代码
const Example02 = () => import('pages/example/example02')

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/demo1', // 重定向
    },
    {
        name: 'Home', // 首页
        path: '/home',
        component: Home,
    },
    {
        path: '/demo1', // 示例1代码
        name: 'Example01',
        component: Example01,
    },
    {
        path: '/demo2', // 示例2代码
        name: 'Example02',
        component: Example02,
    },
]

const router = new VueRouter({
    routes,
})

export default router
