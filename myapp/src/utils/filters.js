/**
 *  @description: 全局的字段过滤器， 利用install的方式注册安装， 然后在main.js中Vue.use使用
 *  @author: 则丸
 *  @weChat: yuwq1098
 *  @producer: 海康威视 & 易立德
 **/

let textFilters = {}

textFilters.install = function(Vue, options) {
    // -手机号匿名化处理 => 188****6264
    const telAnonymization = (str) => {
        // return str ? str.substr(0, 3) + '****' + str.substr(7, 4) : 0
        return str ? ('' + str || '').split('').reduce((total, n, i) => total + (i >= 3 && i <= 6 ? '*' : n), '') : 0
    }

    // -格式化金额
    const formatAmount = (num, decimals_len = 2) => {
        return parseFloat(Math.round((Number(num) || 0) * 100) / 100).toFixed(decimals_len)
    }

    // 全部的字段过滤器
    const filters = {
        telAnonymization,
        formatAmount,
    }

    // 批量注册过滤器
    Object.keys(filters).forEach((key) => {
        Vue.filter(key, filters[key])
    })
}

export default textFilters
