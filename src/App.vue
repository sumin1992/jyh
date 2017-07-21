
<template>
    <div>
      <!--头部-->
      <header class="mint-header is-fixed">
            <h1 class="mint-header-title">JYH 购物商城</h1> 
     </header>
     <!--内容-->
       <router-view></router-view>
    <!--底部-->
        <nav class="mui-bar mui-bar-tab">
			<router-link to="/home" class="mui-tab-item mui-active" href="#tabbar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link to="/goods" class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-email"></span>
				<span class="mui-tab-label">商品</span>
			</router-link>
			<router-link to="/shopping" class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon mui-icon-contact"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link to="/setting" class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">设置</span>
			</router-link>
		</nav>
    </div>  
    
</template>
<style scoped>
  
</style>
<script>
    export default {
        data(){
            return {
                test : 200
            }
        }
    }


</script>