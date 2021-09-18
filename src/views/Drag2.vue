<template>
    <div>
        <el-card shadow="hover">
            <el-row>
                <h2>
                    因为拖动有bug 怀疑是vue3导致 所以换了个包,有时间再研究吧
                </h2>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="6">
                    <h3>oneList</h3>
                    <!-- v-model="list1"  不能用vmodel 不知道为啥 要不两列无法拖动 -->
                    <draggable 
                    :list="list1"
                        item-key="id" 
                        tag="transition-group"
                        group="people"
                        animation="300"
                        :scroll="true"
                        ghostClass="ghost"
                        chosenClass="chosen"
                        dragClass="dragClass"
                        @start="OnStart"
                        @end="OnEnd"
                    >
                        <template #item="{element}">
                            <div class="item">{{ element.name }}</div>    
                        </template>
                    </draggable>
                </el-col>
                <el-col :span="6">
                    <h3>twoList</h3>
                      <draggable 
                      :list="list2" 
                        itemKey="name"  
                        group="people"
                        animation="300"
                        :scroll="true"
                        ghostClass="ghost"
                        chosenClass="chosen"
                        dragClass="dragClass"
                    >
                        <template #item="{element}">
                            <div class="item">{{ element.name }}</div>    
                        </template>
                    </draggable>
                </el-col>
                <el-col :span="6">
                </el-col>
                <el-col :span="6"></el-col>
            </el-row>
        </el-card>
    </div>
</template>
<script>
import draggable from 'vuedraggable';
import { reactive, ref } from "vue";

export default {
    components: {
        draggable
    },
    setup() {
        const list1 =  reactive([
            { name: "John", id: 1 },
            { name: "Joao", id: 2 },
            { name: "Jean", id: 3 },
            { name: "Gerard", id: 4 }
        ]);


        const list2 = reactive([
            { name: "Juan", id: 5 },
        { name: "Edgard", id: 6 },
        { name: "Johnson", id: 7 }
        ])

        let drag = ref(false);
        const onStart = () => {
            drag.value = true;
        };

        const onEnd = () => {
            drag.value = false;
        };
        

        return {
            list1,
            list2,
            onStart,
            onEnd,
            drag
        }
    }
}
</script>
<style>
.ghost {
    background-color: greenyellow!important;
}
.chosen {
    background-color: red!important;
}
.dragClass{
  background-color: blueviolet !important;
  opacity: 1 !important;
  box-shadow:none !important;
  outline:none !important;
  background-image:none !important;
}
.item{
    padding: 6px 12px;
    margin: 0px 10px 5px 0px;
    border: solid 1px #eee;
    background-color: #f1f1f1;
}
.item:hover {
    background-color: #fdfdfd;
}
</style>