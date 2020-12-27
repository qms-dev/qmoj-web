import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button, Col, Row, Avatar, Tabs, Select,Table,Pagination } from 'ant-design-vue'

createApp(App).use(store).use(router)
  .use(Button)
  .use(Col)
  .use(Row)
  .use(Avatar)
  .use(Tabs)
  .use(Select)
  .use(Table)
  .use(Pagination)
  .mount('#app')
