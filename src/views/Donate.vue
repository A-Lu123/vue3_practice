<template>
    <div>
        <div class="crumb mgb10">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-money"></i>
                    支持大神
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <el-card shadow="hover" class="container">
            <div>
                <p>再次申明: 这只是我为了练习vue3学习大神的代码，非常感谢大神，下面是大神的二维码</p>
                <img src="https://lin-xin.gitee.io/images/weixin.jpg" />
            </div>
        </el-card>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
.mgb10 {
    margin-bottom: 10px;
}
.container {
    padding: 10px;
}
.container p {
    padding: 10px;
    background-color: #eef1f6;
}
</style>