import { createApp } from 'vue'
import { createRouter, createWebHistory } from "vue-router";

import App from './App.vue'

import TheHome from "./pages/TheHome.vue";
import TheAbout from "./pages/TheAbout.vue";
import NotFound from "./pages/NotFound.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/Home' },
        { path: '/Home', component: TheHome },
        { path: '/About/:movieId', component: TheAbout, props: true },
        { path: '/:notFound(.*)', component: NotFound },
    ]
})

const app = createApp(App);

app.use(router);

app.mount('#app');