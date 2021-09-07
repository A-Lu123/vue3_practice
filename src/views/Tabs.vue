<template>
    <div>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item>
                <i class="el-icon-document-copy mgr5"></i>
                <span>tab选项卡 </span>
            </el-breadcrumb-item>
        </el-breadcrumb>
        <el-card shadow="hover" class="mgt20">
            <el-tabs tabs v-model="activeName">
                <el-tab-pane :label="`未读消息(${state.unread.length})`" name="unread">
                    <el-table
                        :show-header="false"
                        :data="state.unread"
                        style="width: 100%">
                        <el-table-column
                            width="width">
                            <template  #default="scope">
                                <span class="message">{{ scope.row.title }}</span>    
                            </template>
                        </el-table-column>
                        <el-table-column
                            width="150"
                            prop="date">
                        </el-table-column>
                        <el-table-column width="120">
                            <template #default="{$index, row}">
                                <el-button 
                                size="small" palin @click="toRead(row, $index)">标为已读</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
                <el-tab-pane :label="`已读消息(${state.read.length})`" name="read">
                    <el-table
                        :data="state.read"
                        :show-header="false"
                        style="width: 100%">
                        <el-table-column
                            width="width">
                            <template #default="scope">
                                <span class="message">{{ scope.row.title }}</span>    
                            </template>
                        </el-table-column>
                        <el-table-column
                            width="150"
                            prop="date">
                        </el-table-column>
                        <el-table-column
                            width="120" >
                            <template #default="{row, $index}">
                                <el-button type="danger" size="small" @click="deleteRead(row, $index)">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
                <el-tab-pane :label="`回收站(${state.recycle.length})`" name="recyle">
                    <el-table
                        :data="state.recycle"
                        :show-header="false"
                        style="width: 100%">
                        <el-table-column
                            width="width">
                            <template #default="scope">
                                <span class="message">{{ scope.row.title }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column
                            prop="date"
                            width="150">
                        </el-table-column>
                        <el-table-column
                            width="120">
                            <template #default="{row, $index}">
                                <el-button pain size="small" @click="toRecyle(row, $index)">还原</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
            </el-tabs>
        </el-card>
    </div>
</template>
<script>
import { reactive } from "vue";
export default {
    setup() {
        const activeName = reactive("unread");
        const state = reactive({
            unread: [
                {
                    date: "2018-04-19 20:00:00",
                    title: "【系统通知】该系统将于今晚凌晨2点到5点进行升级维护",
                },
                {
                    date: "2018-04-19 21:00:00",
                    title: "今晚12点整发大红包，先到先得",
                },
            ],
            read: [
                {
                    date: "2018-04-19 20:00:00",
                    title: "【系统通知】该系统将于今晚凌晨2点到5点进行升级维护",
                },
            ],
            recycle: [
                {
                    date: "2018-04-19 20:00:00",
                    title: "【系统通知】该系统将于今晚凌晨2点到5点进行升级维护",
                },
            ],
        });

        const toRead = (row, index) => {
            state.unread.splice(index, 1)
            state.read.unshift(row);
        };

        const deleteRead  = (row, index) => {
            state.read.splice(index,  1);
            state.recycle.unshift(row);
        };

        const toRecyle = (row, index) => {
            state.recycle.splice(index, 1);
            state.read.unshift(row);
        }

        return {
            activeName,
            state,
            toRead,
            deleteRead,
            toRecyle
        }
    }
}
</script>
<style>
.mgr5 {
    margin-right: 5px;
}
.mgt20 {
    margin-top: 20px;
}   
.message {
    color: #20a0ff;
}
</style>