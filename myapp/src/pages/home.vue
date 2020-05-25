<!--
  - @description: vue主页
  - @author: 则丸
  - @weChat: yuwq1098
  - @producer: 海康威视 & 易立德
  -->

<template>
    <div class="Home">
        我是vue主页
        <el-button @click="() => bus.$emit('hello')">我是按钮{{ 18870836264 | telAnonymization }}</el-button>
        <!-- <el-checkbox>我是按钮</el-checkbox> -->
    </div>
</template>

<script>
export default {
    name: 'Home',
    // 注册组件
    components: {
        // components...
    },
    // 数据
    data() {
        return {
            // date...
        }
    },
    // 接收父组件传入的参数
    props: {
        // props...
    },
    // vue实例被创建时
    created() {
        // created...
        this.$message({
            type: 'error',
            message: '有意思',
        })
    },
    // vue实例被挂载至dom上时
    mounted() {
        // mounted...
        this.$api.demo_card().then((response) => {
            console.log(response.data)
        })
        console.log(this.$util.formatDate(1561359600000))
        const that = this
        this.bus.$on('hello', () => {
            this.$message({
                type: 'success',
                message: 'hello!',
            })
        })
    },
    // 销毁实例的钩子
    destroyed() {
        // destroyed...
    },
    // 属性值计算
    computed: {
        // computed...
    },
    // 数据监听
    watch: {
        // watch...
    },
    // 实例方法
    methods: {
        // methods...
    },
}
</script>

<!-- 限定作用域'scoped' 不要误写成scope -->
<style lang="stylus" rel="stylesheet/stylus" scoped></style>
