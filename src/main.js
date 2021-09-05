import { createApp } from "vue";
import App from "./App";
import router from "./router";
import store from "./store";
import installElementPlus from './plugins/element'
// import Fragment from "vue-fragment";

const app = createApp(App);
installElementPlus(app);

app
    .use(router)
    .use(store)
    // .use(Fragment)
    .mount("#app");
