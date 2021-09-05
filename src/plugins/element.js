import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import { createI18n } from "vue-i18n";
import localeZH from "element-plus/lib/locale/lang/zh-cn"; 
import localeEH from "element-plus/lib/locale/lang/en";
import message from "../utils/i18n";

const i18n = createI18n({
    locale: localeZH.name,
    fallbackLocale: localeEH.name,
    message
});

export default (app) => {
    app.use(ElementPlus, {locale: localeZH})
    app.use(i18n)
}

//TODO 国际化完全不会啊