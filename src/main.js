import { createApp } from "vue";
import App from "./App";
import router from "./router";
import store from "./store";
import installElementPlus from './plugins/element';

import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import VueQuillEditor from 'vue-quill-editor';

import './utils/directives';

const app = createApp(App)
installElementPlus(app);

app
    .use(router)
    .use(store)
    .use(VueQuillEditor)
    .mount("#app");
