<template>
    <div class="app">
        <button class="btn" @click="changeTab(1)">购物车</button>
        <button class="btn" @click="changeTab(2)">todos</button>


        <!--shopping-->
        <Shopping v-if="tabIndex === 1"></Shopping>

        <!--todos-->
        <Todos v-else></Todos>
    </div>
  </template>
  
  <script setup>
    import { ref } from 'vue'
    import Shopping from './components/Shopping.vue'  // 引入组件
    import Todos from './components/Todos.vue'

    let tabIndex = ref(1)

    const changeTab = (index) => {
        console.log(index);
        tabIndex.value = index
    }

  </script>
  
  <style lang="css" scoped>
    .app {
        text-align: center;
    }
    .btn {
        font-size: 20px;
        width: 100px;
        height: 40px;
        margin: 20px;
    }
  </style>