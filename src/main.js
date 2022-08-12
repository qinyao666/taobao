import Vue from 'vue'
import App from './App.vue'

import VueRouter from "vue-router";
import 'vant/lib/index.css';
import { Badge } from 'vant';
import { Search } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { DropdownMenu, DropdownItem } from 'vant';
import { Checkbox, CheckboxGroup } from 'vant';
import { SubmitBar } from 'vant';
import { Divider } from 'vant';
import { Form } from 'vant';
import { Field } from 'vant';
import { GoodsAction, GoodsActionIcon, GoodsActionButton } from 'vant';

Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
Vue.use(Form);
Vue.use(Field);
Vue.use(Divider);
Vue.use(SubmitBar);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Search);
Vue.use(Badge);
Vue.use(VueRouter)

Vue.config.productionTip = false
import router from "./assets/js/router.js"
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
