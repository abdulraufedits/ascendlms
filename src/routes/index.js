import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";
import Dashboard from "../views/authorized-views/student-views/Dashboard.vue";
import MyCourses from "../views/authorized-views/student-views/MyCourses.vue";
import Assignments from "../views/authorized-views/student-views/Assignments.vue";
import NotFound from '../views/NotFound.vue'
import Quizzes from "../views/authorized-views/student-views/Quizzes.vue";
import Announcements from "../views/authorized-views/student-views/Announcements.vue";
import Rewards from "../views/authorized-views/student-views/Rewards.vue";
import CreateAccount from "../views/CreateAccount.vue";
import StudentLayout from "../views/authorized-views/student-views/StudentLayout.vue";
import CourseDetails from "../views/authorized-views/student-views/CourseDetails.vue";
import Trash from "../views/authorized-views/student-views/Trash.vue";

import InstructorLayout from "../views/authorized-views/instructor-views/InstructorLayout.vue";
import Logout from "../views/authorized-views/Logout.vue";
import InstructorDashboard from "../views/authorized-views/instructor-views/InstructorDashboard.vue";

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
                        trash: Trash,
                        logout: Logout
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
        {
            path: '/instructor/:user/:page',
            component: InstructorLayout,
            props: (route) => ({user: route.params.user, page: route.params.page }),
            children:[
                {
                    path: '',
                    components:{
                        dashboard: InstructorDashboard
                    }
                },
                {
                    path: ':filter',
                    props: (route) => ({user: route.params.user, page: route.params.page, filter: route.params.filter }),
                    components: {
                        assignments: InstructorAssignments,
                        quizzes: InstructorQuizzes,
                        announcements: InstructorAnnouncements,
                        rewards: InstructorRewards,
                        details: InstructorCourseDetails
                    },
                    children: [
                        {
                            path: ':course',
                            name: 'Coursefilter',
                            component: InstructorCourseDetails,
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