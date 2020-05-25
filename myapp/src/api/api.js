/**
 *  @description: 网站的api请求数据
 *  @author: 则丸
 *  @weChat: yuwq1098
 *  @producer: 海康威视 & 易立德
 **/

// 引入二次封装的axios
import http from '@/utils/http'

// 自定义拉取数据方法(get请求)
const get = function(url, params, prefix = '') {
    return new Promise((resolve, reject) => {
        http.get(prefix + url)
            .then(
                (response) => {
                    resolve(response.data)
                },
                (err) => {
                    reject(err)
                }
            )
            .catch((error) => {
                reject(error)
            })
    })
}

// 自定义请求数据方法(post请求)
const post = function(url, params, prefix = '') {
    return new Promise((resolve, reject) => {
        http(prefix + url, params)
            .then(
                (response) => {
                    resolve(response.data)
                },
                (err) => {
                    reject(err)
                }
            )
            .catch((error) => {
                reject(error)
            })
    })
}

// 导出api请求
export default {
    // 请求的方法
    demo_card(params) {
        return get('mock/demo/card')
    },
}
