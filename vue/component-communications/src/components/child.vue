<template>
    <div class="child">
        <ul>
          <li v-for="item in list">{{ item }}</li>
        </ul>
    </div>
</template>

<script setup>
    // defineProps({
    //     list: {
    //         type: Array,
    //         default: () => []
    //     }
    // })

    import { ref, watch } from 'vue'
    const list = ref(['html', 'css', 'js'])
    const props = defineProps({
        msg: ''
    })
    // 监视props.msg的值的变化
    watch(
        () => props.msg,
        (newVal, oldVal) => {
            list.value.push(newVal)
        }
    )
</script>

<style lang="css" scoped>

</style>