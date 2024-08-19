<script setup>
import { RouterLink, useRouter } from 'vue-router';
import Illust from '../assets/login-img.svg';
import { ref } from 'vue';
import {useUserStore} from '../stores/user'
import { setCookie, checkCookie } from '../cookies';
import { useCoursesStore } from '../stores/courses';

import LectureNote from '../stores/classes/LectureNote';
import Assignment from '../stores/classes/Assignment';
import Quiz from '../stores/classes/Quiz';

const currentUser = useUserStore()

const currentCourses = useCoursesStore()
const usersCookie = checkCookie('id')
if(!usersCookie ){
    console.log(usersCookie)
} else {
    fetch("http://localhost:8000/students")
    .then(res => res.json()).then(data => {
        data.forEach(user => {
            if(user.id == usersCookie){
                router.push(`/student/${user.username}/dashboard`)
            currentUser.getUserData(user)
            }
        })
    }).catch(err => console.log(err))
}

const email=ref("");
const password=ref("");
let err = ref(false);
const router = useRouter()

function valid(eml,pass){
    fetch("http://localhost:8000/students")
    .then(res => res.json()).then(data => {
        data.forEach(user => {
            if(user.email == eml && user.password == pass){
                router.push(`/student/${user.username}/dashboard`)
                currentUser.getUserData(user)
                setCookie('id', user.id, 2)
                fetch("http://localhost:8000/courses")
                .then(res => res.json()).then(courses => {
                    courses.forEach(course => {
                        course.students.forEach(std => {
                            if(std.id == user.id){
                                const lecs = []
                                const assigns = []
                                const quizs = []
                                course.lectureNotes.forEach(lec => {
                                        lec.students.forEach(stdd => {
                                            if(stdd.id == user.id){
                                                lecs.push(new LectureNote(lec.id,lec.lectureName, lec.courseName, lec.createdOn, stdd.status))
                                            }})
                                })
                                course.assignments.forEach(assign => {
                                    assign.students.forEach(stdd => {
                                        if(stdd.id == user.id){
                                            assigns.push(new Assignment(assign.id,assign.assignmentName, assign.courseName, assign.dueDate, stdd.status))
                                        }})
                                })
                                course.quizzes.forEach(quiz => {
                                    quiz.students.forEach(stdd => {
                                        if(stdd.id == user.id){
                                            quizs.push(new Quiz(quiz.id,quiz.quizName, quiz.courseName, quiz.dueDate, stdd.status))
                                        }})
                                })
                                currentCourses.getCoursesData({
                                    id: course.id,
                                    courseName: course.courseName,
                                    courseDesc: course.courseDesc,
                                    status: course.students.find(std => std.id === user.id)?.status,
                                    lectureNotes: lecs,
                                    assignments: assigns,
                                    quizzes: quizs,
                                    announcements: course.announcements,
                                        })
                            }
                    })
                }
            )}).catch(err => console.log(err))
            } else {
                err.value = true;
            }
        })
    }).catch(err => console.log(err))
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