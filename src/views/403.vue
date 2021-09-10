<template>
    <div class="error_container">
      <div class="error_num">4<span>0</span>3</div>
      <div class="error_tip">啊哦~ 你没有权限访问该页面哦</div>
      <div class="btn-gruop">
          <el-button size="small">返回首页</el-button>
          <el-button size="small">返回上一页</el-button>
      </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
.error_num {
    color: red;
}
.error_num > span {
    color: green;
}
.btn_gruop {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>