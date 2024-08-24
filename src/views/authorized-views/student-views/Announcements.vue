<template>
    <div class="flex">
        <SideMenu isActivePage="Announcements" v-show="sideBarState"/>
        <main class="w-full">
            <StudentHeader :username="$route.params.user" title="Announcements" @close-side-bar="()=> sideBarState = sideBarState ? false : true" subtitle="Courses / Announcements"/>
            <section class="flex px-10 pt-8">
                <Tab title="All" @click="sortType = 'All'" :sortType="sortType" obj="announcements"/>
                <Tab v-for="course in courses.courses" :title="course.courseName" obj="announcements" @click="sortType = course.courseName"/>
            </section>
            <TableControls/>
            <AnnouncementList :announcements="courses.sort(sortType,userCourses.coursess, 'announcements')"/>
        </main>
    </div>

</template>

<script setup>
import StudentHeader from '../../../components/StudentHeader.vue'
import SideMenu from '../../../components/SideMenu.vue'
import Tab from '../../../components/Tab.vue'
import { ref, reactive } from 'vue';
import { useCoursesStore } from '../../../stores/courses';
import AnnouncementList from '../../../components/AnnouncementList.vue';
import TableControls from '../../../components/TableControls.vue';

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