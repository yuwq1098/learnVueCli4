// koa热刷新
// https://www.cnblogs.com/liuyt/p/7217024.html

const router = require('koa-router')()
const Mock = require('mockjs') //引入mockjs
const Random = Mock.Random //引入mockjs生成随机属性的函数 random具体可以生成

//详见http://mockjs.com/examples.html
router.prefix('/demo')

router.get('/card', async (ctx, next) => {
    // 封面图集合
    const coverPicMaps = [
        'https://img.zcool.cn/community/012b385ebce25da801214814ac0ba5.jpg@260w_195h_1c_1e_1o_100sh.jpg',
        'https://img.zcool.cn/community/01cf665ec0c350a8012072002bc760.jpg@260w_195h_1c_1e_1o_100sh.jpg',
        'https://img.zcool.cn/community/0318d955ec0d158a801207200fe87df.jpg@260w_195h_1c_1e_1o_100sh.jpg',
        'https://img.zcool.cn/community/0136ec5ec0e3c6a8012148146b227a.jpg@260w_195h_1c_1e_1o_100sh.jpg',
        'https://img.zcool.cn/community/01fe835ec05339a80120720008cf50.jpg@260w_195h_1c_1e_1o_100sh.jpg',
        'https://img.zcool.cn/community/0191e55ebcb066a801207200b706ad.jpg',
        'https://img.zcool.cn/community/01eaea5ebf51efa801207200e2cfbf.jpg@260w_195h_1c_1e_1o_100sh.jpg',
        'https://img.zcool.cn/community/031cd385ebfa227a801207200f97448.jpg@260w_195h_1c_1e_1o_100sh.jpg',
        'https://img.zcool.cn/community/0162a35ebfbce7a801214814bd7d3f.jpg@260w_195h_1c_1e_1o_100sh.jpg',
        'https://img.zcool.cn/community/01d2165ebec688a801207200604db0.jpg@260w_195h_1c_1e_1o_100sh.jpg',
        'https://img.zcool.cn/community/01aa155ebe627ca80120720032522c.jpg@260w_195h_1c_1e_1o_100sh.jpg',
        'https://img.zcool.cn/community/01351f5ebe1936a801207200a1b722.jpg@260w_195h_1c_1e_1o_100sh.jpg',
        'https://img.zcool.cn/community/03129845ebe18bba801207200deb717.jpg@260w_195h_1c_1e_1o_100sh.jpg',
        'https://img.zcool.cn/community/03121e25ebe4613a8012072003498fb.jpg@260w_195h_1c_1e_1o_100sh.jpg',
        'https://img.zcool.cn/community/017cb25eba6f19a8012148146a6be6.jpg@260w_195h_1c_1e_1o_100sh.jpg',
        'https://img.zcool.cn/community/01af085ebe5a11a8012148142a6894.jpg@260w_195h_1c_1e_1o_100sh.jpg',
        'https://img.zcool.cn/community/018ac15ebcfd7ca801207200b52778.jpg@260w_195h_1c_1e_1o_100sh.jpg',
        'https://img.zcool.cn/community/0129185ebcf347a8012148146fca16.jpg@260w_195h_1c_1e_1o_100sh.jpg',
        'https://img.zcool.cn/community/031cac15ebbfc31a801207200a27e2c.jpg@260w_195h_1c_1e_1o_100sh.jpg',
        'https://img.zcool.cn/community/01f73b5ebcb6a5a80121481428a257.jpg@260w_195h_1c_1e_1o_100sh.jpg',
    ]

    const getData = function () {
        return Mock.mock({
            code: 200,
            message: 'Successful.',
            success: true,
            'data|10': [
                {
                    'id|+1': 1,
                    // coverImg: 'https://img.zcool.cn/community/012b385ebce25da801214814ac0ba5.jpg@260w_195h_1c_1e_1o_100sh.jpg', // 封面图路径
                    // labelType: '@pick(["1", "2", "3", "4"])', // 标签类型， 1正版图片 2最新发布 3学习视频 4最多观看
                    coverImg: function () {
                        return coverPicMaps[Random.integer(0, 19)]
                    },
                    labelType: /[1-9]/, // 标签类型， 1正版图片 2最新发布 3学习视频 4最多观看
                    title: '@ctitle(5,25)', // 标题
                    subTitle: '@ctitle(3,12)', // 副标题
                    creationDate: '@datetime()', // 创建日期
                    // creatorAvatar: "@image('200x100', '#4A7BF7','#fff','pic')",
                    // 创建人头像
                    creatorAvatar: function () {
                        // return Random.image('200x100', '#4A7BF7','#fff','pic')
                        return [
                            'https://img.zcool.cn/community/0470045824cf9da84a0e282b995cd2.jpg@80w_80h_1c_1e_1o_100sh.jpg',
                            'https://img.zcool.cn/community/041186571cc31b000001b73edf8818.jpg@80w_80h_1c_1e_1o_100sh.jpg',
                            'https://img.zcool.cn/community/04975d57eb56eba84a0f320d7abcab.jpg@80w_80h_1c_1e_1o_100sh.jpg',
                            'https://img.zcool.cn/community/011ef15d425b52a8012187f480e134.jpg@80w_80h_1c_1e_1o_100sh.jpg',
                        ][Random.integer(0, 3)]
                    },
                    creator: '@cname(2, 6)', // 创建人
                    visitNum: '@integer(10,2000)', // 访问数
                    commentsNum: '@integer(2,500)', // 评论数
                    likeNum: '@integer(3,1000)', // 点赞数
                },
            ],
        })
    }
    ctx.body = await getData()
})

module.exports = router
