<script setup>
import { RouterLink, useRouter } from 'vue-router';
import { ref } from 'vue';
import {useUserStore} from '../stores/user'
import { useCoursesStore } from '../stores/courses';
import { useStudentStore } from '../stores/students';
import { useInstructorStore } from '../stores/instructors';

const currentUser = useUserStore()
const currentCourses = useCoursesStore()
const currentStudents = useStudentStore()
const currentInstructors = useInstructorStore()

const email=ref("");
const password=ref("");
const username = ref("");
let err = ref(false);
const router = useRouter()

function valid(usern,eml,pass){
    fetch("https://ascendapi-b810cfaf8c4a.herokuapp.com/admin")
    .then(res => res.json()).then(user => {
            if(user.username== usern && user.email == eml && user.password == pass){
                
                router.push(`/admin/${user.username}/dashboard`)
                currentUser.getUserData(user)
                fetch("https://ascendapi-b810cfaf8c4a.herokuapp.com/courses")
                .then(res => res.json()).then(courses => {
                    courses.forEach(course => {

                    currentCourses.getCoursesData({
                        id: course.id,
                        courseName: course.courseName,
                        courseDesc: course.courseDesc,
                        category: course.category,
                        value: course.value,
                        rating: course.rating,
                        earning: course.earning,
                        lectureNotes: course.lectureNotes,
                        assignments: course.assignments,
                        quizzes: course.quizzes,
                        announcements: course.announcements,
                        students: course.students,
                        mentors: course.mentors
                    })
                    
                })
            }).catch(err => console.log(err))

                fetch("https://ascendapi-b810cfaf8c4a.herokuapp.com/students")
                .then(res => res.json()).then(students => {
                    students.forEach(student => {
                        currentStudents.getStudentData(student)
                    })
                }).catch(err => console.log(err))

                fetch("https://ascendapi-b810cfaf8c4a.herokuapp.com/instructors")
                .then(res => res.json()).then(instructors => {
                    instructors.forEach(inst => {
                        currentInstructors.getInstructorData(inst)
                    })
                }).catch(err => console.log(err))
        }
    }).catch(err => console.log(err))
}

</script>


<template>
    <main class=" w-full grid place-content-center h-screen">
            <div class="flex flex-col gap-y-6 font-small">
                <RouterLink to="/" class="flex items-center font-extrabold font-big rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">
                        <img class="w-auto h-8" src="../assets/logo.svg" alt="" />&nbsp;&nbsp;&nbsp;Ascend LMS
                    </RouterLink>
                <h1 class="text-3xl bold text-grey font-big font-bold">Login as admin</h1>
                <form action="" class="flex flex-col gap-4" @submit.prevent="valid(username,email,password)">
                    <input autocomplete="username" type="text" class="input-field" placeholder="username" v-model="username" :class="err ? 'err' : ''">
                    <input autocomplete="email" type="email" class="input-field" placeholder="email address" v-model="email" :class="err ? 'err' : ''">
                    <input autocomplete="new-password" type="password" class="input-field" placeholder="password" v-model="password" >
                    <input type="submit" value="Login" class="cta font-big text-white font-medium cursor-pointer hover:bg-gray-900 transition-colors duration-300">
                </form>
            </div>
        </main>
</template>

<style scoped>
    .err{
        border: 2px solid red;
    }
</style>