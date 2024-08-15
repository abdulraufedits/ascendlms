import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";
import Dashboard from "../views/authorized-views/Dashboard.vue";
import MyCourses from "../views/authorized-views/MyCourses.vue";
import Assignments from "../views/authorized-views/Assignments.vue";
import NotFound from '../views/NotFound.vue'
import Quizzes from "../views/authorized-views/Quizzes.vue";
import Announcements from "../views/authorized-views/Announcements.vue";
import Rewards from "../views/authorized-views/Rewards.vue";
import CreateAccount from "../views/CreateAccount.vue";
import StudentLayout from "../views/authorized-views/StudentLayout.vue";
import MainLayout from "../views/authorized-views/MainLayout.vue";

const router = createRouter({
    history: createWebHashHistory(),

    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
            meta: { toTop: true, smoothScroll: true }
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/contact',
            name: 'Contact',
            component: Contact
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/signup',
            name: 'Sign up',
            component: Signup
        },
        {
            path: '/pre-signup',
            name: 'Pre-signup',
            component: CreateAccount
        },
        {
            path: '/student/:user/:page',
            component: MainLayout,
            props: (route) => ({user: route.params.user, page: route.params.page }),
            children:[
                {
                    path: '',
                    components:{
                        dashboard: Dashboard,
                        mycourses: MyCourses,
                    }
                }
            ]
        },
        // {
        //     path: '/student/:user',
        //     name: 'Student',
        //     component: Dashboard,
        //     props: true,
        //     children: [
        //         {
        //             path: 'dashboard',
        //             name: 'Dashboard',
        //             component: Dashboard,
        //             meta:{
        //                 requireAuth: true
        //             },
        //             props: true,
        //             params: { user: ':user'}
        //         },
        //         {
        //             path: '/mycourses',
        //             name: "My Courses",
        //             component: MyCourses,
        //             meta:{
        //                 requireAuth: true
        //             }
        //         },{
        //             path: '/assignments',
        //             name: "Assignments",
        //             component: Assignments,
        //             meta:{
        //                 requireAuth: true
        //             },
        //             children: [
        //                 {
        //                     path: ':filter',
        //                     component: Assignments
        //                 },
        //             ]
        //         },
        //         {
        //             path: '/quizzes',
        //             name: "Quizzes",
        //             component: Quizzes,
        //             meta:{
        //                 requireAuth: true
        //             },
        //             children: [
        //                 {
        //                     path: ':filter',
        //                     component: Quizzes
        //                 },
        //             ]
        //         },{
        //             path: '/announcements',
        //             name: "Announcements",
        //             component: Announcements,
        //             meta:{
        //                 requireAuth: true
        //             },
        //             children: [
        //                 {
        //                     path: ':filter',
        //                     component: Announcements
        //                 },
        //             ]
        //         },{
        //             path: '/rewards',
        //             name: "Rewards",
        //             component: Rewards,
        //             meta:{
        //                 requireAuth: true
        //             },
        //             children: [
        //                 {
        //                     path: ':filter',
        //                     component: Rewards
        //                 },
        //             ]
        //         },
        //         {
        //             path: '/trash',
        //             name: "Trash",
        //             component: MyCourses,
        //             meta:{
        //                 requireAuth: true
        //             }
        //         },{
        //             path: '/help',
        //             name: "Help",
        //             component: MyCourses,
        //             meta:{
        //                 requireAuth: true
        //             }
        //         },{
        //             path: '/settings',
        //             name: "Settings",
        //             component: MyCourses,
        //             meta:{
        //                 requireAuth: true
        //             }
        //         },{
        //             path: '/logout',
        //             name: "Log out",
        //             component: MyCourses,
        //             meta:{
        //                 requireAuth: true
        //             }
        //         },
                
        //     ]
        // },
        
        
        {   path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: NotFound
        },
        
    ],
    scrollBehavior (to) {
        const scroll = {}
        if (to.meta.toTop) scroll.top = 0
        if (to.meta.smoothScroll) scroll.behavior = 'smooth'
        return scroll
    }
})

export default router