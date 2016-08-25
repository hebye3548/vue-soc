export default (router) => router.map({
	'/':{
		name: 'index',
		component: require('./views/home'),
	},
    '/login': {
        name: 'login',
        component: require('./views/login'),
    },
});
