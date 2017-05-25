import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/index'
import Home from '@/components/home'
import Chartbang from '@/components/chartbang'
import Classify from '@/components/classify'
import Artistbang from '@/components/artistbang'
import Mvbang from '@/components/mvbang'
import Song from '@/components/song'
import VueResource from 'vue-resource'
Vue.use(VueResource);
Vue.use(Router)

export default new Router({
	routes: [{
			path: '/home',
			name: 'home',
			component: Home,
			'children': [{
					path: 'index',
					name: 'home.index',
					component: Index
				},
				{
					path: 'chartbang',
					name: 'home.chartbang',
					component: Chartbang
				},
				{
					path: 'classify',
					name: 'home.classify',
					component: Classify
				},
				{
					path: 'artistbang',
					name: 'home.artistbang',
					component: Artistbang
				},
				{
					path: 'mvbang',
					name: 'home.mvbang',
					component: Mvbang
				}
			]
		},
		{
			path: '/song',
			name: 'song',
			component: Song
		},
		{
			path: '*',
			redirect: '/home/index'
		}
	]
})