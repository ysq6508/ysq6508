import { ref, watch, onUnmounted } from 'vue'

const useIntersectionObserver = () => {
    const hasMore = ref<boolean>(true)
    onUnmounted(() => {
        hasMore.value = true
    })
    watch(hasMore, (value) => {
        
    })
    return {
        hasMore,
        setHasMore: ( value:boolean ) => {
            hasMore.value = value
        }
    }
}