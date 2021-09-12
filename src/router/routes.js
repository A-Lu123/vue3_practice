const Home = () => import(/* webpackChunkName: "home" */ "../views/Home.vue");
const Dashboard = () => import(/* webpackChunkName: "dashboard" */ "../views/Dashboard.vue");
const BaseTable = () => import(/* webpackChunkName: "basetable" */ "../views/BaseTable.vue");
const Tabs = () => import(/* webpackChunkName: "tabs" */ "../views/Tabs.vue");
const BasicForm = () => import(/* webpackChunkName: "basicform" */ "../views/BasicForm.vue");
const Permission = () => import(/* webpackChunkName: "permission" */ "../views/Permission.vue");
const Login = () => import(/* webpackChunkName: "login" */ "../views/Login.vue");

export default [
    {
        path: '/',
        redirect:"/home",
    },
    {
        path:'/home',
        name: 'home',
        component:Home,
        children: [
            {
                path: "/dashboard",
                name: "dashboard",
                component:Dashboard,
                meta: {
                    title: "系统首页"
                }
            },
            {
                path: "/table",
                name: "table",
                component: BaseTable,
                meta: {
                    title: "基础表格"
                }
            },
            {
                path: "/tabs",
                name: "tabs",
                component: Tabs,
                meta: {
                    title: "tab选项卡"
                }
            },
            {
                path: "/form",
                name: "basicform",
                component: BasicForm,
                meta: {
                    title : "基本表单"
                }
            },
            {
                path: "/permission",
                name: "permission",
                component: Permission,
                meta: {
                    title: "权限测试",
                    permission: true
                }
            },
            {
                path: "/403",
                name: "403",
                component: import(/* webpackChunkName: "403" */ "../views/403.vue"),
                meta: {
                    title: "无权限"
                }
            },
            {
                path: "/404",
                name: "404",
                component: import(/* webpackChunkName: "404" */ "../views/404.vue"),
                meta: {
                    title: "找不到页面"
                }
            },
            {
                path: "/donate",
                name: "donate",
                component: import(/* webpackChunkName: "donate" */ "../views/Donate.vue"),
                meta: {
                    title: "支持作者"
                }
            },
        ]
    },
    {
        path: "/login",
        name: "login",
        component: Login,
        meta: {
            title: "登录"
        }
    }
]