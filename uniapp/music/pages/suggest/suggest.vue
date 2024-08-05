<template>
	<view class="suggest">
		<wyheader>
			<template v-slot:content>
				<view class="search">
					<uni-search-bar placeholder="歌曲"></uni-search-bar>
				</view>
			</template>
		</wyheader>

		<!-- banner -->
		<view class="banner">
			<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
				:duration="duration" indicator-color='#ffffff'>
				<swiper-item v-for="item in state.banners" :key="item.encodeId">
					<view class="swiper-item uni-bg-red">
						<image :src="item.pic" mode=""></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script setup>
import { reactive, ref } from 'vue';

const indicatorDots = ref(true)
const autoplay = ref(true)
const interval = ref('1000')
const state = reactive({
	banners: []
})
	
uni.request({
	url: 'http://localhost:3000/banner',
	method: 'GET',
	data: {
		type: 2
	},
	success(res) {
		// console.log(res);
		state.banners = res.data.banners
	}
})
</script>

<style lang="scss" scoped>
.suggest {
	padding: 0 20rpx;
	.search {
		width: 500rpx;
		height: 60rpx;
		:deep(.uni-searchbar) {
			height: 100%;
			padding: 0;
			.uni-searchbar__box {
				height: 100%;
				padding: 0;
			}
		}
	}
	.banner {
		.swiper-item {
			width: 100%;
			height: 100%;
			border-radius: 10px;
			overflow: hidden;
			image {
				width: 100%;
				height: 100%;
			}
		}
	}
	.balls {
		display: flex;
		overflow-x: scroll;
		margin: 30rpx 0;
		.ball-item {
			flex: 0 0 20%;
			font-size: 20rpx;
			text-align: center;
			.icon {
				width: 70rpx;
				height: 70rpx;
				margin: 0 auto;
				margin-bottom: 14rpx;
				background-color: $uni-primary-color;
				border-radius: 50%;
				image {
					width: 100%;
					height: 100%;
				}
			}
		}
	}
}
</style>