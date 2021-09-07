<template>
    <div>
        <div class="mgb20">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-tickets mgr5"></i>
                    <span>表单</span>
                </el-breadcrumb-item>
                <el-breadcrumb-item>基本表单</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <el-card shadow="hover">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="1">
                    <el-input v-model="model"></el-input>
                </el-form-item>
                <el-form-item label="12">
                    <el-input v-model="model"></el-input>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
.mgb20 {
    margin-bottom: 20px;
}
.mgr5 {
    margin-right: 5px;
}  
</style>