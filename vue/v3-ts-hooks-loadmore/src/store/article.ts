import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Article } from '../types/article'

export const useArticleStore = defineStore('article', () => {
    // 私有变量 文章数据集
    const _articles = [
        {
            id: 1,
            title: '拿下网易！'
        },
        {
            id: 2,
            title: '拿下腾讯！'
        },
        {
            id: 3,
            title: '拿下阿里！'
        },
        {
            id: 4,
            title: '拿下百度！'
        },
        {
            id: 5,
            title: '拿下京东！'
        },
        {
            id: 6,
            title: '拿下抖音！'
        },
        {
            id: 7,
            title: '拿下头条！'
        },
        {
            id: 8,
            title: '拿下知乎！'
        },
        {
            id: 9,
            title: '拿下微博！'
        },
        {
            id: 10,
            title: '拿下抖音！'
        },
        {
            id: 10,
            title: '拿下抖音！'
        },
        {
            id: 11,
            title: '拿下网易！'
        },
        {
            id: 12,
            title: '拿下网易！'
        },
        {
            id: 13,
            title: '拿下网易！'
        },
        {
            id: 14,
            title: '拿下网易！'
        },
        {
            id: 15,
            title: '拿下网易！'
        },
        {
            id: 16,
            title: '拿下网易！'
        },
        {
            id: 17,
            title: '拿下网易！'
        },
        {
            id: 18,
            title: '拿下网易！'
        },
        {
            id: 19,
            title: '拿下网易！'
        },
        {
            id: 20,
            title: '拿下网易！'
        },
        {
            id: 21,
            title: '拿下网易！'
        },
        {
            id: 22,
            title: '拿下网易！'
        },
        {
            id: 23,
            title: '拿下网易！'
        },
        {
            id: 24,
            title: '拿下网易！'
        },
        {
            id: 25,
            title: '拿下网易！'
        },
        {
            id: 26,
            title: '拿下网易！'
        },
    ]

    // 响应式文章数据
    const articles = ref<Article[]>([])

    // 获取每页文章action
    const getArticles = (page: number, size: number = 10) => { 
        // resolve后的数据类型约束，约定的是resolve里data传进来的类型
        return new Promise<{   
            data: Article[];
            page: number;
            total: number;
            hasMore: boolean;
        }>((resolve => {
            setTimeout(() => {
                // 按页切割，得到当前页面数据
                const data = _articles.slice((page - 1) * size, page * size);
                // 原先的articles解构出来，再追加data
                articles.value = [...articles.value, ...data] 
                resolve({
                    data,
                    page,
                    total: _articles.length,
                    // 是否还有更多数据，如果没有数据就false
                    hasMore: page * size < _articles.length
                })
            }, 500)
        }))
    }

    return {
        articles,
        getArticles
    }
})