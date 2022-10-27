<template>
	<div id="app">
		<button @click="to('/')">首页</button>
		<button @click="to('/hello')">详情页</button>
		<!-- <router-link to="/">首页</router-link>
		<router-link to="/hello/asdasd">详情页</router-link> -->
		<router-view></router-view>
	</div>
</template>

<script>
	// 路由对应的组件 如何渲染出来
	// 路由组件需要用 vue-router提供的router-view 组件来渲染
	// 动态路由 渲染不同人的信息 可以利用动态路由获取参数发送请求来读取对应的数据		// 写法：path:'/hello/:name',		// <router-link to="/hello/helloworld">详情页</router-link>		// 读值 hello world 里面	
			// export default {
			// 	created() {
			// 		console.log(this.$route.params)
			// 	}
			// }
	export default {
		name: "App",
		methods: {
			to(path) {
				// 1.string 字符串形式
				// this.$router.push(path).catch(() => {});
				
				// 2.object 对象形式
				this.$router.push({ path }).catch(() => {});
				
				/*
					3. 带查询参数
					this.$router.push({ path, query: { id: 100 } }).catch(() => {});
				*/
			 // 4. 命名路由 看官网
			},
		}
	}
</script>
