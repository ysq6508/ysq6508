<template>
  <div class="inputGroup">
    <input type="text" v-model="value">
    <button @click="add">添加</button>
  </div>

  <Child :msg="toChild"> </Child>
</template>

<script setup>
  import Child from '@/components/child.vue' // 引入子组件
  import { ref } from 'vue'
  const value = ref('')
  const toChild = ref('')

  const add = () => {
    // list.value.push(value.value)
    // value.value = ''
    toChild.value = value.value
  }
</script>

<style lang="css" scoped>

</style>