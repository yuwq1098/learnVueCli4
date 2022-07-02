<!--
  - @description: 站酷的部分盒子页面demo
  - @author: 则丸
  - @weChat: yuwq1098
  - @producer: 海康威视 & 易立德
  -->

<template>
    <div class="Example02"></div>
</template>

<script>
export default {
    name: 'Example02',
    // 注册组件
    components: {},
    // 数据
    data() {
        return {
            data: [
                { id: 7, parentId: 4, name: '三级菜单A-A-A' },
                { id: 8, parentId: 7, name: '四级菜单A-A-A-A' },
                { id: 1, parentId: 0, name: '一级菜单A' },
                { id: 2, parentId: 0, name: '一级菜单B' },
                { id: 3, parentId: 0, name: '一级菜单C' },
                { id: 4, parentId: 1, name: '二级菜单A-A' },
                { id: 5, parentId: 1, name: '二级菜单A-B' },
                { id: 6, parentId: 2, name: '二级菜单B-A' },
                { id: 9, parentId: 8, name: '五级菜单A-A-A-A-A' },
                { id: 10, parentId: 9, name: '六级菜单A-A-A-A-A-A' },
                {
                    id: 11,
                    parentId: 10,
                    name: '七级菜单A-A-A-A-A-A-A',
                },
                {
                    id: 12,
                    parentId: 11,
                    name: '八级菜单A-A-A-A-A-A-A-A',
                },
                {
                    id: 13,
                    parentId: 12,
                    name: '九级菜单A-A-A-A-A-A-A-A-A',
                },
                {
                    id: 14,
                    parentId: 13,
                    name: '十级菜单A-A-A-A-A-A-A-A-A-A',
                },
            ],
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
    computed: {},
    // 数据监听
    watch: {
        // watch...
    },
    // 实例方法
    methods: {
        // 初始化
        init() {
            console.log(this.treeData(), 'this.treeData')

            let navigation = [
                {
                    id: 1,
                    subitems: [
                        {
                            id: 2,
                            subitems: [
                                {
                                    id: 3,
                                    subitems: [],
                                    parent: 2,
                                },
                                {
                                    id: 4,
                                    subitems: [],
                                    parent: 2,
                                },
                            ],
                            parent: 1,
                        },
                        {
                            id: 5,
                            subitems: [],
                            parent: 1,
                        },
                    ],
                },
                {
                    id: 6,
                    subitems: [],
                },
            ]
            function flatten(array) {
                return [].concat(...array.map((item) => [].concat(item, ...flatten(item.subitems))))
            }
            navigation = flatten(navigation)
            console.log(navigation)
        },
        treeData() {
            let cloneData = JSON.parse(JSON.stringify(this.data)) // 对源数据深度克隆
            return cloneData.map((father, i) => {
                console.log(i, 'i')
                let branchArr = cloneData.filter((child) => father.id == child.parentId) //返回每一项的子级数组
                console.log(branchArr, 'branchArr')
                father.children = branchArr
                father.index = i
                // branchArr.length > 0 ? (father.children = branchArr) : '' //如果存在子级，则给父级添加一个children属性，并赋值
                return father.parentId == 0 ? father : undefined //返回第一层
            })
        },
    },
}
</script>

<!-- 限定作用域'scoped' 不要误写成scope -->
<style lang="stylus" rel="stylesheet/stylus" scoped></style>
