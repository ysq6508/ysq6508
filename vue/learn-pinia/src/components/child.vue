<template>
    <div>
        <h2>{{ msg }}</h2>
        <button @click="submit">提交</button>
    </div>
</template>

<script setup>
defineProps({
    // msg: String  // 简写
    msg: {
        typeof: String,
        default: 'hello'  // 默认值
    }
})

const success = '提交成功'

// 把success给父组件使用 (发布订阅)
const emits = defineEmits(['success']) // 创建事件
const submit = () => {
    emits('onSub', success)  // 发布事件
}

</script>

<style lang="css" scoped>

</style>