/**
 *  @description: 按需引入element-ui， 并将更改后的Vue导出，给main.js使用
 *  @author: 则丸
 *  @weChat: yuwq1098
 *  @producer: 海康威视 & 易立德
 **/

import Vue from 'vue'
import {
    //   Pagination,
    //   Dialog,
    //   Autocomplete,
    //   Dropdown,
    //   DropdownMenu,
    //   DropdownItem,
    //   Menu,
    //   Submenu,
    //   MenuItem,
    //   MenuItemGroup,
    Input,
    //   InputNumber,
    //   Radio,
    //   RadioGroup,
    //   RadioButton,
    //   Checkbox,
    //   CheckboxButton,
    //   CheckboxGroup,
    //   Switch,
    //   Select,
    //   Option,
    //   OptionGroup,
    Button,
    //   ButtonGroup,
    Table,
    TableColumn,
    //   DatePicker,
    //   TimeSelect,
    //   TimePicker,
    //   Popover,
    //   Tooltip,
    //   Breadcrumb,
    //   BreadcrumbItem,
    Form,
    FormItem,
    //   Tabs,
    //   TabPane,
    //   Tag,
    //   Tree,
    //   Alert,
    //   Slider,
    //   Icon,
    //   Row,
    //   Col,
    //   Upload,
    //   Progress,
    //   Spinner,
    //   Badge,
    Card,
    //   Rate,
    //   Steps,
    //   Step,
    //   Carousel,
    //   CarouselItem,
    //   Collapse,
    //   CollapseItem,
    //   Cascader,
    //   ColorPicker,
    //   Transfer,
    //   Container,
    //   Header,
    //   Aside,
    //   Main,
    //   Footer,
    //   Timeline,
    //   TimelineItem,
    //   Link,
    //   Divider,
    Image,
    //   Calendar,
    //   Backtop,
    //   PageHeader,
    //   CascaderPanel,
    Loading,
    // MessageBox,
    // Message,
    // Notification,
} from 'element-ui'

// 引入element-ui使用的样式文件
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Pagination)
// Vue.use(Loading.directive)

// Vue.prototype.$loading = Loading.service
// Vue.prototype.$msgbox = MessageBox
// Vue.prototype.$alert = MessageBox.alert
// Vue.prototype.$confirm = MessageBox.confirm
// Vue.prototype.$prompt = MessageBox.prompt
// Vue.prototype.$notify = Notification
// Vue.prototype.$message = Message

export default Vue
