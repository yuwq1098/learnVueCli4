/**
 *  @description: 中央事件总线Event Bus
 *  @author: 则丸
 *  @weChat: yuwq1098
 *  @producer: 海康威视 & 易立德
 **/

export default {
    install: function(Vue, options) {
        // 方法一, 创建一个EventBus类
        class EventBus {
            constructor() {
                this.events = {}
            }
            // event可以是事件名数组
            $on(event, cb) {
                // 多个事件
                if (event instanceof Array) {
                    event.forEach((fn) => this.$on(fn, cb))
                }
                // 单个事件
                if (this.events[event]) {
                    this.events[event].push(cb)
                } else {
                    this.events[event] = [cb]
                }
            }
            // cb 参数：单个事件名，args参数 this.emit('evt',a,b,c)
            $emit(event) {
                let args = Array.from(arguments).slice(1)
                let cbs = this.events[event]
                if (cbs) {
                    cbs.forEach((cb) => cb.apply(this, args))
                }
            }
            // 事件回调执行一次就清除事件，参数：单个事件名，单个监听器
            $once(event, cb) {
                function oneTime() {
                    //先执行回调，然后清除该事件的对应回调
                    cb.apply(this, arguments)
                    this.$off(event, cb)
                }
                // on函数的fn属性添加一个标记，cb，方便循环off清除(提供了事件与回调的时候)
                oneTime.cbName = cb
                this.$on(event, oneTime)
            }
            /**
             * 移除自定义事件监听器。
             * 如果没有提供参数，则移除所有的事件监听器；
             * 如果只提供了事件，则移除该事件所有的监听器；
             * 如果同时提供了事件与回调，则只移除这个回调的监听器。
             */
            $off(event, cb) {
                if (!arguments) {
                    this.events = Object.create(null)
                }
                if (event instanceof Array) {
                    event.forEach((evt) => this.$off(evt, cb))
                }
                if (!cb) {
                    this.events[event] = null
                }
                if (cb) {
                    let cbs = this.events[event]
                    if (cbs) {
                        for (let i = 0; i < cbs.length; i++) {
                            if (cb === cbs[i] || cb === cbs[i].cbName) {
                                cbs.splice(i, 1)
                                break
                            }
                        }
                    }
                }
            }
        }
        Vue.prototype.bus = new EventBus()

        // 方法二, 直接返回新的vue实例
        // Vue.prototype.bus = new Vue()
    },
}
