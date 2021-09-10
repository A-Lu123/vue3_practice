import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./routes";

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} | vue-manage-system`;
    const role = localStorage.getItem("userName") || "admin";
    if (!role && to.path !== "/login") {
        next("/login")
    }else if (to.meta.permission) {
        role === "admin" ? next() : next("/403");
    }else {
        next();
    }
})

export default router;
