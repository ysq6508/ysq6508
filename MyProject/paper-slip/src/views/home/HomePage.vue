<template>
    <div class="top-bg absolute h-36 -z-10 w-screen bg-gradient-to-b from-stone-300 to-white"></div>
    <!-- 头部 -->
    <div class="top">
      <van-search
        v-model="searchField"
        placeholder="请输入搜索关键词"
        show-action
        shape="round"
        background="transparent"
        class="mb-1 pt-1"
      >
        <template #action>
          <van-icon name="envelop-o" badge="9" size="1.8rem" class="mt-2"/>
        </template>
      </van-search>
      <div class="slide-select"></div>
    </div>
    <!-- 主体 -->
    <main class="flex flex-col space-y-4 [&_h2.title]:font-bold [&_h2.title]:mb-2 [&_h2.title]:ml-4">
      <header class="w-[calc(100vw-2rem)] min-h-28 bg-white rounded-2xl p-2 shadow-md self-center">
        <section class="topbar flex justify-around mb-3">
          <div class="topbar-item flex flex-col items-center" v-for="item in topBarState" :key="item.title">
            <div class="topbar-item__icon">
              <van-icon :name="item.icon" size="1.5rem" />
            </div>
            <div class="topbar-item__text text-xs">{{ item.title }}</div>
          </div>
        </section>
        <van-button type="primary" block size="small" class="[&.van-button]:rounded-xl" color="rgb(246,247,248)">
          <div class="text-black flex">
            <van-icon name="apps-o" size="1rem" />
            <span class="text-xs ml-2 font-bold">所有频道</span>
          </div>
        </van-button>
      </header>
      <!-- 轮播图 -->
      <section class="w-[calc(100vw-2rem)] bg-gray self-center">
        <van-swipe class="my-swipe rounded-lg max-h-20 " autoplay="1500" lazy-render>
          <van-swipe-item v-for="(item, index) in swipeItems" :key="index">
            <img :src="item.src" alt="Swipe Image" class="w-full object-cover" />
          </van-swipe-item>
        </van-swipe>
      </section>
      <section>
        <h2 class="title">最近关注</h2>
        <RecentlyFollowedCard :items="recentlyFollowState"/>
      </section>
      <section>
        <h2 class="title">精选创作</h2>
        <PromotionalList :items="promotionalList" :next="handleNextPage"/>
      </section>
    </main>
</template>

<script lang="ts" setup>
import { ref, toRefs, onMounted } from 'vue'
import { useHomeStore } from "@/stores/homeStore"
import { usePromotionalStore } from "@/stores/promotionalStore"
import RecentlyFollowedCard from "@/components/RecentlyFollow/RecentlyFollowCard.vue"
import PromotionalList from "@/components/Promotional/PromotionalList.vue"

const homeStore = useHomeStore()
const promotionalStore = usePromotionalStore()
const { topBarState, lunboImg, recentlyFollowState } = toRefs(homeStore)

const searchField = ref('')
const swipeItems = ref(lunboImg.value)
const currentPage = ref(1)

onMounted(async () => {
  await promotionalStore.getPromotionalList(1, 2)
})

const { promotionalList } = toRefs(promotionalStore)

const handleNextPage = async (setHasMore: (value: boolean) => void) => {
  currentPage.value++
  const res = await promotionalStore.getPromotionalList(currentPage.value, 2)
  if (!res.hasMore) {
    setHasMore(false)
  }
}

</script>

<style lang="css" scoped>

</style>