export default (router) => router.map({
    '/': {
        name: 'login',
        component: require('./views/login'),
    },
    '/er': {
        name: '404',
        component: function(resolve) { require(['./views/404'], resolve); }
    },
});
