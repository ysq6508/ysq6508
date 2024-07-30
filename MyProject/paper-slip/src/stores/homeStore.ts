import { defineStore } from "pinia"
import { ref } from "vue"
import type { HomeTopBarItem, HomeLunboItem } from "@/types/home"

export const useHomeStore = defineStore("home", () => {
    const topBarState = ref<HomeTopBarItem[]>([
        {
          title: "作文榜",
          icon: "bar-chart-o",
        },
        {
          title: "活动",
          icon: "flag-o",
        },
        {
          title: "文学社",
          icon: "fire-o",
        },
        {
          title: "观点墙",
          icon: "chat-o",
        },
        {
          title: "自习室",
          icon: "newspaper-o",
        }
    ])

    const lunboImg = ref<HomeLunboItem[]>([
      { src: 'src/assets/image/lunbo/lunbo1.webp' },
      { src: 'src/assets/image/lunbo/lunbo2.jpg' },
      { src: 'src/assets/image/lunbo/lunbo3.png' },
    ])

    const recentlyFollowState = ref([
      {
        title: "高中作文圈",
        cover: "src/assets/image/FollowCover.jpg"
      },
      {
        title: "高中作文圈",
        cover: "src/assets/image/FollowCover.jpg"
      },
      {
        title: "高中作文圈",
        cover: "src/assets/image/FollowCover.jpg"
      },
      {
        title: "高中作文圈",
        cover: "src/assets/image/FollowCover.jpg"
      },
      {
        title: "高中作文圈",
        cover: "src/assets/image/FollowCover.jpg"
      },
      {
        title: "高中作文圈",
        cover: "src/assets/image/FollowCover.jpg"
      },
      {
        title: "高中作文圈",
        cover: "src/assets/image/FollowCover.jpg"
      },
      {
        title: "高中作文圈",
        cover: "src/assets/image/FollowCover.jpg"
      },
      {
        title: "高中作文圈",
        cover: "src/assets/image/FollowCover.jpg"
      },
      {
        title: "高中作文圈",
        cover: "src/assets/image/FollowCover.jpg"
      },
      {
        title: "高中作文圈",
        cover: "src/assets/image/FollowCover.jpg"
      },
      {
        title: "高中作文圈",
        cover: "src/assets/image/FollowCover.jpg"
      },
    ])

    return {
        topBarState,
        lunboImg,
        recentlyFollowState
    }
})