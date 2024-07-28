<template>
    <div class="top">
        <van-search
          v-model="searchField"
          placeholder="请输入搜索关键词"
          show-action
          shape="round"
          background="transparent"
          class="mb-1 mt-1"
        >
          <template #action>
            <van-icon name="comment-o" size="1.5rem" />
          </template>
        </van-search>
        <div class="slide-select"></div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const searchField = ref('')
</script>

<style lang="css" scoped>

</style>