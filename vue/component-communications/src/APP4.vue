<template>

    <Child ref="childRef"></Child>
    
    <div class="child">
        <ul>
          <li v-for="item in childRef?.list">{{ item }}</li>
        </ul>
    </div>

</template>

<script setup>
    import Child from '@/components/child4.vue'
    import { ref, onMounted } from 'vue'

    const childRef = ref(null)

    // onMounted(() => {
    //     childRef.value.getData()
    // })
</script>

<style lang="css" scoped>

</style>