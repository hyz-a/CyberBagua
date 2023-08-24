import { createApp } from 'vue'
import App from './App.vue'
// 引入ant-design ui框架
import Antd from 'ant-design-vue';
// 引入样式
import 'ant-design-vue/dist/reset.css';

const app = createApp(App);

app.use(Antd).mount('#app');
