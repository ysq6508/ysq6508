<script setup lang="ts">
// 解耦
// import TodoList from '@/components/TodoList.vue'
// import { useMouse } from '@/hooks/useMouse'
// const { x, y } = useMouse() // 自定义hook
import { useStorage } from '@/hooks/useStorage'
import Dialog from '@/components/Dialog.vue'

let userInfo = useStorage('username')
console.log(userInfo.value);
userInfo.value = {
  name: '张三',
  age: 20
}

</script>

<template>
  <!-- <Dialog>
    <template #header>
      <span>&nbsp;&nbsp;&gt;</span>
      <h1>title</h1>
      <button>按钮</button>
    </template>
    <form>
      <input type="text" placeholder="请输入用户名">
    </form>
    <template #footer>
      授权用户信息
    </template>
  </Dialog> -->
  <!-- {{ x }}  {{ y }} -->
  <!-- <TodoList></TodoList> -->
  <router-view></router-view>
  <van-tabbar>
    <van-tabbar-item>首页</van-tabbar-item>
  </van-tabbar>
</template>

<style scoped>

</style>
