/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router';
Vue.use(VueRouter)

let routes = [
    {path: '/tambah-data-blog', component: require ('./components/Blog/Add-blog.vue').default},
    {path: '/pengguna-blog', component: require ('./components/Blog/Pengguna.vue').default},
    {path: '/kategori-blog', component: require ('./components/Blog/Kategori.vue').default},
    {path: '/data-blog', component: require ('./components/Blog/Data-blog.vue').default}
]

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

const router = new VueRouter({
    mode: 'history',
    routes //short for 'routes: routes
})

const app = new Vue({
    el: '#app',
    router
});

