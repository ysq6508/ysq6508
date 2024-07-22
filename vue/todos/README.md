# 指令
1. v-for
2. v-on

# watch
watch(xx, (newVal, oldVal) => {

})
监听一个属性值，当属性值发生改变时，执行回调函数

# 计算属性
const xxx = computed(() => {
    return xx
})
当computed中的变量值发生改变时，computed中的回调函数会重新执行