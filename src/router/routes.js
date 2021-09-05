const Home = () => import(/* webpackChunkName: "home" */ "../views/Home.vue");
const Dashboard = () => import(/* webpackChunkName: "dashboard" */ "../views/Dashboard.vue");

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
        ]
    }
]