<template>
    <div class="login">
        <h3>xixi</h3>
        <div class="user">
            <span>账号:</span>
            <input type="text" v-model="state.user">
        </div>

        <div class="pwd">
            <span>密码:</span>
            <input type="pwd" v-model="state.pwd">
        </div>

        <div class="btn">
            <button @click="login">登录</button>
        </div>
    </div>
</template>

<script setup>
    import { reactive } from "vue";
    import { useRouter } from 'vue-router'

    const state = reactive({
        user: '',
        pwd: ''
    })
    const router = useRouter()
    const login = () => {
        if(state.user !== '' && state.pwd !== ''){
            localStorage.setItem('user', state.user)
            router.push('/home')
        }
    }
</script>

<style lang="css" scoped>
    h3 {
        margin-bottom: 25px;
        text-align: center;
    }
    .login {
        background-color: pink;
        width: 350px;
        height: 300px;
        position: absolute;  /*不对父容器用弹性是因为后面这个位置放别的页面不一定居中 */
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        box-shadow: 0 0 30px rgb(156, 117, 124);
        padding: 30px;  /* 谷歌向外撑开到390×340 */
        box-sizing: border-box;
    }
    .user, .pwd {
        margin-bottom: 15%;
        display: flex;
        align-items: center; /*弹性容器控制里面的子元素都y轴居中 */
    }
    span {
        width: 50px;
        margin-right: 5px;
    }
    input {
        flex: 1;
        font-size: 15px;
        padding: 3px 3px;
    }
    button {
        width: 80%;
        display: block;
        margin: 0 auto; /*只能用于块级元素 */
        padding: 5px;
        background-color: rgb(218, 93, 114);
        color: aliceblue;
        border: none;
        border-radius: 100px;
        cursor: pointer;
    }
</style>