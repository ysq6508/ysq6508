<template>
    <div class="inputGroup">
        <input type="text" v-model="value">
        <button @click="add">添加</button>
    </div>
</template>

<script setup>
    import { ref, defineProps } from 'vue'
    const value = ref('')
    const list = ref(['html', 'css', 'js'])

    const add = () => {
        list.value.push(value.value)
    }

    defineExpose({ list }) // 自愿暴露数据
</script>

<style lang="css" scoped>

</style>