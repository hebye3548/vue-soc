import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router';
import configRouter from './routers';
/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
Vue.use(VueRouter);
const router = new VueRouter();
router.beforeEach(function (transition) {
	console.info(transition)
	//check token 
  var token = "aaa";
  if (token) {
  	if(transition.to.name == 'login'){
    	transition.abort();
    	transition.to.router.go('/');
  	}
	transition.next();
  } else {
    transition.to.router.go('/login');
  }
});
configRouter(router);
router.start(Vue.extend(App), '#app');

