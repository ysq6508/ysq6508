import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { HomeTopBarItem } from '@/types/home'

export const useHomeStore = defineStore('home', () => {
    const topBarState = ref<HomeTopBarItem[]>([
        {
          title: "游览 & 体验",
          icon: "photo-o",
        },
        {
          title: "景点门票",
          icon: "coupon-o",
        },
        {
          title: "酒店",
          icon: "hotel-o",
        },
        {
          title: "交通",
          icon: "logistics",
        },
        {
          title: "租车",
          icon: "guide-o",
        },
      ])
    return {
    }
})