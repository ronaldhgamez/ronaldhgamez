import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import i18n from './translations';
import store from './store'

localStorage.setItem("darkMode", 'true');

const app = createApp(App);

app.use(router)
app.use(i18n)
// Install the store instance as a plugin
app.use(store)
app.mount('#app')
