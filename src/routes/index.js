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
import CourseDetails from "../views/authorized-views/CourseDetails.vue";

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
            component: StudentLayout,
            props: (route) => ({user: route.params.user, page: route.params.page }),
            meta: { requiresAuth: true },
            children:[
                {
                    path: '',
                    components:{
                        dashboard: Dashboard,
                        mycourses: MyCourses,
                    }
                },
                {
                    path: ':filter',
                    props: (route) => ({user: route.params.user, page: route.params.page, filter: route.params.filter }),
                    components: {
                        assignments: Assignments,
                        quizzes: Quizzes,
                        announcements: Announcements,
                        rewards: Rewards,
                        details: CourseDetails
                    },
                    meta: { requiresAuth: true },
                    children: [
                        {
                            path: ':course',
                            name: 'Coursefilter',
                            component: CourseDetails,
                        }
                    ]
                }
            ]
        },
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

router.beforeEach((to, from) => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    // Check if the route requires authentication
    if (to.meta.requiresAuth && !isAuthenticated){
        // Check if the user is authenticated
        return {name: 'Login'}
        
    } 
});
export default router