<template>
    <div class="header">
        <!-- 折叠按钮 -->
      <div class="collapse-btn" @click="handleCollapse">
          <i class="el-icon-s-fold" v-if="!collapse"></i>
          <i class="el-icon-s-unfold" v-else></i>
      </div>
      <div class="logo">后台管理系统</div>
      <div class="header-right">
          <div class="header-user-con">
              <!-- 消息中心  -->
              <div class="btn-bell">
                  <el-tooltip effect="dark" :content="message ? `有${message}条未读消息` : '消息中心'" placement="bottom">
                    <i class="el-icon-bell"></i>
                  </el-tooltip>
                  <div class="red" v-if="message"></div>
              </div>
              <!-- 用户头像 -->
              <div class="user-avator">
                  <img src="../assets/img/img.jpg" alt="">
              </div>
              <!-- 下拉菜单 -->
                <el-dropdown trigger="click" @command="handleCommand" class="user-name">
                    <span class="el-dropdown-link">{{ userName }} <i class="el-icon-caret-bottom"></i></span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item command="user">个人中心</el-dropdown-item>
                            <el-dropdown-item command="loginout" divided>退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
          </div>
      </div>
    </div>
</template>
<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { computed, ref } from "vue";
export default {
    setup() {
        //折叠按钮
        const store = useStore();
        const collapse = computed(() => {
            return store.state.collapse
        })
        const handleCollapse = () => {
            store.commit("handleCollapse", !collapse.value);
        };

        const userName = localStorage.getItem("userName") || "admin";

        //下拉框
        const router = useRouter();
        const  handleCommand = (command) => {
            if (command === "user") {
                router.push("/user");
            }else if (command === "loginout") {
                router.push("/loginout");
                localStorage.removeItem("userName");
            }
        };

        const message = ref(2);

        return {
            collapse,
            handleCollapse,
            userName,
            handleCommand,
            message
        }
    }
}
</script>
<style>
.header {
    width: 100%;
    height: 70px;
    font-size: 22px;
    background-color: #222;
    color: #fff;
}
.collapse-btn {
    float: left;
    padding: 0 21px;
    line-height: 70px;
    cursor: pointer;
}
.logo {
    float: left;
    line-height: 70px;
}
.header-right {
    float: right;
    padding-right: 50px;
}
.header-user-con {
    position: relative;
    display: flex;
    align-items: center;
    height: 70px;
}
.btn-bell>.red {
    position: absolute;
    top: 21px;
    left: 16px;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background-color: red;
}
.user-name {
    margin-left: 10px;
}
.user-avator {
    margin-left: 20px;
}
.user-avator img {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
}
.el-dropdown-link {
    color: #fff;
    cursor: pointer;
}
</style>