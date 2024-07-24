<template>
    <div class="home">
        <div class="top-bg absolute h-36 -z-10 w-screen
         bg-gradient-to-b from-orange-500 to-white"></div>
        <van-search
            v-model="searchField"
            placehold="请输入搜索关键词"
            show-action
            shape="round"
            background="transparent"
            class="mb-2">
            <template #action>
                <div class="text-white">
                    <van-icon name="shopping-cart-o" size="1.25rem"/>
                </div>
            </template>
        </van-search>
        <main class="flex flex-col space-y-4">
            <header class="w-[calc(100vw-2rem)] min-h-24 
            bg-white rounded-2xl p-2 shoadow-md self-center">
                <section class="topbar flex justify-around mb-3">
                    <div
                        v-for="item in topBarState"
                        :key="item.title" 
                        class="topbar-item flex flex-col items-center">
                        <div class="topbar-item__icon">
                            <van-icon :name="item.icon" size="2rem"/>
                        </div>
                        <div class="topbar-item__text text-xs">{{item.title}}</div>
                    </div>
                </section>
                <van-button type="primary"
                block size="small" color="rgb(246, 247, 248)">
                    <div class="text-black flex">
                        <van-icon name="app-o" size="1rem" />
                        <span class="text-xs ml-2 font-bold">所有分类</span>
                    </div>
                </van-button>
            </header>
            <section class="navbar flex overflow-x-scroll w-screen space-x-4 px-4">
                <div
                  class="navbar-item flex flex-col border rounded-lg flex-[0_0_auto] w-24"
                  v-for="item in navBarState"
                  :key="item.title"
                >
                  <div class="navbar-item__text text-xs p-2 pb-0">{{ item.title }}</div>
                  <div class="navbar-item__icon self-end p-2">
                    <van-icon :name="item.icon" size="1.5rem" />
                  </div>
                </div>
            </section>
            <section>
                <h2 class="title">最近浏览</h2>
                <!-- <RecentlyViewCard  :items="recentlyViewedState"/> -->
                <RecentlyViewCard />

            </section>

        </main>
    </div>
</template>
<script setup lang="ts">
import { ref, toRefs } from 'vue'  // 把响应式数据直接生成为当前组件的响应式数据
import { useHomeStore } from '@/store/homeStore'
import RecentlyViewCard from '@/components/RecentlyView/RecentlyViewCard.vue'
const searchField = ref('')
const homeStore = useHomeStore()

const { 
    topBarState, 
    navBarState, 
    recentlyViewedState 
} = toRefs(homeStore)
</script>