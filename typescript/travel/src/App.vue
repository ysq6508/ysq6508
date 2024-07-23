<script setup lang="ts">
// 解耦
// import TodoList from '@/components/TodoList.vue'
// import { useMouse } from '@/hooks/useMouse'
// const { x, y } = useMouse() // 自定义hook

</script>

<template>
  <!-- {{ x }}  {{ y }} -->
  <!-- <TodoList></TodoList> -->
  <router-view></router-view>
  <van-tabbar>
    <van-tabbar-item>首页</van-tabbar-item>
  </van-tabbar>
</template>

<style scoped>

</style>
