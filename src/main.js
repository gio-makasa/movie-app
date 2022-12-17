import { createApp } from 'vue'
import { createRouter, createWebHistory } from "vue-router";

import App from './App.vue'

import TheHome from "./pages/TheHome.vue";
import TheAbout from "./pages/TheAbout.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/Home' },
        { path: '/Home', component: TheHome },
        {
            path: '/About', redirect: '/About/Latest', children: [
                { path: ':movieId', component: TheAbout },
            ]
        },
        { path: '/:notFound(.*)', redirect: '/Home' },
    ]
})

const app = createApp(App);

app.use(router);

app.mount('#app');