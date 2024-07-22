<template>
    <div>
        <router-view></router-view>
        <div class="footer h-12">
            <TabBar class="fixed bottom-0"/>
        </div>
    </div>
</template>

<script setup>
// 架构
import TabBar from "@/views/layout/TabBar.vue"
</script>

<style lang="css" scoped>

</style>