<!--
  - @description: 站酷的部分盒子页面demo
  - @author: 则丸
  - @weChat: yuwq1098
  - @producer: 海康威视 & 易立德
  -->

<template>
    <div class="Example01">
        <!-- 盒子容器 -->
        <div class="m-box-container">
            <!-- 标题 -->
            <div class="m-header">
                <!-- 导航tab切换 -->
                <ul class="u-tab-nav-list">
                    <template v-for="[key, value] of Object.entries(navList)">
                        <li class="u-item" :key="key" :class="{ active: key == currNavKey }" @click.stop.prevent="handleChangeNav(key)">
                            {{ value }}
                        </li>
                    </template>
                </ul>
            </div>
            <!-- 内容 -->
            <div class="m-content">
                <!-- 盒子的列表容器 -->
                <div class="u-box-list">
                    <template v-for="(item, index) in data">
                        <CardBox :key="index" :data="item"></CardBox>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// 卡片盒子组件
import CardBox from 'components/common/box/card-box.jsx'

export default {
    name: 'Example01',
    // 注册组件
    components: {
        CardBox,
        // components...
    },
    // 数据
    data() {
        return {
            currNavKey: '1',
            navList: {
                '1': '首页推荐',
                '2': '最新发布',
            },
            data: [],
        }
    },
    // 接收父组件传入的参数
    props: {
        // props...
    },
    // vue实例被创建时
    created() {
        // 初始化
        this.init()
    },
    // vue实例被挂载至dom上时
    mounted() {
        // mounted...
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
        // 初始化
        init() {
            // 获取卡片信息
            this.getCardData()
        },
        // 获取卡片信息
        async getCardData() {
            const res = await this.$api.demo_card()
            this.data = res.data
        },
        // 触发 nav的变化
        handleChangeNav(key) {
            this.currNavKey = key
            // 重新获取卡片信息
            this.getCardData()
        },
        // methods...
    },
}
</script>

<!-- 限定作用域'scoped' 不要误写成scope -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
$width = 1380px
.m-box-container
    overflow hidden
    width $width + 40px
    margin 60px auto
    background #fff
    border-radius 6px
    .m-header
        _lineHeight(56px)
        .u-tab-nav-list
            @extend .f__tac
            .u-item
                display inline-block
                vertical-align top
                position relative
                padding 0 30px
                font-size 16px
                color #999
                cursor pointer
                _lineHeight(56px)
                &:hover, &.active
                    color #282828
                &.active
                    &::before
                        content ''
                        display block
                        height 3px
                        background #444
                        _completeCenter(35px, 35px, auto, 0)
    .m-content
        background #f4f4f4
        padding 20px 20px
        min-height 280px
        .u-box-list
            margin-bottom -20px
            @extend .f__clearfix
            width $width + 20px
</style>
