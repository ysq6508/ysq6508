<template>
    <div>
        <div class="cs relative">
          <!-- header -->
          <CommunityHeader />
          <!-- 选项栏 -->
          <NavBar />
          <!-- 大家都在看 -->
          <DiscoverMore id="discover" />
          <!-- 精选合集 -->
          <SelectedCollection id="selected" />
          <!-- 范文月刊 -->
          <SampleMonth id="samplemonth" />
          <!-- 每日速递 -->
          <DailyDelivery id="dailyDelivery" />
        </div>
  </div>
</template>

<script setup>
import CommunityHeader from "@/components/CommunitySection/CommunityHeader.vue"
import NavBar from "@/components/CommunitySection/NavBar.vue"
// import DiscoverMore from "@/components/CommunitySection/DiscoverMore.vue"
// import SelectedCollection from "@/components/CommunitySection/SelectedCollection.vue"
// import SampleMonth from "@/components/CommunitySection/SampleMonth.vue"
// import DailyDelivery from "@/components/CommunitySection/DailyDelivery.vue"
</script>

<style>
/* 隐藏滚动条的宽度和高度 */
.cs::-webkit-scrollbar {
  width: 0;
  height: 0;
}
</style>