<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="8">
                <!-- 个人信息处 -->
                <el-card shadow="hover" class="mgb20">
                    <div class="user">
                        <img src="../assets/img/img.jpg" alt="">
                        <div class="user-info">
                            <div class="name">{{ userName }}</div>
                            <div>{{ role }}</div>
                        </div>
                    </div>
                    <div class="user-info-list">
                        上次登录时间：
                        <span>2021-09-01</span>
                    </div>
                    <div class="user-info-list">
                        上次登录地点：
                        <span>北京</span>
                    </div>
                </el-card>
                <!-- 语言详情 -->
                <el-card shadow="hover">
                    <template #header>语言详情</template>
                    <div>
                        Vue<el-progress :percentage="80" :indeterminate="true" status="success"></el-progress>
                        Javascript<el-progress :percentage="60" :indeterminate="true"></el-progress>
                        HTML<el-progress :percentage="40.3" :indeterminate="true"></el-progress>
                        Css<el-progress :percentage="20.8" :indeterminate="true"></el-progress>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="16">
                <div class="mgb20">
                    <el-row :gutter="20" class="mgb20">
                        <el-col :span="8">
                            <el-card shadow="hover">
                                <div class="grid-content-con1">
                                    <i class="el-icon-video-camera-solid"></i>
                                    <div class="grid-content-right">
                                        <div class="grid-num">1234</div>
                                        <div>访问量</div>
                                    </div>
                                </div>
                            </el-card>
                        </el-col>
                        <el-col :span="8">
                            <el-card  shadow="hover">
                                <div class="grid-content-con2">
                                    <i class="el-icon-star-on"></i>
                                    <div class="grid-content-right">
                                        <div class="grid-num">974</div>
                                        <div>点赞量</div>
                                    </div>
                                </div>
                            </el-card>
                        </el-col>
                        <el-col :span="8">
                            <el-card  shadow="hover">
                                <div class="grid-content-con3">
                                    <i class="el-icon-share"></i>
                                    <div class="grid-content-right">
                                        <div class="grid-num">778</div>
                                        <div>分享量</div>
                                    </div>
                                </div>
                            </el-card>
                        </el-col>
                    </el-row>
                </div>
                <el-card shadow="hover">
                    <template #header>
                        <div class="card-header">
                            <span>代办事项</span>
                            <el-button type="primary" size="small">添加</el-button>
                        </div>
                    </template>
                    <el-table
                        :data="todoList"
                        :show-header="false"
                        style="width: 100%">
                        <el-table-column>
                            <template #default="scope">
                                <el-checkbox v-model="scope.row.status"></el-checkbox>
                            </template>
                        </el-table-column>
                        <el-table-column>
                            <template #default="scope">
                                <div class="todo-item" :class="{'todo-item-del':scope.row.status}">{{ scope.row.title }}</div>    
                            </template>
                        </el-table-column>
                        <el-table-column  width="60">
                            <!-- <template> -->
                                <i class="el-icon-edit"></i>
                                <i class="el-icon-delete"></i>
                            <!-- </template> -->
                        </el-table-column>
                    </el-table>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import { reactive } from "vue";
export default {
    setup() {
        const userName = localStorage.getItem("userName");
        const role = userName === "admin" ? "超级管理员" : "普通用户";

        const todoList = reactive([
            {
                title: "今天要写100行代码加几个bug吧",
                status: false,
            },
            {
                title: "今天要修复100个bug",
                status: false,
            },
            {
                title: "今天要修复100个bug",
                status: true,
            },
            {
                title: "今天要写100行代码加几个bug吧",
                status: true,
            },
        ]);

        return {
            userName,
            role,
            todoList
        }
    }
}
</script>
<style scoped>
.mgb20 {
    margin-bottom: 20px;
}
.user {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 2px solid #ccc;
    margin-bottom: 20px;
}
.user img  {
    width: 120px;
    height: 120px;
    border-radius: 50%;
}
.user-info {
    padding-left: 50px;
    flex: 1;
    font-size: 14px;
    color: #999;
}
.user-info .name {
    font-size: 30px;
    color: #222;
}
.user-info-list {
    font-size: 14px;
    color: #999;
    line-height: 25px;
}
.user-info-list span {
    margin-left: 70px;
}
.grid-content-con1, .grid-content-con2, .grid-content-con3{
    display: flex;
    align-items: center;
}
.grid-content-con1>i  {
    display: block;
    width: 80px;
    height: 80px;
    background-color: rgb(45, 140, 240);
    font-size: 50px;
    line-height: 80px;
    text-align: center;
    color: #fff;
}
.grid-content-con2>i {
    display: block;
    width: 80px;
    height: 80px;
    background-color: rgb(100, 213, 114);
    font-size: 50px;
    line-height: 80px;
    text-align: center;
    color: #fff;
}
.grid-content-con3>i  {
    display: block;
    width: 80px;
    height: 80px;
    background-color: rgb(242, 94, 67);
    font-size: 50px;
    line-height: 80px;
    text-align: center;
    color: #fff;
}
.grid-content-right {
    text-align: center;
    margin: auto;
}
.grid-num  {
    font-size: 30px;
    font-weight: bold;
}
.card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.todo-item-del {
    text-decoration: line-through;
    color: #999;
}
.todo-item {
    font-size: 14px;
}
.el-card__body {
    margin-top: 0px;
}
</style>