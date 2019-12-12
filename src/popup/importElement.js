import Vue from 'vue'
import {
  // import { Icon } from 'vue-awesome/components/Icon';
  Button,
  Form,
  FormItem,
  Input,
  Checkbox,
  Select,
  Option,
  Dialog,
  MessageBox,
  Tabs,
  TabPane,
  Loading,
  Icon
} from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Checkbox)
Vue.use(Select)
Vue.use(Option)
Vue.use(Dialog)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Loading)
Vue.use(Icon)

Vue.prototype.$confirm = MessageBox.confirm
