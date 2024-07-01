<template>
    <div>
      <div class="login">

        <div class="login-wrap">
            <h2>旅梦后台管理系统</h2>

            <el-row>
              <el-input v-model="state.account" placeholder="请输入账号" />
            </el-row>

            <el-row>
              <el-input v-model="state.password" placeholder="请输入密码" />
            </el-row>

            <el-row>
              <el-button type="primary" @click="signIn">登录</el-button>
              <el-button>注册</el-button>
            </el-row>
            

        </div>
        
      </div>
    </div>
  </template>
  
  <script setup>
import { reactive } from 'vue';
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'

  const state = reactive({
    account: 'admin',
    password: '123'
  })

  const router = useRouter()
  const signIn = () => {
    if(state.account && state.password){
      ElMessage({
      message: '登录成功',
      type: 'success',
      })
      router.push('/home')
    }else{
      ElMessage.error('Oops, this is a error message.')
    }
  }
  </script>
  
  <style lang="css" scoped>
  .login{
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .login-wrap{
    width: 400px;
    background-color: #d1e8ec;
    text-align: center;
    padding: 20px;
    box-sizing: border-box;
    box-shadow: inset 0 0 10px rgb(114, 121, 125);
  }
  h2{
    line-height: 3;
    font-size: 20px;
  }
  .el-row{
    width: 80%;
    margin: 0 auto;
    margin-bottom: 30px;
    justify-content: space-between;
  }
  .el-button{
    width: 40%;
  }
  </style>