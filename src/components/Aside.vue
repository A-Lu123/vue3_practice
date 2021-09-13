<template>
    <div class="aside">
        <el-menu :default-active="activeIndex" background-color="#324157" :collapse="isCollapse" class="el-menu-vertical-demo"
            text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-sub-menu :index="item.index" :key="item.index">
                        <template #title>
                            <i :class="item.icon"></i>
                            {{ item.title }}    
                        </template>
                        <template v-for="it in item.subs">
                            <el-sub-menu v-if="it.subs" :key="it.index" :index="it.index">
                                <template #title>
                                 {{ it.title }}   
                                </template>
                                <el-menu-item v-for="(subIt, index) in it.subs" :key="index" :index="subIt.index">{{ subIt.title }}</el-menu-item>
                            </el-sub-menu>
                            <el-menu-item v-else :key="it.index" :index="it.index">{{ it.title }}</el-menu-item>    
                        </template>
                    </el-sub-menu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index" >
                        <i :class="item.icon"></i>
                        {{ item.title }}</el-menu-item>
                </template>    
            </template>
        </el-menu>
    </div>
</template>
<script>
import { useStore } from "vuex";
import { computed } from "vue";
import { useRoute } from 'vue-router';

export default {
    setup() {
        const items = [
            {
                icon: "el-icon-s-home",
                index: "/dashboard",
                title: "系统首页",
            },
            {
                icon: "el-icon-s-grid",
                index: "/table",
                title: "基础表格",
            },
            {
                icon: "el-icon-document-copy",
                index: "/tabs",
                title: "tab选项卡",
            },
            {
                icon: "el-icon-notebook-2",
                index: "3",
                title: "表单相关",
                subs: [
                    {
                        index: "/form",
                        title: "基本表单",
                    },
                    {
                        index: "/upload",
                        title: "文件上传",
                    },
                    {
                        index: "4",
                        title: "三级菜单",
                        subs: [
                            {
                                index: "/editor",
                                title: "富文本编辑器",
                            },
                            {
                                index: 'markdown',
                                title: 'markdown编辑器'
                            }
                        ],
                    },
                ],
            },
            {
                icon: "el-icon-bangzhu",
                index: "/icon",
                title: "自定义图标",
            },
            {
                icon: "el-icon-s-data",
                index: "/charts",
                title: "schart图表",
            },
            {
                icon: 'el-icon-thumb',
                index: '6',
                title: '拖拽组件',
                subs: [
                    {
                        index: 'drag',
                        title: '拖拽列表'
                    },
                    {
                        index: 'dialog',
                        title: '拖拽弹框'
                    }
                ]
                },
            {
                icon: "el-icon-chat-line-round",
                index: "/i18n",
                title: "国际化功能",
            },
            {
                icon: "el-icon-warning",
                index: "7",
                title: "错误处理",
                subs: [
                    {
                        index: "/permission",
                        title: "权限测试",
                    },
                    {
                        index: "/404",
                        title: "404页面",
                    },
                ],
            },
            {
                icon: "el-icon-bangzhu",
                index: "/donate",
                title: "支持作者",
            },
        ];
        
        const store = useStore();
        const isCollapse = computed(() => {
            return store.state.collapse;
        });

        const route = useRoute();
        const activeIndex = computed(() => {
            return route.path;
        })

        return {
            items,
            isCollapse,
            activeIndex
        }
    }
}
</script>
<style>
.aside {
    display: block;
    position: absolute;
    left: 0;
    top: 70px;
    overflow-y: scroll;
}
/* 去除滚动条 */
.aside::-webkit-scrollbar {
    width: 0;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
}
.aside > ul {
    height: 100%;
}
/* TODO 有个bug 折叠时不太完美 */
.el-menu--collapse .el-menu-item span {
    /* height: 0; */
    /* width: 0; */
    /* overflow: hidden; */
    /* visibility: hidden; */
    /* display: none; */
}
/* .el-menu--collapse .el-submenu__icon-arrow{
    display: none;
} */
</style>