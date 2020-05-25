/**
 *  @description: 提供本网站所使用工具函数
 *  @author: 则丸
 *  @weChat: yuwq1098
 *  @producer: 海康威视 & 易立德
 **/

/* eslint-disable */

// Promise 等待
export function promiseSleep(num) {
    let time = num || 0
    return new Promise(function(resolve, reject) {
        let timeouter = setTimeout(function() {
            clearTimeout(timeouter)
            resolve(store.state.xw3d.viewer)
        }, time)
    })
}

/**
 * 格式化时间
 *
 * @param {Number} timestamp
 * @returns 格式化后的时间
 */
export function formatDate(timestamp) {
    if (!timestamp) return ''
    // 当前时间戳减去过去的时间戳
    let time = new Date().getTime() - timestamp
    if (time < 0) {
        return '刚刚'
    } else if (time / 1000 < 30) {
        return '刚刚'
    } else if (time / 1000 < 60) {
        return parseInt(time / 1000) + '秒前'
    } else if (time / 60000 < 60) {
        return parseInt(time / 60000) + '分钟前'
    } else if (time / 3600000 < 24) {
        return parseInt(time / 3600000) + '小时前'
    } else if (time / 86400000 < 31) {
        return parseInt(time / 86400000) + '天前'
    } else if (time / 2592000000 < 12) {
        return parseInt(time / 2592000000) + '月前'
    } else {
        let year = parseInt(time / 31536000000)
        let month = parseInt((time - year * 31536000000) / 2592000000)
        return month ? year + '年' + addPrefixZero(month) + '月前' : year + '年前'
    }
}

/**
 * @description 为小于10的数字前面加0
 * @param number 数字
 */
export function addPrefixZero(val) {
    return Number(val) < 10 ? '0' + val : val.toString()
}

// vue的Data数据转json
export function dataToJson(data) {
    return JSON.parse(JSON.stringify(data))
}

// 被vuex JSON.stringify后要进行反向转换 成为JSON
export function strToJson(data) {
    return JSON.parse(data)
}

// 对象拷贝 JSON转换
export function cloneObj(data) {
    return JSON.parse(JSON.stringify(data))
}

/**
 * @description  自动点击上传事件，需要一个按钮作为载体
 * @param target 事件触发对象
 */
export function autotrigger(target) {
    let ie = navigator.appName === 'Microsoft Internet Explorer'
    if (ie) {
        target.click()
    } else {
        let a = document.createEvent('MouseEvents') // FF的处理
        a.initEvent('click', true, true)
        target.dispatchEvent(a)
    }
}

// 计算高度 屏幕高度减去传入的高度
export function calcHeight(pixel) {
    let height = pixel ? Number(pixel) : 0
    return clientHeight() - height
}

// 获取页面可视内容的高度
export function clientHeight() {
    let ch = null
    if (arguments.length > 0 && getValClass(arguments[0]) === 'Number') {
        ch = document.body.clientHeight || document.activeElement.clientHeight || arguments[0]
    } else {
        ch = document.body.clientHeight || document.activeElement.clientHeight || 600
    }
    // 如果在document上获取的高不合理，那么就用window上的高
    if (ch > window.innerHeight) {
        ch = window.innerHeight
    }
    return ch
}

// 判断用户操作了鼠标还是键盘,是哪个按钮或者键
export function whichMouseButton(callback) {
    let CB = callback
    // 开始
    this.prototype['start'] = () => {
        let btnCode = {
            '2': 'right',
            '0': 'left',
            '1': 'center',
            d: 'double',
        }
        document.onmousedown = function(ev) {
            let e = ev || event
            let btnNum = e.button

            // 返回相关值
            CB && CB(btnCode[btnNum] ? btnCode[btnNum] : -1)
        }
        document.ondblclick = () => {
            // 返回相关值-双击左键
            CB && CB(btnCode['d'])
        }
    }
    // 销毁
    this.prototype['destroy'] = function() {
        document.onmousedown = null
        document.ondblclick = null
    }
}

/**
 * @description 获取值类型
 * @return String 类型名
 */
export function getValClass(x) {
    let str = Object.prototype.toString.call(x)
    return /^\[object (.*)\]$/.exec(str)[1]
}

// 判断数据类型的方法（对typeof的增强）
export function valueType(obj) {
    if (obj === null) {
        return 'null'
    }
    if (typeof Array.isArray === 'function') {
        // 浏览器支持则使用isArray()方法
        if (Array.isArray(obj)) {
            return 'array'
        }
    } else if (Object.prototype.toString.call(obj) === '[object Array]') {
        // 否则使用toString方法
        return 'array'
    }
    return typeof obj
}

/**
 * @description 对非指定对象的点击
 * @param obj 指定对象(1个对象)
 */
export function cancelBubbleOne(obj, Fn) {
    obj.onclick = function(ev) {
        let e = ev || event
        if (e && e.stopPropagation) {
            // 阻止冒泡
            e.stopPropagation()
        } else {
            window.event.cancelBubble = true
        }
    }
    // 处理点击
    document.onclick = function(ev) {
        let e = ev || event
        let target = e.target || e.srcElement
        if (target !== obj) {
            // 事件对象
            // 当有回调的时候执行回调
            Fn && Fn()
        }
    }
}

// 查看键值修正版
export function keyCode() {
    document.onkeyup = function(ev) {
        let e = ev || event
        let oP = document.createElement('p')
        let aString = String.fromCharCode(e.keyCode)
        switch (e.keyCode) {
            case 27:
                aString = 'Esc'
                break
            case 112:
                aString = 'F1'
                break
            case 113:
                aString = 'F2'
                break
            case 114:
                aString = 'F3'
                break
            case 115:
                aString = 'F4'
                break
            case 116:
                aString = 'F5'
                break
            case 117:
                aString = 'F6'
                break
            case 118:
                aString = 'F7'
                break
            case 119:
                aString = 'F8'
                break
            case 120:
                aString = 'F9'
                break
            case 121:
                aString = 'F10'
                break
            case 122:
                aString = 'F11'
                break
            case 123:
                aString = 'F12'
                break
            case 44:
                aString = 'PrtScr'
                break
            case 145:
                aString = 'Scroll'
                break
            case 19:
                aString = 'Pause'
                break
            case 192:
                aString = '`'
                break
            case 189:
                aString = '-'
                break
            case 187:
                aString = '='
                break
            case 8:
                aString = '←删除'
                break
            case 45:
                aString = 'Insert'
                break
            case 36:
                aString = 'Home'
                break
            case 33:
                aString = 'PgUp'
                break
            case 144:
                aString = '数字区 NumLock'
                break
            case 111:
                aString = '数字区 /'
                break
            case 106:
                aString = '数字区 *'
                break
            case 109:
                aString = '数字区 -'
                break
            case 9:
                aString = 'Tab'
                break
            case 219:
                aString = '['
                break
            case 221:
                aString = ']'
                break
            case 13:
                aString = 'Enter'
                break
            case 46:
                aString = 'Delete'
                break
            case 35:
                aString = 'End'
                break
            case 34:
                aString = 'PgDn'
                break
            case 103:
                aString = '数字区 7'
                break
            case 104:
                aString = '数字区 8'
                break
            case 105:
                aString = '数字区 9'
                break
            case 107:
                aString = '数字区 +'
                break
            case 20:
                aString = 'Capslock'
                break
            case 186:
                aString = '：'
                break
            case 222:
                aString = '’'
                break
            case 220:
                aString = '｜'
                break
            case 100:
                aString = '数字区 4'
                break
            case 101:
                aString = '数字区 5'
                break
            case 102:
                aString = '数字区 6'
                break
            case 16:
                aString = 'Shift'
                break
            case 188:
                aString = '，'
                break
            case 190:
                aString = '。'
                break
            case 191:
                aString = '/'
                break
            case 38:
                aString = '方向↑'
                break
            case 97:
                aString = '数字区 1'
                break
            case 98:
                aString = '数字区 2'
                break
            case 99:
                aString = '数字区 3'
                break
            case 17:
                aString = 'Ctrl'
                break
            case 91:
                aString = '左Window'
                break
            case 92:
                aString = '右Window'
                break
            case 18:
                aString = 'Alt'
                break
            case 32:
                aString = '空格'
                break
            case 93:
                aString = '打印'
                break
            case 37:
                aString = '方向←'
                break
            case 40:
                aString = '方向↓'
                break
            case 39:
                aString = '方向→'
                break
            case 96:
                aString = '数字区 0'
                break
            case 110:
                aString = '数字区 .'
                break
            default:
                aString = ''
                break
        }
        oP.innerHTML = '按键' + ':' + aString + ' ' + '键值' + ':' + ev.keyCode
        document.body.appendChild(oP)
    }
}
