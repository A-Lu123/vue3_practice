<template>
    <div class="login_wrap">
        <div class="login">
            <p class="title">后台管理系统</p>
            <el-form :model="Info" ref="form" label-width="0px" class="form_container">
                <el-form-item>
                    <el-input v-model="Info.name">
                        <template #prepend>
                            <i class="el-icon-user"></i>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="Info.password">
                        <template #prepend>
                            <el-button icon="el-icon-lock"></el-button>
                        </template>
                    </el-input>
                </el-form-item>
            </el-form>
            <div class="login_btn">
                <el-button>登录</el-button>
            </div>
            <p class="login_tips">Tips : 用户名和密码随便填。</p>
        </div>
    </div>
</template>
<script>
import { reactive } from 'vue';
export default {
    setup() {
        const Info = reactive({
            name: '',
            password: ''
        })


        return {
            Info
        }
    }
}
</script>
<style>
.login_wrap {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #fff;
    background-image: url("../assets/img/login-bg.jpg");
    background-size: 100%;
}
.login_wrap .login {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 350px;
    border-radius: 5px;
    background: rgba(255, 255, 255, .3);
    overflow: hidden;
}
.title {
    width: 100%;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    /* color: #fff; */
    border-bottom: 1px #ddd solid;
}
.form_container {
    padding: 30px;
}
.login_tips {
    font-size: 20px;
    line-height: 30px;
}
.login_btn {
    text-align: center;
}
.login_btn button{
    width: 100%;
    height: 36px;
    margin-bottom: 10px;
}
</style>