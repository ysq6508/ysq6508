<template>
    <div>
        <h2>当前温度：{{ temp }}</h2>
        <h2>建议穿衣：{{ suggest }}</h2>
        <button @click="add">+</button>
        <button @click="minus">-</button>
    </div>
</template>

<script setup>
    import { ref, watch } from 'vue'

    let temp = ref(20)
    let suggest = '夹克'  // suggest 的值是基于 temp 的值动态决定的,Vue 仍然能够追踪这种依赖关系并正确地重新渲染视图(vue的默认机制)

    const add = () => {
        temp.value += 5
    }
    const minus = () => {
        temp.value -= 5
    }

    // watch 函数可以监听一个响应式数据，当响应式数据发生变化时，会执行回调函数
    // temp 是原始类型，所以它作为第一个参数可以不以回调的形式传入
    watch(temp, (newValue, oldValue) => {
        console.log(newValue, oldValue);
        if (newValue >= 30) {
            suggest = '短袖'
        } else if (newValue >= 20) {
            suggest = '夹克'
        } else if (newValue >= 0) {
            suggest = '棉袄'
        } else {
            suggest = '羽绒服'
        }
    }
    )
</script>

<style lang="css" scoped>

</style>