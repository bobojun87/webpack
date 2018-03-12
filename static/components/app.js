// 引入Vue
var Vue = require('../lib/vue.js')

// 引入组件
var Home = require('./home/home.js')
var List = require('./list/list.js')
var Detail = require('./detail/detail.js')
// 引入样式
require('../reset.css')
require('./app.css')

// 注册组件
Vue.component('home', Home);
Vue.component('list', List);
Vue.component('detail', Detail);

// 创建vue实例化对象
var app = new Vue({
	el: '#app',
	data: {
		view: 'home',
		route: [],
		query: '',
		searchValue: ''
	},
	methods: {
		searchResult: function() {
			this.query = this.searchValue;
			this.searchValue = '';
		},
		goBack: function() {
			history.go(-1);
		}
	}
})
module.exports = app;