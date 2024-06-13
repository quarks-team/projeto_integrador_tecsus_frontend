import './assets/css/main.css'
import 'primevue/resources/primevue.min.css'
import 'primevue/resources/themes/mdc-light-deeppurple/theme.css'                    

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import store from './store'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue)
app.use(store)

app.mount('#app')
