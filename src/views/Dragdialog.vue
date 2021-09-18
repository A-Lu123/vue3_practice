<template>
    <div>
        <div class="crumb mgb20">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-rank"></i>
                    拖拽组件
                </el-breadcrumb-item>
                <el-breadcrumb-item>
                    拖拽弹窗
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>  
        <el-card shadow="hover">
            通过指令 v-dialogDrag 使 Dialog 对话框具有可拖拽的功能。
            <br>
            <br>
            <el-button size="small" @click="openDialog">点我弹窗</el-button>
            
            <el-dialog
                title="拖拽弹窗"
                v-model="dialogVisible"
                width="30%"
                center
            >
                <!-- v-dragDialog -->
                <span>这是一个可拖拽的弹窗哦！</span>
                <template #footer>
                    <el-button @click="dialogVisible = false" size="small">取消</el-button>    
                    <el-button @click="dialogVisible = false" size="small" type="primary">确认</el-button>    
                </template>
            </el-dialog>
        </el-card>
    </div>
</template>
<script>
import { ref } from "vue";
export default {
    setup() {
        const dialogVisible = ref(false);
        const openDialog = () => {
            dialogVisible.value = true;
        }
        return {
            openDialog,
            dialogVisible
        }
    }
}
</script>
<style>
 .mgb20 {
     margin-bottom: 20px;
 }   
</style>