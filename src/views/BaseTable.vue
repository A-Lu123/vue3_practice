<template>
    <div>
        <div class="crumb">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-s-grid" style="margin-right:5px"></i>基础表格</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <el-card>
            <div class="card-container">
                <div class="search  mgb20">
                    <el-button type="primary" size="small" icon="el-icon-delete" class="mgr10">批量删除</el-button>
                    <el-select v-model="query.address" placeholder="地址" size="small"
                    class="handle-select mgr10">
                        <el-option
                            label="广东省"
                            :value="1">
                        </el-option>
                        <el-option
                            label="湖南省"
                            :value="2">
                        </el-option>
                    </el-select>
                    <el-input v-model="query.name" placeholder="用户名" size="small" class="handle-input mgr10"></el-input>
                    <el-button size="small" icon="el-icon-search" type="primary" @click=handleSearch>搜索</el-button>
                </div>
                <div class="table-content">
                    <el-table
                        :data="tableData"
                        border
                        :header-row-style="setHeaderRowStyle"
                        ref="table"
                        style="width: 100%">
                        <el-table-column
                        type="selection"
                       >
                        </el-table-column>
                        <el-table-column
                            prop="id"
                            label="ID" 
                             width="55"
                        align="center">
                        </el-table-column>
                        <el-table-column
                            prop="name"
                            label="用户名" >
                        </el-table-column>
                        <el-table-column
                            label="账户余额" >
                            <template #default="scope">
                                <span>￥{{ scope.row.money }}</span>    
                            </template>
                        </el-table-column>
                        <el-table-column
                            label="头像(查看大图)" 
                            align="center">
                            <template #default="scope">
                                <el-image :src="scope.row.thumb"  :preview-src-list="[scope.row.thumb]"  style="width: 40px; height: 40px"></el-image>
                            </template>
                        </el-table-column>
                        <el-table-column
                            prop="address"
                            label="地址" >
                        </el-table-column>
                        <el-table-column
                            label="状态" >
                            <template  #default="scope">
                                <el-tag :type="scope.row.state === '成功'? 'success' :scope.row.state === '失败'? 'danger' : ''">{{ scope.row.state }}</el-tag>    
                            </template>
                        </el-table-column>
                        <el-table-column
                            prop="date"
                            label="注册时间" >
                        </el-table-column>
                        <el-table-column
                            label="操作" width="180">
                            <template #default="{row,$index}">
                                <el-button type="text" icon="el-icon-edit" @click="handleEdit(row, $index)">编辑</el-button>
                                <el-button type="text" icon="el-icon-delete" style="color:red" @click="handleDelete(row, $index)">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>

                <!-- 编辑按钮的dialog -->
                <!-- <el-dialog
                    title="编辑"
                    v-model="dialogVisible">
                    <el-form ref="form" :model="query" label-width="80px">
                        <el-form-item label="用户名">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="地址">
                            <el-input v-model="form.address"></el-input>
                        </el-form-item>
                    </el-form>
                    <template #footer>
                        <el-button @click="dialogVisible = false">取 消</el-button>
                        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                    </template>
                </el-dialog> -->
            </div>
        </el-card>
    </div>
</template>
<script>
import { reactive, ref } from 'vue';
import { featchTableData } from "@/api"

export default {
    setup() {
        // 请求参数
        const query = reactive({
            address: "",
            name: "",
            pageSize:10,
            pageIndex:1
        });


        // 获取表格的数据
        const tableData = ref([]);
        const pageTotal = ref(4);
        const getTableData = () => {
            featchTableData(query)
                .then(res => {
                    tableData.value = res.list;
                    pageTotal.value = res.pageTotal;
                })
                .catch(() => {
                    tableData.value = [
                        {
                            address: "广东省东莞市长安镇",
                            date: "2019-11-1",
                            id: 1,
                            money: 123,
                            name: "张三",
                            state: "成功",
                            thumb: "https://lin-xin.gitee.io/images/post/wms.png"
                        },
                        {
                            address: "广东省广州市白云区",
                            date: "2019-10-11",
                            id: 2,
                            money: 456,
                            name: "李四",
                            state: "成功",
                            thumb: "https://lin-xin.gitee.io/images/post/node3.png"
                        },
                        {
                            address: "湖南省长沙市",
                            date: "2019-11-11",
                            id: 3,
                            money: 789,
                            name: "王五",
                            state: "失败",
                            thumb: "https://lin-xin.gitee.io/images/post/parcel.png"
                        },
                        {
                            address: "福建省厦门市鼓浪屿",
                            date: "2019-10-20",
                            id: 4,
                            money: 1011,
                            name: "赵六",
                            state: "成功",
                            thumb: "https://lin-xin.gitee.io/images/post/notice.png"

                        }
                    ];
                    pageTotal.value = 5;
                });
        }
        getTableData();

        //设置表头行 的样式 
        const setHeaderRowStyle = () => {
            //TODO  为啥没生效
            return {backgroundColor: '#999'};
        };
        //按钮搜索
        const handleSearch = () =>  {
            getTableData();
        };
        //按钮编辑 
        const handleEdit = () => {

        };

        return {
            query,
            tableData,
            pageTotal,
            setHeaderRowStyle,
            handleSearch,
            handleEdit
        }
    }
}
</script>
<style>
.crumb  {
    margin-bottom: 20px;
}
.handle-selelct {
    width: 120px;
}   
.handle-input {
    width: 300px;
    display: inline-block;
}
.mgr10 {
    margin-right: 10px;
}
.mgb20 {
    margin-bottom: 20px;
}
</style>