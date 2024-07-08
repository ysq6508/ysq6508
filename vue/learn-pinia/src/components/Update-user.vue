<template>
    <div>
        <button @click="changeName">修改用户姓名</button>
        <button @click="changeSex">修改用户性别</button>
        <button @click="changeAge">修改用户年龄</button>
    </div>
</template>

<script setup>
import { useUserStore } from '@/store/user';
const userStore = useUserStore();

const changeName = () => {   
    // userStore.userInfo.name = 'xx'  // 不要这种代码！不要在组件里改变store里的数据！
    userStore.changeUserName('cwl')
}
const changeSex = () => {
    userStore.changeUserSex('female')
}
const changeAge = () => {
    userStore.changeUserAge(1)
}
</script>

<style lang="css" scoped>

</style>