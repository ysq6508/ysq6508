<template>
    <div class="item-warpper text-gray-900 font-sans leading-normal rounded-lg" :ref="forwardRef">
        <div class="container mx-auto overflow-hidden ">
            <div class="bg-white rounded-lg shadow-md p-6 max-w-screen-sm m-4">
                <div class="flex justify-between items-center mb-2">
                    <div class="flex items-center">
                        <img :src="item.picture" alt="Author Avatar" class="w-10 h-10 rounded-full mr-2">
                        <span class="font-medium text-base">{{ item.author }}</span>
                    </div>
                    <time>{{ item.date }}</time>
                </div>
                <span class="bg-gray-200 text-sm rounded-xl">
                    <van-icon name="location-o" />#{{ item.topic }}
                </span>
                <h2 class="text-xl font-semibold mb-2">{{ item.title }}</h2>
                <p>{{item.content}}</p>
                <div class="flex justify-between">
                    <span class="text-blue-600">...全文</span>
                    <div class="heat flex">
                        <div class="likes">
                        <van-icon name="like-o" size="1rem"/>{{ item.likes  }} &nbsp;
                        </div>
                        <div class="comments">
                            <van-icon name="chat-o" size="1rem"/>{{ item.comments }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { PromotionalItem } from "@/types/promotional"
import { useForwardRef } from "@/hooks/useForwardRef"

defineProps<{
  item: PromotionalItem
}>()

const forwardRef = useForwardRef()
</script>