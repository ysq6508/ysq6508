import { defineStore } from "pinia"
import { ref } from "vue"
import type { PromotionalItem } from "@/types/promotional"

export const usePromotionalStore = defineStore('promotional', () => {
    const _promotional: PromotionalItem[] = [
        {
            id: 1,
            picture: 'https://ww1.sinaimg.cn/mw690/007aMX11ly1hra2350qo4j30u00u0gpr.jpg',
            author: '我是飞飞鱼',
            date: '7-12',
            title: '直追青云志，莫忘一两风',
            content: '在辽阔的天际，有鸿鹄展翅高飞，它不畏风雨，一心向着那遥远而蔚蓝的苍穹翱翔。这正是人们心中那份追求卓越、勇攀高峰的精神写照。“长空直追青云志”，是每一个不甘平凡的灵魂对未来的期许和承诺',
            topic: '纸条擂台:夏日绝句7月征文',
            likes: 124,
            comments: 22
        },
        {
            id: 2,
            picture: 'https://ww1.sinaimg.cn/mw690/007aMX11ly1hra2350qo4j30u00u0gpr.jpg',
            author: '我是飞飞鱼',
            date: '7-12',
            title: '直追青云志，莫忘一两风',
            content: '在辽阔的天际，有鸿鹄展翅高飞，它不畏风雨，一心向着那遥远而蔚蓝的苍穹翱翔。这正是人们心中那份追求卓越、勇攀高峰的精神写照。“长空直追青云志”，是每一个不甘平凡的灵魂对未来的期许和承诺',
            topic: '纸条擂台:夏日绝句7月征文',
            likes: 124,
            comments: 22
        },
        {
            id: 3,
            picture: 'https://ww1.sinaimg.cn/mw690/007aMX11ly1hra2350qo4j30u00u0gpr.jpg',
            author: '我是飞飞鱼',
            date: '7-12',
            title: '直追青云志，莫忘一两风',
            content: '在辽阔的天际，有鸿鹄展翅高飞，它不畏风雨，一心向着那遥远而蔚蓝的苍穹翱翔。这正是人们心中那份追求卓越、勇攀高峰的精神写照。“长空直追青云志”，是每一个不甘平凡的灵魂对未来的期许和承诺',
            topic: '纸条擂台:夏日绝句7月征文',
            likes: 124,
            comments: 22
        },
        {
            id: 4,
            picture: 'https://ww1.sinaimg.cn/mw690/007aMX11ly1hra2350qo4j30u00u0gpr.jpg',
            author: '我是飞飞鱼',
            date: '7-12',
            title: '直追青云志，莫忘一两风',
            content: '在辽阔的天际，有鸿鹄展翅高飞，它不畏风雨，一心向着那遥远而蔚蓝的苍穹翱翔。这正是人们心中那份追求卓越、勇攀高峰的精神写照。“长空直追青云志”，是每一个不甘平凡的灵魂对未来的期许和承诺',
            topic: '纸条擂台:夏日绝句7月征文',
            likes: 124,
            comments: 22
        },
        {
            id: 5,
            picture: 'https://ww1.sinaimg.cn/mw690/007aMX11ly1hra2350qo4j30u00u0gpr.jpg',
            author: '我是飞飞鱼',
            date: '7-12',
            title: '直追青云志，莫忘一两风',
            content: '在辽阔的天际，有鸿鹄展翅高飞，它不畏风雨，一心向着那遥远而蔚蓝的苍穹翱翔。这正是人们心中那份追求卓越、勇攀高峰的精神写照。“长空直追青云志”，是每一个不甘平凡的灵魂对未来的期许和承诺',
            topic: '纸条擂台:夏日绝句7月征文',
            likes: 124,
            comments: 22
        },
        {
            id: 6,
            picture: 'https://ww1.sinaimg.cn/mw690/007aMX11ly1hra2350qo4j30u00u0gpr.jpg',
            author: '我是飞飞鱼',
            date: '7-12',
            title: '直追青云志，莫忘一两风',
            content: '在辽阔的天际，有鸿鹄展翅高飞，它不畏风雨，一心向着那遥远而蔚蓝的苍穹翱翔。这正是人们心中那份追求卓越、勇攀高峰的精神写照。“长空直追青云志”，是每一个不甘平凡的灵魂对未来的期许和承诺',
            topic: '纸条擂台:夏日绝句7月征文',
            likes: 124,
            comments: 22
        },
        {
            id: 7,
            picture: 'https://ww1.sinaimg.cn/mw690/007aMX11ly1hra2350qo4j30u00u0gpr.jpg',
            author: '我是飞飞鱼',
            date: '7-12',
            title: '直追青云志，莫忘一两风',
            content: '在辽阔的天际，有鸿鹄展翅高飞，它不畏风雨，一心向着那遥远而蔚蓝的苍穹翱翔。这正是人们心中那份追求卓越、勇攀高峰的精神写照。“长空直追青云志”，是每一个不甘平凡的灵魂对未来的期许和承诺',
            topic: '纸条擂台:夏日绝句7月征文',
            likes: 124,
            comments: 22
        },
        {
            id: 8,
            picture: 'https://ww1.sinaimg.cn/mw690/007aMX11ly1hra2350qo4j30u00u0gpr.jpg',
            author: '我是飞飞鱼',
            date: '7-12',
            title: '直追青云志，莫忘一两风',
            content: '在辽阔的天际，有鸿鹄展翅高飞，它不畏风雨，一心向着那遥远而蔚蓝的苍穹翱翔。这正是人们心中那份追求卓越、勇攀高峰的精神写照。“长空直追青云志”，是每一个不甘平凡的灵魂对未来的期许和承诺',
            topic: '纸条擂台:夏日绝句7月征文',
            likes: 124,
            comments: 22
        },
        {
            id: 9,
            picture: 'https://ww1.sinaimg.cn/mw690/007aMX11ly1hra2350qo4j30u00u0gpr.jpg',
            author: '我是飞飞鱼',
            date: '7-12',
            title: '直追青云志，莫忘一两风',
            content: '在辽阔的天际，有鸿鹄展翅高飞，它不畏风雨，一心向着那遥远而蔚蓝的苍穹翱翔。这正是人们心中那份追求卓越、勇攀高峰的精神写照。“长空直追青云志”，是每一个不甘平凡的灵魂对未来的期许和承诺',
            topic: '纸条擂台:夏日绝句7月征文',
            likes: 124,
            comments: 22
        },
        {
            id: 10,
            picture: 'https://ww1.sinaimg.cn/mw690/007aMX11ly1hra2350qo4j30u00u0gpr.jpg',
            author: '我是飞飞鱼',
            date: '7-12',
            title: '直追青云志，莫忘一两风',
            content: '在辽阔的天际，有鸿鹄展翅高飞，它不畏风雨，一心向着那遥远而蔚蓝的苍穹翱翔。这正是人们心中那份追求卓越、勇攀高峰的精神写照。“长空直追青云志”，是每一个不甘平凡的灵魂对未来的期许和承诺',
            topic: '纸条擂台:夏日绝句7月征文',
            likes: 124,
            comments: 22
        },
        {
            id: 11,
            picture: 'https://ww1.sinaimg.cn/mw690/007aMX11ly1hra2350qo4j30u00u0gpr.jpg',
            author: '我是飞飞鱼',
            date: '7-12',
            title: '直追青云志，莫忘一两风',
            content: '在辽阔的天际，有鸿鹄展翅高飞，它不畏风雨，一心向着那遥远而蔚蓝的苍穹翱翔。这正是人们心中那份追求卓越、勇攀高峰的精神写照。“长空直追青云志”，是每一个不甘平凡的灵魂对未来的期许和承诺',
            topic: '纸条擂台:夏日绝句7月征文',
            likes: 124,
            comments: 22
        },
        {
            id: 12,
            picture: 'https://ww1.sinaimg.cn/mw690/007aMX11ly1hra2350qo4j30u00u0gpr.jpg',
            author: '我是飞飞鱼',
            date: '7-12',
            title: '直追青云志，莫忘一两风',
            content: '在辽阔的天际，有鸿鹄展翅高飞，它不畏风雨，一心向着那遥远而蔚蓝的苍穹翱翔。这正是人们心中那份追求卓越、勇攀高峰的精神写照。“长空直追青云志”，是每一个不甘平凡的灵魂对未来的期许和承诺',
            topic: '纸条擂台:夏日绝句7月征文',
            likes: 124,
            comments: 22
        },
        {
            id: 13,
            picture: 'https://ww1.sinaimg.cn/mw690/007aMX11ly1hra2350qo4j30u00u0gpr.jpg',
            author: '我是飞飞鱼',
            date: '7-12',
            title: '直追青云志，莫忘一两风',
            content: '在辽阔的天际，有鸿鹄展翅高飞，它不畏风雨，一心向着那遥远而蔚蓝的苍穹翱翔。这正是人们心中那份追求卓越、勇攀高峰的精神写照。“长空直追青云志”，是每一个不甘平凡的灵魂对未来的期许和承诺',
            topic: '纸条擂台:夏日绝句7月征文',
            likes: 124,
            comments: 22
        },
        {
            id: 14,
            picture: 'https://ww1.sinaimg.cn/mw690/007aMX11ly1hra2350qo4j30u00u0gpr.jpg',
            author: '我是飞飞鱼',
            date: '7-12',
            title: '直追青云志，莫忘一两风',
            content: '在辽阔的天际，有鸿鹄展翅高飞，它不畏风雨，一心向着那遥远而蔚蓝的苍穹翱翔。这正是人们心中那份追求卓越、勇攀高峰的精神写照。“长空直追青云志”，是每一个不甘平凡的灵魂对未来的期许和承诺',
            topic: '纸条擂台:夏日绝句7月征文',
            likes: 124,
            comments: 22
        },
        {
            id: 15,
            picture: 'https://ww1.sinaimg.cn/mw690/007aMX11ly1hra2350qo4j30u00u0gpr.jpg',
            author: '我是飞飞鱼',
            date: '7-12',
            title: '直追青云志，莫忘一两风',
            content: '在辽阔的天际，有鸿鹄展翅高飞，它不畏风雨，一心向着那遥远而蔚蓝的苍穹翱翔。这正是人们心中那份追求卓越、勇攀高峰的精神写照。“长空直追青云志”，是每一个不甘平凡的灵魂对未来的期许和承诺',
            topic: '纸条擂台:夏日绝句7月征文',
            likes: 124,
            comments: 22
        },
        {
            id: 16,
            picture: 'https://ww1.sinaimg.cn/mw690/007aMX11ly1hra2350qo4j30u00u0gpr.jpg',
            author: '我是飞飞鱼',
            date: '7-12',
            title: '直追青云志，莫忘一两风',
            content: '在辽阔的天际，有鸿鹄展翅高飞，它不畏风雨，一心向着那遥远而蔚蓝的苍穹翱翔。这正是人们心中那份追求卓越、勇攀高峰的精神写照。“长空直追青云志”，是每一个不甘平凡的灵魂对未来的期许和承诺',
            topic: '纸条擂台:夏日绝句7月征文',
            likes: 124,
            comments: 22
        },
        {
            id: 17,
            picture: 'https://ww1.sinaimg.cn/mw690/007aMX11ly1hra2350qo4j30u00u0gpr.jpg',
            author: '我是飞飞鱼',
            date: '7-12',
            title: '直追青云志，莫忘一两风',
            content: '在辽阔的天际，有鸿鹄展翅高飞，它不畏风雨，一心向着那遥远而蔚蓝的苍穹翱翔。这正是人们心中那份追求卓越、勇攀高峰的精神写照。“长空直追青云志”，是每一个不甘平凡的灵魂对未来的期许和承诺',
            topic: '纸条擂台:夏日绝句7月征文',
            likes: 124,
            comments: 22
        },
        {
            id: 18,
            picture: 'https://ww1.sinaimg.cn/mw690/007aMX11ly1hra2350qo4j30u00u0gpr.jpg',
            author: '我是飞飞鱼',
            date: '7-12',
            title: '直追青云志，莫忘一两风',
            content: '在辽阔的天际，有鸿鹄展翅高飞，它不畏风雨，一心向着那遥远而蔚蓝的苍穹翱翔。这正是人们心中那份追求卓越、勇攀高峰的精神写照。“长空直追青云志”，是每一个不甘平凡的灵魂对未来的期许和承诺',
            topic: '纸条擂台:夏日绝句7月征文',
            likes: 124,
            comments: 22
        },
        {
            id: 19,
            picture: 'https://ww1.sinaimg.cn/mw690/007aMX11ly1hra2350qo4j30u00u0gpr.jpg',
            author: '我是飞飞鱼',
            date: '7-12',
            title: '直追青云志，莫忘一两风',
            content: '在辽阔的天际，有鸿鹄展翅高飞，它不畏风雨，一心向着那遥远而蔚蓝的苍穹翱翔。这正是人们心中那份追求卓越、勇攀高峰的精神写照。“长空直追青云志”，是每一个不甘平凡的灵魂对未来的期许和承诺',
            topic: '纸条擂台:夏日绝句7月征文',
            likes: 124,
            comments: 22
        },
        {
            id: 20,
            picture: 'https://ww1.sinaimg.cn/mw690/007aMX11ly1hra2350qo4j30u00u0gpr.jpg',
            author: '我是飞飞鱼',
            date: '7-12',
            title: '直追青云志，莫忘一两风',
            content: '在辽阔的天际，有鸿鹄展翅高飞，它不畏风雨，一心向着那遥远而蔚蓝的苍穹翱翔。这正是人们心中那份追求卓越、勇攀高峰的精神写照。“长空直追青云志”，是每一个不甘平凡的灵魂对未来的期许和承诺',
            topic: '纸条擂台:夏日绝句7月征文',
            likes: 124,
            comments: 22
        },
        {
            id: 21,
            picture: 'https://ww1.sinaimg.cn/mw690/007aMX11ly1hra2350qo4j30u00u0gpr.jpg',
            author: '我是飞飞鱼',
            date: '7-12',
            title: '直追青云志，莫忘一两风',
            content: '在辽阔的天际，有鸿鹄展翅高飞，它不畏风雨，一心向着那遥远而蔚蓝的苍穹翱翔。这正是人们心中那份追求卓越、勇攀高峰的精神写照。“长空直追青云志”，是每一个不甘平凡的灵魂对未来的期许和承诺',
            topic: '纸条擂台:夏日绝句7月征文',
            likes: 124,
            comments: 22
        },
        {
            id: 22,
            picture: 'https://ww1.sinaimg.cn/mw690/007aMX11ly1hra2350qo4j30u00u0gpr.jpg',
            author: '我是飞飞鱼',
            date: '7-12',
            title: '直追青云志，莫忘一两风',
            content: '在辽阔的天际，有鸿鹄展翅高飞，它不畏风雨，一心向着那遥远而蔚蓝的苍穹翱翔。这正是人们心中那份追求卓越、勇攀高峰的精神写照。“长空直追青云志”，是每一个不甘平凡的灵魂对未来的期许和承诺',
            topic: '纸条擂台:夏日绝句7月征文',
            likes: 124,
            comments: 22
        },
        {
            id: 23,
            picture: 'https://ww1.sinaimg.cn/mw690/007aMX11ly1hra2350qo4j30u00u0gpr.jpg',
            author: '我是飞飞鱼',
            date: '7-12',
            title: '直追青云志，莫忘一两风',
            content: '在辽阔的天际，有鸿鹄展翅高飞，它不畏风雨，一心向着那遥远而蔚蓝的苍穹翱翔。这正是人们心中那份追求卓越、勇攀高峰的精神写照。“长空直追青云志”，是每一个不甘平凡的灵魂对未来的期许和承诺',
            topic: '纸条擂台:夏日绝句7月征文',
            likes: 124,
            comments: 22
        },
        {
            id: 24,
            picture: 'https://ww1.sinaimg.cn/mw690/007aMX11ly1hra2350qo4j30u00u0gpr.jpg',
            author: '我是飞飞鱼',
            date: '7-12',
            title: '直追青云志，莫忘一两风',
            content: '在辽阔的天际，有鸿鹄展翅高飞，它不畏风雨，一心向着那遥远而蔚蓝的苍穹翱翔。这正是人们心中那份追求卓越、勇攀高峰的精神写照。“长空直追青云志”，是每一个不甘平凡的灵魂对未来的期许和承诺',
            topic: '纸条擂台:夏日绝句7月征文',
            likes: 124,
            comments: 22
        },
    ]

    const promotionalList = ref<PromotionalItem[]>([])

    // 模拟异步请求
    const getPromotionalList = (page: number, size: number) => {
      return new Promise<{
        data: PromotionalItem[]
        page: number
        total: number
        hasMore: boolean
      }>((resolve) => {
        setTimeout(() => {
          const data = _promotional.slice((page - 1) * size, page * size)
          promotionalList.value = [...promotionalList.value, ...data]
          resolve({
            data,
            page,
            total: _promotional.length,
            hasMore: page * size < _promotional.length,
          })
        }, 100)
      })
    }

    return {
      promotionalList,
      getPromotionalList,
    }
})