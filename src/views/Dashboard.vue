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
                    <div></div>
                </el-card>
            </el-col>
            <el-col :span="16"></el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    setup() {
        const userName = localStorage.getItem("userName") || "admin";
        const role = userName === "admin" ? "超级管理员" : "普通用户";

        return {
            userName,
            role
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
</style>