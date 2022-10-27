import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter);

// 配置路由 第一步 先把组件引用进来
import Home from '@/views/Home.vue';
import HelloWorld from '@/views/HelloWorld.vue';
import Page404 from '@/views/Page404.vue';

import Child from '@/views/Child.vue';
import Child1 from '@/views/Child1.vue';
import Child2 from '@/views/Child2.vue';

// 第二步 进行路由配置

const routes = [
	{
		path: '/',
		component: Home,
		redirect: '/child3',
		children: [
			{
				path: 'child1',
				component: Child
			},
			{
				path: 'child2',
				component: Child1
			},
			{
				path: 'child3',
				component: Child2
			}
		]
	},
	{
		// name: 'sanpao',
		path:'/hello',
		component: HelloWorld,
		// alias: '/haha',// 别名路由，也可实现跳转
	},
	{
		path:'/*',
		component: Page404
	}
];

// 公共组件 都是一些小组件
// 路由对应的组件 试图组件
// 第三步 生成实例对象

const router = new VueRouter({
	routes,
	mode: 'hash'
	// mode: 'history'  // 没有了#号
})

// 第四步 暴露这个实例对象
export default router