<template>
    <div class="inputGroup">
        <input type="text" v-model="value">
        <button @click="add">添加</button>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    const value = ref('')

    const emits = defineEmits(['add1'])  // 创建一个add事件
    const add = () => {
        // 将value给到父组件
        emits('add1', value.value)  // 发布事件 参数：传输出去的事件名 传输出去的事件值
    }
</script>

<style lang="css" scoped>

</style>