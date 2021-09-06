const Home = () => import(/* webpackChunkName: "home" */ "../views/Home.vue");
const Dashboard = () => import(/* webpackChunkName: "dashboard" */ "../views/Dashboard.vue");
const BaseTable = () => import(/* webpackChunkName: "basetable" */ "../views/BaseTable.vue");

export default [
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
            }
        ]
    }
]