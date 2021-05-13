import {createRouter, createWebHistory, Router, RouteRecordRaw, RouterHistory} from "vue-router";

const history: RouterHistory = createWebHistory();

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../components/view/Login.vue')
    },
    {
        path: '/manager',
        name: 'Manager',
        component: () => import('../components/view/Manager.vue')
    },
    {
        path: '/student',
        name: 'Student',
        component: () => import('../components/view/Student.vue')
    },
    {
        path: '/teacher',
        name: 'Teacher',
        component: () => import('../components/view/Teacher.vue')
    },
    {
        path: '/un-auth',
        name: 'UnAuth',
        component: () => import('../components/view/UnAuth.vue')
    }
];

const router: Router = createRouter({
    history,
    routes
});

export default router;
