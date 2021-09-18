<template>
    <div class="mgb20">
        <el-breadcrumb separator="/">
        <el-breadcrumb-item>
                <i class="el-icon-rank"></i>
            拖拽组件</el-breadcrumb-item>
            <el-breadcrumb-item>
                拖拽Sortable
            </el-breadcrumb-item>
        </el-breadcrumb>
    </div>
    <el-card shadow="hover">
        <el-row>
            <h3>拖拽后的数据能直接拿到吗？自己计算有点麻烦啊总感觉，有空再研究</h3>
        </el-row>
        <br>
        <el-row :gutter="20">
            <el-col :span="8">
                <ul id="one">
                    <li v-for="item in list1" :key="item.age">{{ item.name }}</li>
                </ul>
            </el-col>
            <el-col :span="8">  
                <ul id="two">
                    <li v-for="item in list2" :key="item.age">{{ item.name }}</li>
                </ul>
            </el-col>
            <el-col :span="6" v-if="false">
                <ShowData
                    title="One"
                    :value="list1"
                ></ShowData>
            </el-col>
            <el-col :span="6" v-if="false">
                  <ShowData
                    title="Two"
                    :value="list2"
                ></ShowData>
            </el-col>
        </el-row>
    </el-card>
</template>
<script>
import Sortable from 'sortablejs/modular/sortable.complete.esm.js';
import ShowData from "@/components/ShowData.vue";

import { onMounted, reactive } from "vue";

export default {
    components: {
        ShowData,
    },

    setup() {
        let list1 = reactive([
            {
                name: "张三",
                age: 15
            },
            {
                name: "李四",
                age: 14
            },
            {
                name: "王五",
                age: 19
            },
            {
                name: "赵六",
                age: 22
            },
        ]);

        let list2 = reactive([
            {
                name:"Jony",
                age:13
            },
            {
                name: "Tom",
                age: 17
            },
            {
                name: "Sun",
                age:15
            }
        ]);

        onMounted(() => {
            let listOne = document.getElementById("one");
            let listTwo = document.getElementById("two");
            const options1 = {
                animation: 500,
                group:{name:"people"},
                onEnd: () => {
                }
            };
            const options2 = {
                animation: 500,
                group:{name:"people"}
            };
            new Sortable(listOne, options1)
            new Sortable(listTwo, options2)
        }); 


        return {
            list1,
            list2
        }
    }
}
</script>
<style scoped>
.mgb20 {
    margin-bottom: 20px;
} 
ul {
    cursor: move;
}   
ul > li {
    list-style: none;
    height: 25px;
    line-height: 25px;
    padding: 5px 0;
    margin-bottom: 10px;
    background-color: #e3e3e3;
    text-align: center;
    border-radius: 10px;
}
li:hover {
    background-color: #f5f1f1;
}
</style>