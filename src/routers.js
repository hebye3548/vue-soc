export default (router) => router.map({
	'/':{
		name: 'index',
		component: require('./views/home'),
	},
    '/login': {
        name: 'login',
        component: require('./views/login'),
    },
    '*': {
        name: '404',
        component: function(resolve) { require(['./views/404'], resolve); }
    },
});
