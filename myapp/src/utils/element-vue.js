/**
 *  @description: 按需引入element-ui， 并将更改后的Vue导出，给main.js使用
 *  @author: 则丸
 *  @weChat: yuwq1098
 *  @producer: 海康威视 & 易立德
 **/
import { Input, Button, Table, TableColumn, Form, FormItem, Card, Image, Loading, MessageBox, Message } from 'element-ui'
// 引入element-ui使用的样式文件
import 'element-ui/lib/theme-chalk/index.css'

export default {
    install: function(Vue, options) {
        const components = [Input, Button, Table, TableColumn, Form, FormItem, Card, Image, Loading]
        components.forEach((n, i) => {
            Vue.use(components[i])
        })

        Vue.prototype.$message = Message
        Vue.prototype.$msgbox = MessageBox
    },
}
