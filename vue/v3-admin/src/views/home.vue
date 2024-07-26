<template>
    <div class="wrapper">
        <v-header></v-header>
        <v-sidebar></v-sidebar>
        <div class="content-box">
            <RouterView />
        </div>
    </div>
</template>

<script lang="ts" setup>
// 命名区分于一般的标签
import vHeader from '../components/header.vue'
import vSidebar from '../components/sidebar.vue'
</script>