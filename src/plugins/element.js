import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import { createI18n } from "vue-i18n";
import localeZH from "element-plus/lib/locale/lang/zh-cn"; 
import localeEH from "element-plus/lib/locale/lang/en";
import messages from "../utils/i18n";

const i18n = createI18n({
    locale: localeZH.name,
    fallbackLocale: localeEH.name,
    messages
});

export default (app) => {
    app.use(ElementPlus, { locale: localeZH })
    app.use(i18n)
}

