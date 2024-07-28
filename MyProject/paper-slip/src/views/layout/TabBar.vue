<template>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="smile-comment-o" to="/community">社区</van-tabbar-item>
      <van-tabbar-item icon="gem-o" to="/member">会员</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" to="/shop">商店</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/account">我的</van-tabbar-item>
    </van-tabbar>
  </template>
  
  <script setup lang="ts">
  import { ref } from "vue"
  const active = ref(0)
  </script>
  
  <style scoped></style>
  