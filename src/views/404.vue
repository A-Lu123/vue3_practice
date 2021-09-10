<template>
    <div class="error_container">
      <div class="error_num">4<span>0</span>4</div>
      <div class="error_tip">啊哦~ 你所访问的页面不存在</div>
      <div class="btn_gruop">
          <router-link to="/">
            <el-button type="primary">返回首页</el-button>
          </router-link>
          <el-button type="primary" @click="goBack" style="margin-left:10px">返回上一页</el-button>
      </div>
    </div>
</template>
<script>
import { useRouter } from "vue-router";
export default {
   setup() {
        const router = useRouter();
        const goBack = () => {
            router.go(-1);
        };
        return {
            goBack,
        };
    },
}
</script>
<style>
.error_container {
    /* display: flex; */
    /* justify-content: center; */
    /* align-items: center; */
    text-align: center;
    background-color: #fff;
}
.error_num {
    font-size: 250px;
    font-weight: bold;
    color: red;
}
.error_num > span {
    color: green;
}
.error_tip {
    font-size: 30px;
    color: #777;
}
.btn_gruop {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
}
</style>