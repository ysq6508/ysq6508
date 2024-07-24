<template>
    <div class="list-wrapper flex flex-wrap items-center">
        <div class="item flex-[0_0_50%]" 
            v-for="(item, index) in items"
            :key="item.id"
            :ref="(el) => (index === items.length - 1 ? (nodeRef = el):'')"
        >
            <div class="h-40">{{ item.title }}</div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import type { PromotionalItem } from '@/types/promotional'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

defineProps<{
    items: PromotionalItem[]
}>()

const nodeRef = ref<HTMLDivElement | null>(null)

const { hasMore, setHasMore} = useIntersectionObserver(nodeRef, () => {
    console.log('loadmore');
    
})
</script>