<template>
    <div class="item-wrapper flex space-x-2 w-screen overflow-scroll px-4">
        <div
          class="item flex-[0_0_auto] w-24 space-y-2"
          v-for="(item, index) in items"
          :key="item.title"
          :ref="(el) => (index === items.length - 1 ? (NodeRef = el as HTMLDivElement) : '')"
        >
          <div class="item-image">
            <img :src="item.cover" alt="item.name" class="rounded-lg" />
          </div>
          <div class="item-info">
            <div class="item-name text-center text-xs font-bold">{{ item.title }}</div>
          </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import type { RecentlyFollowItem } from "@/types/home"
import useIntersectionObserver from "@/hooks/useIntersectionObserver"

const NodeRef = ref<HTMLDivElement | null>(null) // 获取到最后一个元素的DOM引用
const { hasMore } = useIntersectionObserver(NodeRef, () => {
  console.log("hasMore", hasMore.value)
})

defineProps<{
  items: RecentlyFollowItem[]
}>()
</script>

