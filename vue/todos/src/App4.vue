<template>
    <div>
        <h2>当前温度：{{ temp }}</h2>
        <h2>建议穿衣：{{ suggest }}</h2>
        <button @click="add">+</button>
        <button @click="minus">-</button>
    </div>
</template>

<script setup>
    import { computed, ref, watch } from 'vue'

    let temp = ref(20)

    const add = () => {
        temp.value += 5
    }
    const minus = () => {
        temp.value -= 5
    }

    // 只要写在computed里的变量的值发生变化，就会重新计算 suggest 的值
    const suggest = computed(() => {
        if (temp.value >= 30) {
            return '短袖'
        } else if (temp.value >= 20) {
            return '夹克'
        } else if (temp.value >= 0) {
            return '棉袄'
        } else {
            return '羽绒服'
        }
    })
</script>

<style lang="css" scoped>

</style>