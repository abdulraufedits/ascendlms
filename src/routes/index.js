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

const router = createRouter({
    history: createWebHashHistory(),

    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
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
            path: '/dashboard',
            name: 'Dashboard',
            component: Dashboard,
            meta:{
                requireAuth: true
            }
        },
        {
            path: '/mycourses',
            name: "My Courses",
            component: MyCourses,
            meta:{
                requireAuth: true
            }
        },{
            path: '/assignments',
            name: "Assignments",
            component: Assignments,
            meta:{
                requireAuth: true
            },
            children: [
                {
                    path: ':filter',
                    component: Assignments
                },
            ]
        },
        {
            path: '/quizzes',
            name: "Quizzes",
            component: Quizzes,
            meta:{
                requireAuth: true
            },
            children: [
                {
                    path: ':filter',
                    component: Quizzes
                },
            ]
        },{
            path: '/announcements',
            name: "Announcements",
            component: Announcements,
            meta:{
                requireAuth: true
            },
            children: [
                {
                    path: ':filter',
                    component: Announcements
                },
            ]
        },{
            path: '/rewards',
            name: "Rewards",
            component: MyCourses,
            meta:{
                requireAuth: true
            }
        },
        {
            path: '/trash',
            name: "Trash",
            component: MyCourses,
            meta:{
                requireAuth: true
            }
        },{
            path: '/help',
            name: "Help",
            component: MyCourses,
            meta:{
                requireAuth: true
            }
        },{
            path: '/settings',
            name: "Settings",
            component: MyCourses,
            meta:{
                requireAuth: true
            }
        },{
            path: '/logout',
            name: "Log out",
            component: MyCourses,
            meta:{
                requireAuth: true
            }
        },
        {   path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: NotFound
        },
        
    ]
})
export default router