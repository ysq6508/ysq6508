<template>
    <div>
       <p>bot page</p> 
       <button @click="toHot">去沸点</button>
    </div>
</template>

<script setup>
    import { useRouter } from 'vue-router' 

    const router = useRouter() // 钩子函数

    const toHot = () => {
        // 跳转到沸点页面
        // router.push('/hot')
        // 带参数跳转
        router.push({ path: '/hot', query: { id: 1, name: 'zhangsan'}})  
    }
</script>

<style lang="css" scoped>

</style>