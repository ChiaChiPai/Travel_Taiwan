import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router.js";

import "virtual:windi.css";
import "virtual:windi-devtools";
import "virtual:svg-icons-register";

const app = createApp(App);

app.use(router);

app.mount("#app");
