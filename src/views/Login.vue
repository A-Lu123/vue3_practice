<template>
    <div class="login_wrap">
        <div class="login_container">
            <p class="title">后台管理系统</p>
            <el-form :model="Info" ref="form" label-width="0px" class="form_container"
            :rules="rules">
                <el-form-item prop="name">
                    <el-input v-model="Info.name">
                        <template #prepend>
                            <i class="el-icon-user"></i>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input v-model="Info.password">
                        <template #prepend>
                            <el-button icon="el-icon-lock"></el-button>
                        </template>
                    </el-input>
                </el-form-item>
                <div class="login_btn">
                <el-button @click="login">登录</el-button>
            </div>
            <p class="login_tips">Tips : 用户名和密码随便填。</p>
            </el-form>
        </div>
    </div>
</template>
<script>
import { reactive, ref } from 'vue';
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";

export default {
    setup() {
        const Info = reactive({
            name: '',
            password: ''
        });

        const rules = {
            name: [
                {
                    required: true,
                    message: "请输入用户名",
                    trigger: ["blur", "change"]
                }
            ],
            password: [
                {
                    required: true,
                    message: "请输入密码",
                    trigger: "blur"
                }
            ]
        };
        const router = useRouter();
        const form = ref(null);
        const login = () => {
            form.value.validate((valid) => {
                if (valid) {
                    ElMessage.success("登录成功");
                    localStorage.setItem("userName", Info.name);
                    router.push("/");
                }else {
                    ElMessage.error("登录失败");
                    return false;
                }
            })
        }


        return {
            Info,
            login,
            rules,
            form
        }
    }
}
</script>
<style scoped>
.login_wrap {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #324157;
    background-image: url(../assets/img/login-bg.jpg);
    background-size: 100%;
}
.title {
    width: 100%;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    /* color: #fff; */
    border-bottom: 1px #ddd solid;
}
.login_container {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 350px;
    transform: translate(-50%,-50%);
    border-radius: 5px;
    background: rgba(255, 255, 255, .3);
    overflow: hidden;
}

.form_container {
    padding: 30px;
}
.login_tips {
    font-size: 12px;
    line-height: 30px;
}
.login_btn {
    text-align: center;
}
.login_btn button  {
    width: 100%;
    height: 36px;
    margin-bottom: 10px;
}
.login_btn button{
    width: 100%;
    height: 36px;
    margin-bottom: 10px;
}
</style>