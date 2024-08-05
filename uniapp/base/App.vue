<script>
	export default {
		onLaunch: function() {   // 初始化完成触发一次
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')  // 页面被渲染完成触发一次
		},
		onHide: function() {    
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
