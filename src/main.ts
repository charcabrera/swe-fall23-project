import { createApp } from 'vue'
// look at me. i'm the App now.
import Home from './components/Home.vue'
import App from './App2.vue' // import App from './App.vue'
import LoginPage from './components/LoginPage.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

// import main.css file
import './assets/main.css'

const routes = [
  { path: '/', component: App },
  { path: '/login', component: LoginPage },
]

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes // short for `routes: routes`
})

var app = createApp(Home)
app.use(router)
app.mount('#app')
