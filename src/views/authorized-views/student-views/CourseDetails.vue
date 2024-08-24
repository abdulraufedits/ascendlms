<template>
    <div class="flex">
        <SideMenu isActivePage="My Courses" v-show="sideBarState"/>
    <main class="w-full">
        <StudentHeader :username="user.username" :title="$route.params.filter" @close-side-bar="()=> sideBarState = sideBarState ? false : true" subtitle="Courses / My Courses / UX Laws"/>
        <section class="flex flex-col gap-6 px-10 py-8">
            <div class=" rounded-lg h-72 bg-[url(/src/assets/courses/uxlaws.png)] bg-cover bg-no-repeat"></div>
            <div class="flex justify-between items-center">
                <h1 class="h1-title">{{$route.params.filter}}</h1>
                <div class="flex gap-x-2">
                    <button class=" grid place-content-center rounded-lg px-5 font-big bg-red text-white">End Course</button>
                    <div class="grid place-content-center min-h-14 min-w-14 rounded-lg border-2 border-ddd">
                        <ion-icon name="settings-outline" class=" text-2xl"></ion-icon>
                    </div>
                </div>
            </div>
            <div class="flex gap-x-2 items-center">
                <div class="bg-[#BAFA95] text-[#3D8415] font-big flex items-center gap-x-1 px-3 py-1.5 rounded">
                    <ion-icon name="ribbon"></ion-icon>
                    <label for="category">{{userCourses.coursess[userCourses.coursess.findIndex(crs => $route.params.filter === crs.courseName)].category}}</label>
                </div>
                <span class="size-1 bg-gray-400 rounded-full my-auto"></span>
                <div class=" text-gray-500 font-big flex items-center gap-x-1">
                    <ion-icon name="globe-outline"></ion-icon>
                    <label for="visibility">Public</label>
                </div>
                <div class="flex gap-x-1 items-center text-gray-500 font-big">
                    <ion-icon class=" md hydrated" role="img" name="calendar-outline"></ion-icon>
                    <time class="" datetime="{{date}}">March 12, 2024</time>
                    <span class="size-1 bg-gray-500 rounded-full my-auto"></span>
                    <time class="" datetime="{{ date }}">10:12 PM</time>
                </div>
            </div>
            <RouterLink :to="{name: 'Coursefilter', params: { course: 'mentors'}}" @click="sortType = 'mentors'">
                <div class="badges-wrap flex">
                    <img class="img-badge bg-accent -mr-2" src="https://api.dicebear.com/9.x/personas/svg?seed=Buster" alt="avatar" />
                    <img class="img-badge bg-secondary -mr-2" src="https://api.dicebear.com/9.x/avataaars/svg?seed=Bubba" alt="avatar" />
                    <img class="img-badge bg-yellow -mr-2" src="https://api.dicebear.com/9.x/avataaars/svg?seed=Bubba" alt="avatar" />
                    <label for="members" class="img-badge bg-gray-200 text-sm font-bold font-small">+93</label>
                </div>
            </RouterLink>
        </section>
        <section class="flex px-10 pt-8">
            <CourseTab obj="content" :title="$route.params.filter" :sortType="sortType" @click="sortType = 'content'"/>
            <CourseTab obj="assignments" :title="$route.params.filter" :sortType="sortType" @click="sortType = 'assignments'"/>
            <CourseTab obj="quizzes" :title="$route.params.filter" :sortType="sortType" @click="sortType = 'quizzes'"/>
            <CourseTab obj="mentors" :title="$route.params.filter" :sortType="sortType" @click="sortType = 'mentors'"/>
            <CourseTab obj="announcements" :title="$route.params.filter" :sortType="sortType" @click="sortType = 'announcements'"/>
            <CourseTab obj="miscellaneous" :title="$route.params.filter" :sortType="sortType" @click="sortType = 'miscellaneous'"/>
            <CourseTab obj="support" :title="$route.params.filter" :sortType="sortType" @click="sortType = 'support'"/>
            </section>
            <TableControls/>
            <CourseTable :courses="courses.contentFilter(userCourses.coursess, sortType)" :type="sortType" />
    </main>
    </div>
</template>

<script setup>
import SideMenu from '../../../components/SideMenu.vue';
import StudentHeader from '../../../components/StudentHeader.vue';
import CourseTab from '../../../components/CourseTab.vue';
import { useUserStore } from '../../../stores/user'
import { ref, reactive } from 'vue';
import { useCoursesStore } from '../../../stores/courses';
import CourseTable from '../../../components/CourseTable.vue';
import { RouterLink } from 'vue-router';
import TableControls from '../../../components/TableControls.vue';

const courses = reactive(useCoursesStore())
const userCourses = reactive({
    coursess: courses.courses
})

const user = reactive(useUserStore().users[0])
const coursesView = ref('list')
const sortType = ref("content")


const sideBarState = ref(true);
if(window.innerWidth < 1024){
    sideBarState.value =  false;
}

// const props = defineProps({
//     course: {
//         type: Object,
//         default: {
//             courseName: "",
//             courseDesc: "",
//             percentage: 0,
//             lecsCount: 0,
//             assignmentCount: 0,
//             quizCount: 0,
//         }
//     }
// })
</script>