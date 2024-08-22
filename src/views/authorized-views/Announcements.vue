<template>
    <div class="flex">
        <SideMenu isActivePage="Announcements" v-show="sideBarState"/>
        <main class="w-full">
            <StudentHeader :username="$route.params.user" title="Announcements" @close-side-bar="()=> sideBarState = sideBarState ? false : true" subtitle="Courses / Announcements"/>
            <section class="flex px-10 pt-8">
                <Tab title="All" @click="sortType = 'All'" :sortType="sortType" obj="announcements"/>
                <Tab v-for="course in courses.courses" :title="course.courseName" obj="announcements" @click="sortType = course.courseName"/>
            </section>
            <section class="flex justify-between px-10 py-4 bg-background border-y-2 border-ddd">
                <div class="flex gap-x-2">
                    <input type="search" name="search-assignments" id="search-assignments"  class=" bg-white px-6 py-3 rounded-lg border-ddd border-2 bg-[url('/src/assets/icons/search-outline.svg')] bg-[right_1rem_center] bg-no-repeat bg-[length:18px_18px]   outline-none font-big font-light" placeholder="Search anything...">
                    <div class="grid place-content-center rounded-lg p-3 bg-white border-2 border-ddd">
                    <ion-icon name="filter-outline" class=" text-2xl"></ion-icon>
                    </div>
                </div>
            </section>
            <AnnouncementList :announcements="courses.sort(sortType,userCourses.coursess, 'announcements')"/>
        </main>
    </div>

</template>

<script setup>
import StudentHeader from '../../components/StudentHeader.vue'
import SideMenu from '../../components/SideMenu.vue'
import Tab from '../../components/Tab.vue'
import { ref, reactive } from 'vue';
import { useCoursesStore } from '../../stores/courses';
import AnnouncementList from '../../components/AnnouncementList.vue';

const props = defineProps({
    username: {
        type: String,
        default: "NOName"
    }
})
const sideBarState = ref(true);
if(window.innerWidth < 1024){
    sideBarState.value =  false;
}
const courses = reactive(useCoursesStore())
const userCourses = reactive({
    coursess: courses.courses
})

const sortType = ref("All")

</script>


<style>

</style>