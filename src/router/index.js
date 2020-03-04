import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const router = new Router({
    routes: [{
            path: "*",
            redirect: "/"
        }, {
            path: '/',
            component: resolve => require(['../components/home.vue'], resolve),
            meta: {
                requireAuth: false,
            },
        }, {
            path: '/login',
            component: resolve => require(['../components/login.vue'], resolve),
            meta: {
                requireAuth: false,
            },
        },
        {
            path: '/logout',
            component: resolve => require(['../components/logout.vue'], resolve),
            meta: {
                requireAuth: false,
            },
        },
        {
            path: '/home',
            redirect: '/projectEvents',
            meta: {
                requireAuth: true,
            },
            component: resolve => require(['../components/home.vue'], resolve),
            children: [
                {
                    path: '/users',
                    component: resolve => require(['../components/user.vue'], resolve),
                    meta: {
                        requireAuth: true,
                    },
                }
            ]
        }
    ],

    mode: "history",
    base: '/tl/'
})

export default router;