/**
 *  @description: jsx版卡片盒子组件
 *  @author: 则丸
 *  @weChat: yuwq1098
 *  @producer: 海康威视 & 易立德
 **/

import './card-box.styl'

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
                '4': '最多观看',
            }
            return type && labelLabels[type] ? labelLabels[type] : ''
        },
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
                    commentsNum: undefined, // 评论数
                }
            },
        },
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
                message: '点赞成功！',
            })
        },
        // jsx使用字段过滤器
        useFilters(name, value, ...rest) {
            //使用this.$options.filters[]方式获取本地过滤器
            const filters = this.$options.filters[name]
            return filters(value, ...rest)
        },
        // 获取字段过滤器处理后的信息
        getCardLabel(str) {
            return this.useFilters('cardLabel', str)
        },
    },
    // 视图渲染
    render() {
        const { data } = this
        return (
            <div class="CardBox">
                <li class="u-item">
                    {/*图片容器区*/}
                    <div class="u-picture-wrap">
                        {data.labelType <= 4 && <div class="u-label">{this.getCardLabel(data.labelType || '')}</div>}
                        <div class="u-pic">
                            <img src={data.coverImg} title={data.title || ''} />
                        </div>
                    </div>
                    {/*内容区*/}
                    <div class="u-content">
                        <div class="u-title">{data.title || ''}</div>
                        <div class="u-subtit">{data.subTitle || ''}</div>
                        {/*其他信息*/}
                        <div class="u-more-group">
                            {/*浏览量*/}
                            <span class="u-group-item">
                                <i class="iconfont icon-chakan"></i>
                                <em>{data.visitNum || ''}</em>
                            </span>
                            {/*评论数*/}
                            <span class="u-group-item">
                                <i class="iconfont icon-message"></i>
                                <em>{data.commentsNum || ''}</em>
                            </span>
                            {/*点赞数*/}
                            <span class="u-group-item">
                                <i class="iconfont icon-like u-link" onClick={() => this.handleLikenum()}></i>
                                <em>{data.likeNum || ''}</em>
                            </span>
                        </div>
                    </div>
                    {/*底部区*/}
                    <div class="u-footer">
                        {/*头像*/}
                        <div class="u-avatar">
                            <img src={data.creatorAvatar} title={data.creator || ''} />
                        </div>
                        {/*创建日期*/}
                        <div class="u-name">{data.creator || ''}</div>
                        {/*创建日期*/}
                        <div class="u-datetime">{data.creationDate || ''}</div>
                    </div>
                </li>
            </div>
        )
    },
}
