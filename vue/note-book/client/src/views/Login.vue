<template>
    <div class="login">
        <h1>登录</h1>
        <div class="login-wrapper">
            <div class="avater">
                <img src="https://image.baidu.com/search/down?tn=download&ipn=dwnl&word=download&ie=utf8&fr=result&url=https%3A%2F%2Fp6.itc.cn%2Fq_70%2Fimages03%2F20210110%2F96db5f6bbb3445409414197504facab9.jpeg&thumburl=https%3A%2F%2Fimg1.baidu.com%2Fit%2Fu%3D1364703421%2C1105136257%26fm%3D253%26fmt%3Dauto%26app%3D120%26f%3DJPEG%3Fw%3D800%26h%3D808"
                    alt="">
            </div>

            <van-form @submit="onSubmit">
                <van-cell-group inset>
                    <van-field v-model="username" name="username" label="用户名" placeholder="用户名"
                        :rules="[{ required: true, message: '请填写用户名' }]" />
                    <van-field v-model="password" type="password" name="password" label="密码" placeholder="密码"
                        :rules="[{ required: true, message: '请填写密码' }]" />
                </van-cell-group>
                <div style="margin: 16px;">
                    <van-button round block type="primary" native-type="submit">
                        登录
                    </van-button>
                </div>
            </van-form>

        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "@/api";

const username = ref("");
const password = ref("");

// 登录
const onSubmit = (values) => {
    // console.log(values); // {username: 'user1', password: '111'}
    axios.post('/user/login', {       // http://localhost:3000/user/login
        username: values.username,
        password: values.password
    })
    .then((res) => {
        console.log(res);
    })
}
</script>


<style lang="less" scoped>
.login {
    width: 100vw;
    height: 100vh;
    background-color: #fff;
    padding: 0 0.3rem;
    box-sizing: border-box;
    overflow: hidden;

    h1 {
        height: 0.6933rem;
        text-align: center;
        font-size: 0.48rem;
        margin-top: 1.127rem;
    }

    .login-wrapper {
        width: 7.44rem;
        height: 10.77rem;
        border: 1px solid rgba(187, 187, 187, 1);
        margin: 0 auto;
        margin-top: 1.7rem;
        border-radius: 0.3rem;
        box-shadow: 0 0 0.533rem rgba(170, 170, 170, 1);

        .avater {
            width: 2.4rem;
            height: 2.4rem;
            margin: 0 auto;
            margin: 1rem auto 0.77rem;
            border-radius: 50%;
            overflow: hidden;

            img {
                width: 100%;
            }
        }
    }
}
:deep(.van-cell__title.van-field__label) {
    width: 45px;
}
</style>