import { defineStore } from 'pinia' // defineStore是store的一部分，全局生效

export const useUserStore = defineStore({
    id: 'user',
    state: () => { // 仓库中的数据源
        return {
            userInfo: {
                name: 'qing',
                age: 20,
                sex: '女'
            }
        }
    },
    actions: {  // 专门用来修改state
        changeUserName(name) {
            this.userInfo.name = name
        },
        changeUserSex(sex) {
            this.userInfo.sex = sex
        },
        changeUserAge(n) {
            this.userInfo.age += n
        }

    },
    getters: { // 仓库中的计算属性 
        afterAge(state) {   // (使用时不需要括号调用！)
            return state.userInfo.age + 10
        }
    },
    persist: { // 开启数据持久化
        enabled: true,
        strategies: [
            {
                paths: ['userInfo'],
                storage: localStorage
            }
        ]
    }
})