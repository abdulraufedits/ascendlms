<script setup>
import { RouterLink, useRouter } from 'vue-router';
import Illust from '../assets/login-img.svg';
import { ref } from 'vue';
import {useUserStore} from '../stores/user'
import { setCookie, checkCookie } from '../cookies';
import { useCoursesStore } from '../stores/courses';

const currentUser = useUserStore()
let student =true;
const currentCourses = useCoursesStore()
const usersCookie = checkCookie('id')
if(!usersCookie ){
    console.log(usersCookie)
} else {
    fetch("https://ascendapi-b810cfaf8c4a.herokuapp.com/students")
    .then(res => res.json()).then(data => {
        data.forEach(user => {
            if(user.id == usersCookie){
                
                localStorage.setItem('isAuthenticated', 'true')
                router.push(`/student/${user.username}/dashboard`)
                currentUser.getUserData(user)
                localStorage.setItem('isAuthenticated', true)
                fetch("https://ascendapi-b810cfaf8c4a.herokuapp.com/courses")
                .then(res => res.json()).then(courses => {
                    courses.forEach(course => {
                        course.students.forEach(std => {
                            if(std.id == user.id){
                                const lecs = []
                                const assigns = []
                                const quizs = []
                                const mntrs = []
                                course.lectureNotes.forEach(lec => {
                                        lec.students.forEach(stdd => {
                                            if(stdd.id == user.id){
                                                lecs.push({
                                                    id: lec.id,
                                                    lectureName:lec.lectureName,
                                                    courseName: lec.courseName,
                                                    createdOn: lec.createdOn,
                                                    status:  stdd.status
                                                })
                                            }})
                                })
                                course.assignments.forEach(assign => {
                                    assign.students.forEach(stdd => {
                                        if(stdd.id == user.id){
                                            assigns.push({
                                                    id: assign.id,
                                                    assignmentName:assign.assignmentName,
                                                    courseName: assign.courseName,
                                                    dueDate: assign.dueDate,
                                                    status:  stdd.status
                                                })
                                        }})
                                })
                                course.quizzes.forEach(quiz => {
                                    quiz.students.forEach(stdd => {
                                        if(stdd.id == user.id){
                                            quizs.push({
                                                    id: quiz.id,
                                                    quizName: quiz.quizName,
                                                    courseName: quiz.courseName,
                                                    dueDate: quiz.dueDate,
                                                    status:  stdd.status
                                                })
                                        }})
                                })
                                course.mentors.forEach(mntr => {
                                    mntrs.push({
                                        id: mntr.id,
                                        username: mntr.username,
                                        email: mntr.email,
                                        designation: mntr.designation,
                                        status: mntr.status
                                    })
                                })
                                currentCourses.getCoursesData({
                                    id: course.id,
                                    courseName: course.courseName,
                                    courseDesc: course.courseDesc,
                                    category: course.category,
                                    percentage: course.students.find(std => std.id === user.id)?.percentage,
                                    status: course.students.find(std => std.id === user.id)?.status,
                                    lectureNotes: lecs,
                                    assignments: assigns,
                                    quizzes: quizs,
                                    announcements: course.announcements,
                                    mentors: mntrs
                                        })
                            }
                    })
                }
            )}).catch(err => console.log(err))
        return;    
        } else {
                student = false;
            }
        })
    }).catch(err => console.log(err))
    if(!student){
        fetch("https://ascendapi-b810cfaf8c4a.herokuapp.com/instructors")
    .then(res => res.json()).then(data => {
        data.forEach(user => {
            if(user.email == eml && user.password == pass){
                localStorage.setItem('isAuthenticated', 'true')
                router.push(`/instructor/${user.username}/dashboard`)
                currentUser.getUserData(user)
                setCookie('id', user.id, 2)
                fetch("https://ascendapi-b810cfaf8c4a.herokuapp.com/courses")
                .then(res => res.json()).then(courses => {
                    courses.forEach(course => {
                        course.mentors.forEach(mnt => {
                            if(mnt.id == mnt.id){
                                const lecs = []
                                const assigns = []
                                const quizs = []
                                course.lectureNotes.forEach(lec => {
                                        lecs.push({
                                                    id: lec.id,
                                                    lectureName:lec.lectureName,
                                                    courseName: lec.courseName,
                                                    createdOn: lec.createdOn,
                                                    students: lec.students
                                                })
                                })
                                course.assignments.forEach(assign => {
                                        assigns.push({
                                                    id: assign.id,
                                                    assignmentName: assign.assignmentName,
                                                    courseName: assign.courseName,
                                                    uploadedOn: assign.dueDate, // API needs to be changed
                                                    dueDate: assign.dueDate,
                                                    students: assign.students
                                                })
                                })
                                course.quizzes.forEach(quiz => {  
                                        quizs.push({
                                                    id: quiz.id,
                                                    quizName: quiz.quizName,
                                                    courseName: quiz.courseName,
                                                    uploadedOn: quiz.dueDate,
                                                    dueDate: quiz.dueDate,
                                                    students: quiz.students
                                                })
                                })

                                currentCourses.getCoursesData({
                                    id: course.id,
                                    courseName: course.courseName,
                                    courseDesc: course.courseDesc,
                                    category: course.category,
                                    lectureNotes: lecs,
                                    assignments: assigns,
                                    quizzes: quizs,
                                    announcements: course.announcements,
                                })
                    }}
                        )}).catch(err => console.log(err))
            })} else {
                err.value = true
            }
})})}}

const email=ref("");
const password=ref("");
let err = ref(false);
const router = useRouter()

function valid(eml,pass){
    fetch("https://ascendapi-b810cfaf8c4a.herokuapp.com/students")
    .then(res => res.json()).then(data => {
        data.forEach(user => {
            if(user.email == eml && user.password == pass){
                
                localStorage.setItem('isAuthenticated', 'true')
                router.push(`/student/${user.username}/dashboard`)
                currentUser.getUserData(user)
                setCookie('id', user.id, 2)
                fetch("https://ascendapi-b810cfaf8c4a.herokuapp.com/courses")
                .then(res => res.json()).then(courses => {
                    courses.forEach(course => {
                        course.students.forEach(std => {
                            if(std.id == user.id){
                                const lecs = []
                                const assigns = []
                                const quizs = []
                                const mntrs = []
                                course.lectureNotes.forEach(lec => {
                                        lec.students.forEach(stdd => {
                                            if(stdd.id == user.id){
                                                lecs.push({
                                                    id: lec.id,
                                                    lectureName:lec.lectureName,
                                                    courseName: lec.courseName,
                                                    createdOn: lec.createdOn,
                                                    status:  stdd.status
                                                })
                                            }})
                                })
                                course.assignments.forEach(assign => {
                                    assign.students.forEach(stdd => {
                                        if(stdd.id == user.id){
                                            assigns.push({
                                                    id: assign.id,
                                                    assignmentName:assign.assignmentName,
                                                    courseName: assign.courseName,
                                                    dueDate: assign.dueDate,
                                                    status:  stdd.status
                                                })
                                        }})
                                })
                                course.quizzes.forEach(quiz => {
                                    quiz.students.forEach(stdd => {
                                        if(stdd.id == user.id){
                                            quizs.push({
                                                    id: quiz.id,
                                                    quizName: quiz.quizName,
                                                    courseName: quiz.courseName,
                                                    dueDate: quiz.dueDate,
                                                    status:  stdd.status
                                                })
                                        }})
                                })
                                course.mentors.forEach(mntr => {
                                    mntrs.push({
                                        id: mntr.id,
                                        username: mntr.username,
                                        email: mntr.email,
                                        designation: mntr.designation,
                                        status: mntr.status
                                    })
                                })
                                currentCourses.getCoursesData({
                                    id: course.id,
                                    courseName: course.courseName,
                                    courseDesc: course.courseDesc,
                                    percentage: course.students.find(std => std.id === user.id)?.percentage,
                                    category: course.category,
                                    status: course.students.find(std => std.id === user.id)?.status,
                                    lectureNotes: lecs,
                                    assignments: assigns,
                                    quizzes: quizs,
                                    announcements: course.announcements,
                                    mentors: mntrs
                                })
                            }
                    })
                }
            )}).catch(err => console.log(err))
        return;    
        } else {
                student = false;
            }
        })
    }).catch(err => console.log(err))
    if(!student){
        fetch("https://ascendapi-b810cfaf8c4a.herokuapp.com/instructors")
    .then(res => res.json()).then(data => {
        data.forEach(user => {
            if(user.email == eml && user.password == pass){
                
                localStorage.setItem('isAuthenticated', 'true')
                router.push(`/instructor/${user.username}/dashboard`)
                currentUser.getUserData(user)
                setCookie('id', user.id, 2)
                fetch("https://ascendapi-b810cfaf8c4a.herokuapp.com/courses")
                .then(res => res.json()).then(courses => {
                    courses.forEach(course => {
                        course.mentors.forEach(mnt => {
                            if(mnt.id == mnt.id){
                                const lecs = []
                                const assigns = []
                                const quizs = []
                                course.lectureNotes.forEach(lec => {
                                        lecs.push({
                                                    id: lec.id,
                                                    lectureName:lec.lectureName,
                                                    courseName: lec.courseName,
                                                    createdOn: lec.createdOn,
                                                    students: lec.students
                                                })
                                })
                                course.assignments.forEach(assign => {
                                        assigns.push({
                                                    id: assign.id,
                                                    assignmentName: assign.assignmentName,
                                                    courseName: assign.courseName,
                                                    uploadedOn: assign.dueDate, // API needs to be changed
                                                    dueDate: assign.dueDate,
                                                    students: assign.students
                                                })
                                })
                                course.quizzes.forEach(quiz => {  
                                        quizs.push({
                                                    id: quiz.id,
                                                    quizName: quiz.quizName,
                                                    courseName: quiz.courseName,
                                                    uploadedOn: quiz.dueDate,
                                                    dueDate: quiz.dueDate,
                                                    students: quiz.students
                                                })
                                })

                                currentCourses.getCoursesData({
                                    id: course.id,
                                    courseName: course.courseName,
                                    courseDesc: course.courseDesc,
                                    category: course.category,
                                    lectureNotes: lecs,
                                    assignments: assigns,
                                    quizzes: quizs,
                                    announcements: course.announcements,
                                })
                    }}
                        )})
            })} else {
                err.value = true
            }
        })
    }).catch(err => console.log(err))
}
}

</script>


<template>
    <div class="font-small h-screen md:flex w-full justify-between items-center">
        <main class=" w-full grid place-content-center h-screen">
            <div class=" w-80 h-2xl flex flex-col gap-6">
                <RouterLink to="/" class="flex items-center font-extrabold font-big rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">
                        <img class="w-auto h-8" src="../assets/logo.svg" alt="" />&nbsp;&nbsp;&nbsp;Ascend LMS
                    </RouterLink>
                <h1 class="text-3xl bold text-grey font-big font-bold">Login to your account</h1>
                <form action="" class="flex flex-col gap-4" @submit.prevent="valid(email,password)">
                    <input autocomplete="email" type="email" class="input-field" placeholder="email address" v-model="email" :class="err ? 'err' : ''">
                    <input autocomplete="new-password" type="password" class="input-field" placeholder="password" v-model="password" >
                    <RouterLink to="/" class=" text-primary font-small text-right -mt-2">Forgot password?</RouterLink>
                    <input type="submit" value="Login" class="cta font-big text-white font-medium cursor-pointer hover:bg-gray-900 transition-colors duration-300">
                    <p class="font-small text-center -mt-2">Don't have an account? <RouterLink to="/pre-signup" class=" text-primary">Sign up</RouterLink></p>
                </form>
                <h3 class="font-big text-center text-2xl">OR</h3>
                <button type="submit"><img src="../assets/continue-with-google.svg" alt="Contniue with google"></button>
            </div>
        </main>
        <aside class="bg-gray-100 h-screen w-full grid place-content-center max-sm:hidden">
            <img :src="Illust" alt="login image" class="h-96">
        </aside>
    </div>
</template>

<style scoped>
    .err{
        border: 2px solid red;
    }
</style>