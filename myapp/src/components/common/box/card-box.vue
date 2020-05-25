<!--
  - @description: 卡片盒子组件
  - @author: 则丸
  - @weChat: yuwq1098
  - @producer: 海康威视 & 易立德
  -->

<template>
    <div class="CardBox">
        <li class="u-item">
            <!-- 图片容器区 -->
            <div class="u-picture-wrap">
                <div class="u-label" v-if="+cardLabel <= 4">{{ (data.labelType || '') | cardLabel }}</div>
                <div class="u-pic">
                    <img :src="data.coverImg" :title="data.title || ''" />
                </div>
            </div>
            <!-- 内容区 -->
            <div class="u-content">
                <div class="u-title">{{ data.title || '' }}</div>
                <div class="u-subtit">{{ data.subTitle || '' }}</div>
                <!-- 其他信息 -->
                <div class="u-more-group">
                    <!-- 浏览量 -->
                    <span class="u-group-item"><i class="iconfont icon-chakan"></i><em>{{ data.visitNum || '' }}</em></span>
                    <!-- 评论数 -->
                    <span class="u-group-item"><i class="iconfont icon-message"></i><em>{{ data.commentsNum || '' }}</em></span>
                    <!-- 点赞数 -->
                    <span class="u-group-item"><i class="iconfont icon-like u-link" @click="handleLikenum()"></i><em>{{
                            data.likeNum || '' }}</em></span>
                </div>
            </div>
            <!-- 底部区 -->
            <div class="u-footer">
                <!-- 头像 -->
                <div class="u-avatar">
                    <img :src="data.creatorAvatar" :title="data.creator || ''" />
                </div>
                <!-- 创建人 -->
                <div class="u-name">{{ data.creator || '' }}</div>
                <!-- 创建日期 -->
                <div class="u-datetime">{{ data.creationDate || '' }}</div>
            </div>
        </li>
    </div>
</template>

<script>
export default {
    name: 'CardBox',
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
    // 字段过滤器
    filters: {
        // 卡片label
        cardLabel: (type = '1') => {
            const labelLabels = {
                '1': '正版图片',
                '2': '最新发布',
                '3': '学习视频',
                '4': '最多观看'
            }
            return type && labelLabels[type] ? labelLabels[type] : ''
        }
    },
    // 接收父组件传入的参数
    props: {
        data: {
            type: Object,
            default() {
                return {
                    coverImg: undefined, // 封面图路径
                    labelType: undefined, // 标签类型， 1正版图片 2最新发布 3学习视频 4最多观看
                    title: undefined, // 标题
                    subTitle: undefined, // 副标题
                    creationDate: undefined, // 创建日期
                    creatorAvatar: undefined, // 创建人头像
                    creator: undefined, // 创建人
                    likeNum: undefined, // 点赞数
                    visitNum: undefined, // 访问数
                    commentsNum: undefined // 评论数
                }
            }
        }
        // props...
    },
    // vue实例被创建时
    created() {
        // created...
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
        // 触发点赞
        handleLikenum() {
            this.$message({
                type: 'success',
                message: '点赞成功！'
            })
        }
    }
}
</script>

<!-- 限定作用域'scoped' 不要误写成scope -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
.CardBox
    width 260px
    height 195px + 100px + 50px
    margin 0 20px 20px 0
    @extend .f__fl
    .u-item
        .u-picture-wrap
            position relative
            width 260px
            height 195px
            .u-label
                display inline-block
                position absolute
                min-width 50px
                padding 0 10px
                font-size 12px
                color #fff
                background rgba(0, 0, 0, 0.5)
                border-radius 4px 0
                z-index 1
                @extend .f__tac
                _lineHeight(24px)
                _spacingPlus(2px)
            .u-pic
                overflow hidden
                width 260px
                height 195px
                border-radius 4px 4px 0 0
                transition all 0.1s linear
                cursor pointer
                _imgWrap()
                &:hover
                    opacity 0.8
        .u-content
            padding 11px 16px 13px
            height 75px
            border-bottom 1px solid #eee
            background #fff
            .u-title
                height 20px
                line-height 20px
                margin-bottom 5px
                color #333
                _ellipsis()
            .u-subtit, .u-more-group
                color #bbb
                font-size 12px
            .u-subtit
                margin-bottom 12px
                _lineHeight(18px)
            .u-more-group
                _lineHeight(20px)
                @extend .f__clearfix
                .u-group-item
                    margin-right 12px
                    @extend .f__fl
                    i.iconfont
                        width 18px
                        margin-right 3px
                        font-size 17px
                        _lineHeight(20px)
                        @extend .f__tac
                        &::before
                            vertical-align top
                            color #333
                        &.u-link
                            &:hover
                                cursor pointer
                                color #333
                    em
                        display inline-block
                        line-height 20px
                        vertical-align top
        .u-footer
            _lineHeight(24px)
            padding 13px 16px
            font-size 12px
            background #fff
            @extend .f__clearfix
            .u-avatar
                position relative
                width 24px
                height 24px
                margin-right 8px
                @extend .f__fl
                _imgWrap(true)
            .u-name
                display block
                width 70px
                color #333
                @extend .f__fl
                _ellipsis()
            .u-datetime
                color #bbb
                @extend .f__fr
</style>
