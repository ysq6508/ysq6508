<template>
    <Child :msg="title" @onSub="handle"/>
    <h1>{{ res }}</h1>
</template>

<script setup>
import Child from './components/child.vue'
import { ref } from 'vue'

const title = 'helloworld'

const res = ref('')
const handle = (e) => {
    res.value = e
}

</script>

<style lang="css" scoped>

</style>