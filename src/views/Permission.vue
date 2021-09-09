<template>
    <div>
        <div class="crumb">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="mgr5 el-icon-warning-outline"></i>
                    权限测试
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <el-card shadow="hover" class="mgt20">
            <h1>管理员权限页面</h1>
            <p>只有用 admin 账号登录的才拥有管理员权限，才能进到这个页面，其他账号想进来都会跳到403页面，重新用管理员账号登录才有权限。</p>
            <p>想尝试一下，请<route-link class="logout" to="/login">退出登录</route-link>，随便输入个账号名，再进来试试看。</p>
        </el-card>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
.mgr5 {
    margin-right: 5px;
}
.mgt20 {
    margin-top: 20px;
}
h1 {
    margin: 30px 0;
    text-align: center;
}
p {
    line-height: 30px;
    margin-bottom: 10px;
    text-indent: 2em; 
    /* text-indent  文本缩进 */
}
.logout {
    color: #409eff;
}
</style>