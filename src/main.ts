import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router.js";
import axios from 'axios'
import VueAxios from 'vue-axios'

import "virtual:windi.css";
import "virtual:windi-devtools";
import "virtual:svg-icons-register";

const app = createApp(App);

app.use(router).use(VueAxios, axios);
app.provide('axios', app.config.globalProperties.axios);

app.mount("#app");
