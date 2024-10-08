import { createRouter, createWebHashHistory } from "vue-router";
import Dashboard from "../views/authorized-views/student-views/Dashboard.vue";
import MyCourses from "../views/authorized-views/student-views/MyCourses.vue";
import Assignments from "../views/authorized-views/student-views/Assignments.vue";
import NotFound from '../views/NotFound.vue'
import Quizzes from "../views/authorized-views/student-views/Quizzes.vue";
import Announcements from "../views/authorized-views/student-views/Announcements.vue";
import Rewards from "../views/authorized-views/student-views/Rewards.vue";
import StudentLayout from "../views/authorized-views/student-views/StudentLayout.vue";
import CourseDetails from "../views/authorized-views/student-views/CourseDetails.vue";
import Trash from "../views/authorized-views/student-views/Trash.vue";

import InstructorLayout from "../views/authorized-views/instructor-views/InstructorLayout.vue";
import InstructorDashboard from "../views/authorized-views/instructor-views/InstructorDashboard.vue";
import InstructorAssignments from "../views/authorized-views/instructor-views/InstructorAssignments.vue";
import InstructorQuizzes from "../views/authorized-views/instructor-views/InstructorQuizzes.vue";
import InstructorAnnouncements from "../views/authorized-views/instructor-views/InstructorAnnouncements.vue";
import InstructorRewards from "../views/authorized-views/instructor-views/InstructorRewards.vue";
import InstructorCourseDetails from "../views/authorized-views/instructor-views/InstructorCourseDetails.vue";
import AdminLayout from "../views/authorized-views/admin-views/AdminLayout.vue";


const router = createRouter({
    history: createWebHashHistory(),

    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('../views/Home.vue'),
            meta: { toTop: true, smoothScroll: true }
        },
        {
            path: '/about',
            name: 'About',
            component: () => import('../views/About.vue')
        },
        {
            path: '/services',
            name: 'Services',
            component: () => import('../views/Services.vue')
        },
        {
            path: '/pricing',
            name: 'Pricing',
            component: () => import('../views/Pricing.vue')
        },
        {
            path: '/contact',
            name: 'Contact',
            component: () => import('../views/Contact.vue')
        },
        {
            path: '/login',
            name: 'Login',
            component: () => import('../views/Login.vue')
        },
        {
            path: '/signup',
            name: 'Sign up',
            component: () => import('../views/Signup.vue')
        },
        {
            path: '/pre-signup',
            name: 'Pre-signup',
            component: () => import('../views/CreateAccount.vue')
        },
        {
            path: '/admin/login',
            name: 'Admin Login',
            component: () => import('../views/AdminLogin.vue')
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
                        logout: () => import('../views/authorized-views/Logout.vue')
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
                    children: [
                        {
                            path: ':course',
                            props: (route) => ({user: route.params.user, page: route.params.page, filter: route.params.filter, course: route.params.course }),
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
                            props: (route) => ({user: route.params.user, page: route.params.page, filter: route.params.filter, course: route.params.course }),
                            name: 'Coursefilter-instrcutor',
                            component: InstructorCourseDetails,
                        }
                    ]
                }
            ]
        },
        {
            path: '/admin/:user/:page',
            component: AdminLayout,
            props: (route) => ({user: route.params.user, page: route.params.page }),
            children: [
                {
                    path: '',
                    components:{
                        dashboard: () => import('../views/authorized-views/admin-views/AdminDashboard.vue'),
                        mycourses: () => import('../views/authorized-views/admin-views/AdminCourses.vue'),
                        tracking: () => import('../views/authorized-views/admin-views/AdminTracking.vue'),
                    },
                    
                },
                {
                    path: ':filter',
                    props: (route) => ({user: route.params.user, page: route.params.page, filter: route.params.filter }),
                    components: {
                        database: () => import('../views/authorized-views/admin-views/AdminDatabase.vue'), 
                    }
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