<template>
    <ul>
        <li>姓名： {{ userStore.userInfo.name }}</li>
        <li>年龄： {{ age }}</li>
        <li>十年后： {{ userStore.afterAge }}</li>
        <li>性别： {{ userInfo.sex }}</li>
    </ul>
</template>

<script setup>
import { useUserStore } from '@/store/user';
import { computed } from 'vue';
import { storeToRefs } from 'pinia';

const userStore = useUserStore();

const age = computed(() => userStore.userInfo.age) // 用到的值变更了，computed就会重新执行一遍，页面会重新渲染更改后的值
// const sex = userStore.userInfo.sex // 不是响应式，更改值后无法渲染，改成下面那种
const { userInfo } = storeToRefs(userStore) // 将整个仓库变成响应式(准确来说它原本就是响应式，但这里是把被赋值的那个变量变成响应式)

// console.log(userStore);

</script>

<style lang="css" scoped>

</style>