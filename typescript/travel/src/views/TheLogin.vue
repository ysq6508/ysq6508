<template>
    <div class="w-screen h-screen">
        <van-form model="params" @submit="OnSubmit">
            <van-cell-group inset>
                <van-field 
                v-model="params.username"
                name="用户名"
                label="用户名"
                placeholder="请输入用户名"
                :rule="[{ required: true, message: '请输入用户名'}]"
                />
                <van-field 
                v-model="params.password"
                name="密码"
                label="密码"
                placeholder="请输入密码"
                :rule="[{ required: true, message: '请输入密码'}]"
                />
            </van-cell-group>
            <div>
                <van-button block native-type="submit">登录</van-button>
            </div>
        </van-form>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import type { LoginInfo } from '@/types/login'

const params = reactive<LoginInfo>({
    username: '',
    password: ''
})

function OnSubmit() {
    console.log(params)
}
</script>
