<template>
        <main class="w-full">
            <StudentHeader :username="$route.params.user" title="Announcements"  subtitle="Courses / Announcements"/>
            <section class="flex px-10 pt-8">
                <Tab title="All" @click="sortType = 'All'" :sortType="sortType" obj="announcements"/>
                <Tab v-for="course in courses.courses" :title="course.courseName" obj="announcements" @click="sortType = course.courseName"/>
            </section>
            <TableControls/>
            <AnnouncementList :announcements="courses.sort(sortType,userCourses.coursess, 'announcements')"/>
        </main>
</template>

<script setup>
import StudentHeader from '../../../components/StudentHeader.vue'
import Tab from '../../../components/Tab.vue'
import { ref, reactive } from 'vue';
import { useCoursesStore } from '../../../stores/courses';
import AnnouncementList from '../../../components/AnnouncementList.vue';
import TableControls from '../../../components/TableControls.vue';


const courses = reactive(useCoursesStore())
const userCourses = reactive({
    coursess: courses.courses
})

const sortType = ref("All")

</script>


<style>

</style>